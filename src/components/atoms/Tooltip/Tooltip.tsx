import React, { PropsWithChildren, useRef, useState, useEffect } from 'react';
import Styles from './Tooltip.module.scss';

type TooltipProps = {
    title?: string;
    style?: React.CSSProperties;
    position?: TooltipPosition;
    classNames?: TooltipClassNames;
};

type TooltipClassNames = {
    container?: string;
    trigger?: string;
    tooltip?: string;
};

type TooltipPosition = 'bottom' | 'right' | 'left' | 'top';

type CSSPosition = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    x?: number;
    y?: number;
};

export const Tooltip = ({
    title = '',
    position = 'top',
    classNames = { container: '', trigger: '', tooltip: '' },
    children,
}: PropsWithChildren<TooltipProps>) => {
    const tooltipRef = useRef<HTMLDivElement>(null);
    const tooltipContainerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(true);
    const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>(position);
    const [cssPosition, setCssPosition] = useState<CSSPosition>({ top: 100, left: 100 });

    const handleHover = (value: boolean) => {
        setVisible(value);
    };

    useEffect(() => {
        const handleResize = () => {
            if (tooltipRef?.current && tooltipContainerRef?.current && triggerRef?.current) {
                const container = tooltipContainerRef.current?.getBoundingClientRect();
                const trigger = triggerRef.current.getBoundingClientRect();
                const tooltip = tooltipRef.current?.getBoundingClientRect();

                const windowWidth = window.innerWidth;

                const scrollbarWidth = windowWidth - document.documentElement.clientWidth;
                const windowWidthWithoutScrollbar = windowWidth - scrollbarWidth;
                const windowHeight = window.innerHeight;
                let newPosition: TooltipPosition = tooltipPosition;

                switch (tooltipPosition) {
                    case 'bottom':
                        if (tooltip.bottom > windowHeight) newPosition = 'top';
                        break;
                    case 'top':
                        if (tooltip.top < 0) newPosition = 'bottom';
                        break;
                    case 'right':
                        if (tooltip.right > windowWidth) newPosition = 'bottom';
                        break;
                    case 'left':
                        if (tooltip.left < 0) newPosition = 'bottom';
                        break;

                    default:
                        break;
                }

                switch (newPosition) {
                    case 'bottom':
                        if (tooltip.right >= windowWidth) {
                            const resize = windowWidthWithoutScrollbar - tooltip.right - 10;
                            setCssPosition({
                                top: trigger.bottom - container.top + 3,
                                left: trigger.left - container.left + trigger.width / 2 + resize,
                            });
                            break;
                        }
                        if (tooltip.left <= 0) {
                            setCssPosition({
                                top: trigger.bottom - container.top + 3,
                                left:
                                    trigger.left -
                                    container.left +
                                    trigger.width / 2 +
                                    tooltipRef.current.offsetWidth / 2,
                            });
                            break;
                        }
                        setCssPosition({
                            top: trigger.bottom - container.top + 3,
                            left: trigger.left - container.left + trigger.width / 2,
                        });
                        break;
                    case 'top':
                        if (tooltip.right >= windowWidth) {
                            const resize = windowWidthWithoutScrollbar - tooltip.right - 10;
                            setCssPosition({
                                top: trigger.bottom - container.top + 3,
                                left: trigger.left - container.left + trigger.width / 2 + resize,
                            });
                            break;
                        }
                        if (tooltip.left <= 0) {
                            setCssPosition({
                                top: trigger.bottom - container.top + 3,
                                left:
                                    trigger.left -
                                    container.left +
                                    trigger.width / 2 +
                                    tooltipRef.current.offsetWidth / 2,
                            });
                            break;
                        }
                        setCssPosition({
                            bottom: container.bottom - trigger.top + 3,
                            left: trigger.left - container.left + trigger.width / 2,
                        });
                        break;
                    case 'right':
                        setCssPosition({
                            top: trigger.top - container.top + trigger.height / 2 - tooltipRef.current.offsetHeight / 2,
                            left: trigger.right - container.left + tooltipRef.current.offsetWidth / 2 + 3,
                        });
                        break;
                    case 'left':
                        setCssPosition({
                            top: trigger.top - container.top + trigger.height / 2 - tooltipRef.current.offsetHeight / 2,
                            right: trigger.right - container.left - tooltipRef.current.offsetWidth / 2 + 3,
                        });
                        break;
                    default:
                        break;
                }

                if (newPosition !== tooltipPosition) {
                    setTooltipPosition(newPosition);
                }
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [tooltipPosition, tooltipContainerRef, tooltipRef, triggerRef]);

    return (
        <div className={`${Styles.Tooltip} ${classNames.container}`} ref={tooltipContainerRef}>
            <div
                ref={triggerRef}
                className={`${Styles.TooltipTrigger} ${classNames.trigger}`}
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
            >
                {children}
            </div>
            {visible && (
                <div
                    ref={tooltipRef}
                    className={`${Styles.TooltipTitle} ${Styles[tooltipPosition]} ${classNames.tooltip}`}
                    onMouseEnter={() => handleHover(true)}
                    style={{
                        top: cssPosition?.top && `${cssPosition.top}px`,
                        bottom: cssPosition?.bottom && `${cssPosition.bottom}px`,
                        left: cssPosition?.left && `${cssPosition.left}px`,
                        right: cssPosition?.right && `${cssPosition.right}px`,
                    }}
                >
                    {title}
                </div>
            )}
        </div>
    );
};
