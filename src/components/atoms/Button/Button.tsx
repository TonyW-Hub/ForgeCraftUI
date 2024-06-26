import React, { PropsWithChildren } from 'react';
import Styles from './Button.module.scss';
import { ButtonClassNamesProps, ButtonShape, ButtonVariant, Size } from '../../../types';
import { Loader } from '../Loader/Loader';
import { ButtonLink } from '../Buttons/ButtonLink/ButtonLink';
// import { ButtonLink } from '../Buttons/ButtonLink/ButtonLink';

interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string;
    classNames?: ButtonClassNamesProps;
    disabled?: boolean;
    loading?: boolean;
    variant?: ButtonVariant;
    size?: Size;
    danger?: boolean;
    shape?: ButtonShape;
    icon?: React.ReactNode;
    endIcon?: boolean;
    style?: React.CSSProperties;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
    const {
        className = '',
        classNames = { button: '', loader: '', body: '' },
        disabled = false,
        loading = false,
        variant = 'default',
        size = 'middle',
        danger = false,
        shape = 'default',
        icon,
        endIcon = false,
        style,
        children,
        ...rest
    } = props;

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
            disabled ? Styles.notAllowed : '',
            loading ? Styles.loading : '',
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
        <button {...rest} className={setProps()} disabled={loading ? loading : disabled} style={styles}>
            {loading && (
                <Loader
                    className={classNames.loader}
                    variant={variant === 'outline' || variant === 'dashed' ? 'dark' : 'light'}
                    size={18}
                />
            )}
            {icon && !endIcon && icon}
            {children && <span className={classNames.body}>{children}</span>}
            {endIcon && icon && icon}
        </button>
    );
};

Button.Link = ButtonLink;
