import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import Styles from './CardCollapse.module.scss';
import { BasicSizeType, AvatarType, CSSPosition } from '../../../../types';
import { Backdrop } from '../../Backdrop/Backdrop';
import { Flex } from '../../Flex/Flex';
import { ChevronDownSVG } from '../../SVGs/ChevronDownSVG/ChevronDownSVG';
import { Image } from '../../Image/Image';

type classNamesCardCollapse = {
    card?: string;
    header?: string;
    headerWrapper?: string;
    body?: string;
    footer?: string;
    title?: string;
    avatar?: string;
    active?: {
        card?: string;
        header?: string;
        headerWrapper?: string;
        body?: string;
        footer?: string;
        title?: string;
        avatar?: string;
    };
};
type CardCollapseProps = {
    className?: string;
    classNames?: classNamesCardCollapse;
    title?: string;
    description?: string;
    size?: BasicSizeType;
    avatar?: AvatarType;
    bordered?: boolean;
    actions?: React.ReactNode;
    expandIcon?: React.ReactNode;
    expandIconPosition?: 'end' | 'start';
    style?: React.CSSProperties;
    variant?: 'collapse' | 'menu';
};

export const CardCollapse = ({
    className = '',
    classNames = {
        card: '',
        avatar: '',
        header: '',
        headerWrapper: '',
        body: '',
        footer: '',
        title: '',
        active: {
            card: '',
            avatar: '',
            header: '',
            headerWrapper: '',
            body: '',
            footer: '',
            title: '',
        },
    },
    title,
    description,
    bordered = false,
    size = 'small',
    avatar,
    actions,
    expandIcon,
    expandIconPosition = 'end',
    variant = 'collapse',
    style,
    children,
}: PropsWithChildren<CardCollapseProps>) => {
    const [visible, setVisible] = useState<boolean>(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const [dropdownPosition, setDropdownPosition] = useState<CSSPosition>({ top: 45 });

    const handleSetClassNamesCard = () => {
        const border = bordered ? Styles.bordered : '';
        const sizing = {
            small: Styles.smallCardCollapse,
            middle: Styles.middleCardCollapse,
            large: Styles.largeCardCollapse,
        };

        return [Styles.CardCollapse, sizing[size], border, className, classNames.card].join(' ');
    };

    const handleDisplayAvatar = () => {
        if (!avatar) return null;

        if (typeof avatar === 'object' && 'src' in avatar) {
            return (
                <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    size={avatar?.size}
                    bordered={avatar?.bordered}
                    className={`${Styles.avatar} ${classNames.avatar}`}
                />
            );
        }

        return avatar;
    };

    const handleVisible = () => {
        setVisible((prev) => !prev);
    };

    const displayVariantContent = () => {
        const current = {
            collapse: (
                <div className={`${classNames.body} ${Styles.wrapper} ${visible ? Styles.isVisible : ''}`}>
                    <div className={`${Styles.inner}`}>
                        <div>{children}</div>
                        {actions && <div className={`${Styles.footer} ${classNames.footer}`}>{actions}</div>}
                    </div>
                </div>
            ),
            menu: visible ? (
                <>
                    <Backdrop onCancel={() => setVisible(false)} />
                    <Flex
                        vertical
                        align="stretch"
                        gap={4}
                        className={`${Styles.menu} ${classNames.body}`}
                        ref={menuRef}
                        style={{
                            top: dropdownPosition.top && dropdownPosition.top,
                            bottom: dropdownPosition.bottom && dropdownPosition.bottom,
                        }}
                    >
                        {children}
                    </Flex>
                </>
            ) : null,
        };

        return current[variant];
    };

    useEffect(() => {
        if (variant !== 'menu') return;
        if (!cardRef.current || !menuRef?.current) return;

        const handleResize = () => {
            if (!cardRef.current || !menuRef?.current) return;
            const container = cardRef.current.getBoundingClientRect();
            const dropdown = menuRef?.current?.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (dropdown.bottom >= windowHeight) {
                setDropdownPosition((prev) => ({
                    ...prev,
                    top: container.top - dropdown.height - container.height,
                }));
            } else {
                setDropdownPosition((prev) => ({ ...prev, top: container.height }));
            }
        };
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardRef?.current, variant]);

    return (
        <div className={handleSetClassNamesCard()} ref={cardRef} style={{ ...style }}>
            <Flex vertical className={`${Styles.header} ${classNames.header}`} onClick={handleVisible}>
                <div
                    className={`${Styles.headerWrapper} ${classNames.headerWrapper} ${
                        visible ? classNames.active?.headerWrapper : ''
                    }`}
                    style={{
                        display: 'flex',
                        flexDirection: expandIconPosition === 'start' ? 'row-reverse' : 'row',
                    }}
                >
                    <Flex style={{ flex: '1' }}>
                        {handleDisplayAvatar()}
                        <div className={Styles.details}>
                            <div className={`${Styles.title} ${classNames.title}`}>{title}</div>
                            {description && <p className={Styles.description}>{description}</p>}
                        </div>
                    </Flex>
                    {expandIcon ? (
                        expandIcon
                    ) : (
                        <ChevronDownSVG
                            style={
                                visible
                                    ? {
                                          transform: 'scaleY(-1)',
                                          transition: 'transform 0.2s ease-in',
                                      }
                                    : {
                                          transform: 'scaleY(1)',
                                          transition: 'transform 0.2s ease-in',
                                      }
                            }
                        />
                    )}
                </div>
            </Flex>
            {displayVariantContent()}
        </div>
    );
};
