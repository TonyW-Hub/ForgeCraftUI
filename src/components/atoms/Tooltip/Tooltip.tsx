import React, { PropsWithChildren, useRef, useState, useEffect } from 'react';
import Styles from './Tooltip.module.scss';
import { TooltipVariant } from '../../../types';
import { createPortal } from 'react-dom';

type TooltipProps = {
    title?: string;
    custom?: React.ReactNode;
    style?: React.CSSProperties;
    position?: TooltipPosition;
    classNames?: TooltipClassNames;
    variant?: TooltipVariant;
    trigger?: 'hover' | 'click' | 'focus';
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
    variant = 'default',
    trigger = 'hover',
    custom,
    children,
}: PropsWithChildren<TooltipProps>) => {
    const tooltipRef = useRef<HTMLDivElement>(null);
    const tooltipContainerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>(position);
    const [cssPosition, setCssPosition] = useState<CSSPosition>({ top: 0, left: 0 });
    const [translate, setTranslate] = useState<string>('-50%');

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
                        else newPosition = 'bottom';

                        if (position === 'left' && trigger.left - tooltip.width - 3 > 0) newPosition = 'left';
                        if (position === 'right' && trigger.right + tooltip.width + 3 < windowWidthWithoutScrollbar)
                            newPosition = 'right';
                        break;
                    case 'top':
                        if (tooltip.top < 0) newPosition = 'bottom';
                        else newPosition = 'top';
                        break;
                    case 'right':
                        if (trigger.right + tooltip.width + 3 > windowWidthWithoutScrollbar) newPosition = 'bottom';
                        else newPosition = 'right';
                        break;
                    case 'left':
                        if (trigger.left - tooltip.width - 3 < 0) newPosition = 'bottom';
                        else newPosition = 'left';
                        break;

                    default:
                        break;
                }

                const setNewPosition = (position: TooltipPosition) => {
                    if (position === 'left') {
                        setCssPosition({
                            top: trigger.y,
                            right: trigger.right + 3,
                        });
                        setTranslate('0%');
                        return;
                    }

                    if (position === 'right') {
                        setCssPosition({
                            top: trigger.y,
                            left: trigger.right + 3,
                        });
                        setTranslate('0%');
                        return;
                    }

                    if (position === 'bottom') {
                        if (
                            tooltip.left < 0 ||
                            (trigger.width < tooltip.width && trigger.left - tooltip.width / 2 < 0)
                        ) {
                            setCssPosition({
                                top: trigger.y + (trigger.bottom - container.top + 3),
                                left: 3,
                            });
                            setTranslate('0%');
                            return;
                        }
                        if (
                            tooltip.right >= windowWidth ||
                            (trigger.width < tooltip.width && trigger.right + tooltip.width / 2 >= windowWidth)
                        ) {
                            setCssPosition({
                                top: trigger.y + (trigger.bottom - container.top + 3),
                                right: 3,
                            });
                            setTranslate('0%');
                            return;
                        }
                        if (tooltip.left > 0 && tooltip.right < windowWidth) {
                            setCssPosition({
                                top: trigger.y + (trigger.bottom - container.top + 3),
                                left: trigger.x + (trigger.left - container.left + trigger.width / 2),
                            });
                            setTranslate('-50%');
                            return;
                        }
                    }

                    if (position === 'top') {
                        if (
                            tooltip.left < 0 ||
                            (trigger.width < tooltip.width && trigger.left - tooltip.width / 2 < 0)
                        ) {
                            setCssPosition({
                                top: trigger.y - tooltip.height - 3,
                                left: 3,
                            });
                            setTranslate('0%');
                            return;
                        }
                        if (
                            tooltip.right >= windowWidth ||
                            (trigger.width < tooltip.width && trigger.right + tooltip.width / 2 >= windowWidth)
                        ) {
                            setCssPosition({
                                top: trigger.y - tooltip.height - 3,
                                right: 3,
                            });
                            setTranslate('0%');
                            return;
                        }
                        if (tooltip.left > 0 && tooltip.right < windowWidth) {
                            setCssPosition({
                                top: trigger.y - tooltip.height - 3,
                                left: trigger.x + (trigger.left - container.left + trigger.width / 2),
                            });
                            setTranslate('-50%');
                            return;
                        }
                    }
                };

                setNewPosition(newPosition);

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
    }, [tooltipPosition, trigger, tooltipContainerRef?.current, tooltipRef?.current, triggerRef?.current, position]);

    return (
        <div className={`${Styles.Tooltip} ${classNames.container}`} ref={tooltipContainerRef}>
            <div
                ref={triggerRef}
                className={`${Styles.TooltipTrigger} ${classNames.trigger}`}
                onMouseEnter={() => trigger === 'hover' && handleHover(true)}
                onMouseLeave={() => trigger === 'hover' && handleHover(false)}
                onClick={() => trigger === 'click' && handleHover(!visible)}
                onFocus={() => trigger === 'focus' && handleHover(!visible)}
            >
                {children}
            </div>
            {visible &&
                createPortal(
                    <div
                        ref={tooltipRef}
                        className={`${Styles.TooltipTitle} ${Styles[tooltipPosition]} ${Styles[variant]} ${classNames.tooltip}`}
                        onMouseEnter={() => handleHover(true)}
                        style={{
                            top: cssPosition?.top && `${cssPosition.top}px`,
                            bottom: cssPosition?.bottom && `${cssPosition.bottom}px`,
                            left: cssPosition?.left && `${cssPosition.left}px`,
                            right: cssPosition?.right && `${cssPosition.right}px`,
                            transform: `translateX(${translate})`,
                        }}
                    >
                        {custom ? custom : title}
                    </div>,
                    document.body,
                )}
        </div>
    );
};
