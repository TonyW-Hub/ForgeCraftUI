import React from 'react';
import Styles from './AlertCircleSVG.module.scss';

type AlertCircleSVGProps = {
    className?: string;
    onClick?: (e?: React.MouseEvent<HTMLOrSVGElement>) => void;
};

export const AlertCircleSVG = ({ className = '', onClick = () => {} }: AlertCircleSVGProps) => {
    return (
        <svg
            className={`${Styles.AlertCircleSVG} ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={onClick}
        >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
    );
};
