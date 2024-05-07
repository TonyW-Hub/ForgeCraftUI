import React from 'react';
import Styles from './CircleCheckSVG.module.scss';

type CircleCheckSVGProps = {
    className?: string;
    onClick?: (e?: React.MouseEvent<HTMLOrSVGElement>) => void;
};

export const CircleCheckSVG = ({ className = '', onClick = () => {} }: CircleCheckSVGProps) => {
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
            className={`${Styles.CircleCheckSVG} ${className}`}
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
};
