import { PropsWithChildren } from 'react';
import Styles from './Loader.module.scss';

type LoaderProps = {
    size?: number;
    variant?: 'light' | 'dark';
    className?: string;
};

export const Loader = ({ size, variant, className = '' }: PropsWithChildren<LoaderProps>) => {
    return (
        <span
            className={`${Styles.Loader} ${variant === 'dark' ? Styles.dark : ''} ${className}`}
            style={size ? { width: size, height: size } : {}}
        ></span>
    );
};
