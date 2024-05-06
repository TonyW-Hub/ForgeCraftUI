import { PropsWithChildren } from 'react';
import Styles from './Loader.module.scss';
import { Flex } from '../Flex/Flex';

type LoaderProps = {
    size?: number;
    variant?: 'light' | 'dark';
    className?: string;
    textPosition?: 'bottom' | 'top' | 'right' | 'left';
};

export const Loader = ({
    size = 40,
    variant,
    className = '',
    textPosition = 'bottom',
    children,
}: PropsWithChildren<LoaderProps>) => {
    if (children) {
        return (
            <Flex
                vertical={textPosition === 'bottom' || textPosition === 'right'}
                gap={4}
                align="center"
                reverse={textPosition === 'top' || textPosition === 'left'}
            >
                <span
                    className={`${Styles.Loader} ${variant === 'dark' ? Styles.dark : ''} ${className}`}
                    style={size ? { width: size, height: size, minWidth: size, minHeight: size } : {}}
                ></span>
                <span>{children}</span>
            </Flex>
        );
    }

    return (
        <span
            className={`${Styles.Loader} ${variant === 'dark' ? Styles.dark : ''} ${className}`}
            style={size ? { width: size, height: size, minWidth: size, minHeight: size } : {}}
        ></span>
    );
};
