import React, { PropsWithChildren } from 'react';
import Styles from './Button.module.scss';
import { ButtonShape, ButtonVariant, Size } from '../../../types';
import { Loader } from '../Loader/Loader';

type ButtonClassNamesProps = {
    button?: string;
    loader?: string;
    body?: string;
};

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    classNames?: ButtonClassNamesProps;
    disabled?: boolean;
    loading?: boolean;
    variant?: ButtonVariant;
    size?: Size;
    danger?: boolean;
    shape?: ButtonShape;
    icon?: React.ReactNode;
    endIcon?: boolean;
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
    const {
        classNames = { button: '', loader: '', body: '' },
        disabled = false,
        loading = false,
        variant = 'default',
        size = 'middle',
        danger = false,
        shape = 'default',
        icon,
        endIcon = false,
        children,
        ...rest
    } = props;

    const setProps = () => {
        let sizeProps, variantProps, shapeProps;
        const loadingProps = loading ? Styles.loading : '';
        const notAllowed = disabled && !loading ? Styles.notAllowed : '';

        switch (size) {
            case 'large':
                sizeProps = Styles.buttonLarge;
                break;
            case 'middle':
                sizeProps = Styles.buttonMiddle;
                break;
            case 'small':
                sizeProps = Styles.buttonSmall;
                break;

            default:
                sizeProps = '';
                break;
        }

        switch (variant) {
            case 'default':
                danger ? (variantProps = Styles.buttonDangerDefault) : (variantProps = Styles.buttonDefault);
                break;
            case 'primary':
                variantProps = Styles.buttonPrimary;
                break;
            case 'secondary':
                variantProps = Styles.buttonSecondary;
                break;
            case 'tertiary':
                variantProps = Styles.buttonTertiary;
                break;
            case 'quaternary':
                variantProps = Styles.buttonQuaternary;
                break;
            case 'link':
                danger ? (variantProps = Styles.buttonDangerLink) : (variantProps = Styles.buttonLink);
                break;
            case 'text':
                danger ? (variantProps = Styles.buttonDangerText) : (variantProps = Styles.buttonText);
                break;
            case 'dashed':
                variantProps = Styles.buttonDashed;
                break;
            case 'outline':
                danger ? (variantProps = Styles.buttonDangerOutline) : (variantProps = Styles.buttonOutline);
                break;

            default:
                variantProps = '';
                break;
        }

        switch (shape) {
            case 'circle':
                shapeProps = Styles.buttonCircle;
                break;
            case 'round':
                shapeProps = Styles.buttonRound;
                break;

            default:
                shapeProps = '';
                break;
        }

        return [Styles.Button, classNames.button, sizeProps, variantProps, loadingProps, notAllowed, shapeProps].join(
            ' ',
        );
    };

    return (
        <button {...rest} className={setProps()} disabled={loading ? loading : disabled}>
            {loading && (
                <Loader
                    className={classNames.loader}
                    variant={variant === 'outline' || variant === 'dashed' ? 'dark' : 'light'}
                    size={18}
                />
            )}
            {icon && !endIcon && icon}
            <span className={classNames.body}>{children}</span>
            {endIcon && icon && icon}
        </button>
    );
};

type ButtonLink = {
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    variant?: ButtonVariant;
    size?: Size;
    link?: string;
    target?: '_blank';
};

const ButtonLink = ({
    className = '',
    disabled = false,
    loading = false,
    variant = 'default',
    size = 'middle',
    target,
    link = '#',
    children,
}: PropsWithChildren<ButtonLink>) => {
    return (
        <a href={link} target={target}>
            {children}
        </a>
    );
};

Button.Link = ButtonLink;
