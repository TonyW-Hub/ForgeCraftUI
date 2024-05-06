import React, { PropsWithChildren } from 'react';
import Styles from './ButtonLink.module.scss';
import { ButtonClassNamesProps, ButtonShape, ButtonVariant, Size } from '../../../../types';

interface ButtonLinkProps {
    className?: string;
    classNames?: ButtonClassNamesProps;
    variant?: ButtonVariant;
    size?: Size;
    danger?: boolean;
    shape?: ButtonShape;
    icon?: React.ReactNode;
    endIcon?: boolean;
    link: string;
    target?: '_blank';
    style?: React.CSSProperties;
}

export const ButtonLink = ({
    className = '',
    classNames = { button: '', loader: '', body: '' },
    variant = 'link',
    size = 'middle',
    danger = false,
    shape = 'default',
    link = '#',
    target,
    icon,
    endIcon = false,
    style,
    children,
}: PropsWithChildren<ButtonLinkProps>) => {
    const setProps = () => {
        const sizeProps = {
            large: Styles.buttonLarge,
            middle: Styles.buttonMiddle,
            small: Styles.buttonSmall,
        };

        const variantProps = {
            default: danger ? Styles.buttonDangerDefault : Styles.buttonDefault,
            primary: Styles.buttonPrimary,
            secondary: Styles.buttonSecondary,
            tertiary: Styles.buttonTertiary,
            quaternary: Styles.buttonQuaternary,
            link: danger ? Styles.buttonDangerLink : Styles.buttonLink,
            text: danger ? Styles.buttonDangerText : Styles.buttonText,
            dashed: Styles.buttonDashed,
            outline: danger ? Styles.buttonDangerOutline : Styles.buttonOutline,
        };

        const shapeProps = {
            default: '',
            circle: Styles.buttonCircle,
            round: Styles.buttonRound,
        };

        return [
            Styles.Button,
            Styles.ButtonLink,
            className,
            classNames.button,
            typeof size === 'string' ? sizeProps[size] : '',
            variantProps[variant],
            shapeProps[shape],
        ].join(' ');
    };

    const styles = {
        width: typeof size === 'number' ? size : style?.width,
        height: typeof size === 'number' ? size : style?.height,
        minWidth: typeof size === 'number' ? size : style?.minWidth,
        minHeight: typeof size === 'number' ? size : style?.minHeight,
        ...style,
    };

    return (
        <a className={setProps()} href={link} target={target} style={styles}>
            {icon && !endIcon && icon}
            {children && <span className={classNames.body}>{children}</span>}
            {endIcon && icon && icon}
        </a>
    );
};
