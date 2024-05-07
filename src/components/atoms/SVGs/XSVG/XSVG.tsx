import React, { PropsWithChildren } from 'react';
import Styles from './XSVG.module.scss';

type XSVGProps = {
    className?: string;
    size?: number;
    onClick?: (e?: React.MouseEvent) => void;
};

export const XSVG = ({ className = '', size = 24, onClick = () => {} }: PropsWithChildren<XSVGProps>) => {
    return (
        <div className={Styles.XSVG}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${Styles.XSVG} ${className}`}
                style={{ width: size, height: size }}
                onClick={onClick}
            >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
            </svg>
        </div>
    );
};
