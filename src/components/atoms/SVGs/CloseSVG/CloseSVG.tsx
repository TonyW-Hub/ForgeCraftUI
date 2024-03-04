import Styles from './CloseSVG.module.scss';

type CloseSVGProps = {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLOrSVGElement>) => void;
};

export const CloseSVG = ({ className = '', onClick }: CloseSVGProps) => {
    return (
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
            className={`${Styles.closeSVG} ${className}`}
            onClick={onClick && onClick}
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
};
