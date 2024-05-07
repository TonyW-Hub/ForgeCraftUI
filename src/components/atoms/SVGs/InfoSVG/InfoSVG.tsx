import React from 'react';
import Styles from './InfoSVG.module.scss';

type InfoSVGProps = { className?: string; onClick?: (e?: React.MouseEvent<HTMLOrSVGElement>) => void };

export const InfoSVG = ({ className = '', onClick = () => {} }: InfoSVGProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`${Styles.InfoSVG} ${className}`}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    );
};
