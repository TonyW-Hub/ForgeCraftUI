import React, { PropsWithChildren, useState } from 'react';
import Styles from './FloatButton.module.scss';
import { createPortal } from 'react-dom';
import { CloseSVG } from '../SVGs/CloseSVG/CloseSVG';

type FloatButtonClassNames = {
    button?: string;
    icon?: string;
    description?: string;
};

type FloatButtonProps = {
    classNames?: FloatButtonClassNames;
    icon?: React.ReactNode;
    description?: string;
    variant?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    trigger?: 'click' | 'hover';
    link?: string;
    target?: '_blank';
    shape?: 'circle' | 'square';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    portal?: boolean;
    style?: React.CSSProperties;
};

export const FloatButton = ({
    classNames = { button: '', description: '', icon: '' },
    icon,
    description,
    variant = 'default',
    trigger = 'click',
    link,
    target,
    shape = 'circle',
    onClick,
    portal = false,
    style,
}: FloatButtonProps) => {
    const setProps = () => {
        const shapeProps = {
            circle: Styles.FloatButtonCircle,
            square: Styles.FloatButtonSquare,
        };

        const variantProps = {
            default: Styles.FloatButtonDefault,
            primary: Styles.FloatButtonPrimary,
            secondary: Styles.FloatButtonSecondary,
            tertiary: Styles.FloatButtonTertiary,
            quaternary: Styles.FloatButtonQuaternary,
        };

        return [
            Styles.FloatButton,
            portal ? Styles.FloatButtonPortal : '',
            classNames.button,
            shapeProps[shape],
            variantProps[variant],
        ].join(' ');
    };

    const displayFloatButton = () => {
        if (link) {
            return (
                <a href={link} target={target} style={{ ...style }} className={`${setProps()} ${Styles.link} `}>
                    {icon && <span className={`${Styles.icon} ${classNames.icon}`}>{icon}</span>}
                    {description && (
                        <span className={`${Styles.description} ${classNames.description}`}>{description}</span>
                    )}
                </a>
            );
        } else {
            return (
                <button
                    style={{ ...style, cursor: trigger === 'click' ? 'pointer' : 'initial' }}
                    className={setProps()}
                    onClick={onClick}
                >
                    {icon && <span className={`${Styles.icon} ${classNames.icon}`}>{icon}</span>}
                    {description && (
                        <span className={`${Styles.description} ${classNames.description}`}>{description}</span>
                    )}
                </button>
            );
        }
    };

    if (portal) return createPortal(displayFloatButton(), document.body);

    return displayFloatButton();
};

type FloatButtonGroupProps = FloatButtonProps & {
    open: boolean;
    closeIcon?: React.ReactNode;
};

const FloatButtonGroup = ({
    open = false,
    icon,
    closeIcon,
    description,
    shape,
    children,
}: PropsWithChildren<FloatButtonGroupProps>) => {
    const [groupOpen, setGroupOpen] = useState(open);

    const setIcon = () => {
        if (groupOpen) {
            return closeIcon ? closeIcon : <CloseSVG />;
        } else {
            return icon;
        }
    };

    return createPortal(
        <article className={`${Styles.FloatButtonGroup}`}>
            <FloatButton
                icon={setIcon()}
                onClick={() => setGroupOpen((prev) => !prev)}
                description={description}
                shape={shape}
            />
            <div className={`${Styles.menu} ${groupOpen ? Styles.menuActive : ''}`}>{children}</div>
        </article>,
        document.body,
    );
};

FloatButton.Group = FloatButtonGroup;
