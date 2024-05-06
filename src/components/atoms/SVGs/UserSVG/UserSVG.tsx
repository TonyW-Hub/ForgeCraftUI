import React from 'react';
import Styles from './UserSVG.module.scss';

type UserSVGProps = {
    className?: string;
    onClick?: (e?: React.MouseEvent<SVGElement>) => void;
};

export const UserSVG = ({ className = '', onClick = () => {} }: UserSVGProps) => {
    return (
        <svg
            className={`${Styles.UserSVG} ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={onClick}
        >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
    );
};
