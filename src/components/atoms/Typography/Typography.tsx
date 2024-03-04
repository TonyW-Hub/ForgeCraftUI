import React, { CSSProperties, PropsWithChildren, useEffect, useState } from 'react';
import Styles from './Typography.module.scss';

type TypographyProps = {
    className?: string;
    ellipsis?: {
        rows?: number;
        expandable?: boolean;
    };
    style?: CSSProperties;
    type?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'warning' | 'danger';
    underline?: boolean;
    strong?: boolean;
    italic?: boolean;
};

type TypographyTitleProps = TypographyProps & {
    level?: number;
    onClick?: (e: React.MouseEvent) => void;
};

export const Typography = ({ className = '' }: PropsWithChildren<TypographyProps>) => {
    return <div className={`${Styles.Typography} ${className}`}></div>;
};

const Title = ({
    level,
    className = '',
    onClick,
    style,
    ellipsis,
    underline = false,
    strong = false,
    italic = false,
    children,
}: PropsWithChildren<TypographyTitleProps>) => {
    const [titleTag, setTitleTag] = useState('h1');

    const styles: CSSProperties = {
        fontStyle: italic ? 'italic' : '',
        fontWeight: strong ? 'bold' : '',
        textDecoration: underline ? 'underline' : '',
        overflow: ellipsis && 'hidden',
        textOverflow: ellipsis && 'ellipsis',
        display: ellipsis && '-webkit-box',
        WebkitLineClamp: ellipsis && ellipsis?.rows,
        WebkitBoxOrient: ellipsis && 'vertical',
        ...style,
    };

    useEffect(() => {
        switch (level) {
            case 1:
                setTitleTag('h1');
                break;
            case 2:
                setTitleTag('h2');
                break;
            case 3:
                setTitleTag('h3');
                break;
            case 4:
                setTitleTag('h4');
                break;
            case 5:
                setTitleTag('h5');
                break;
            case 6:
                setTitleTag('h6');
                break;
            default:
                setTitleTag('h1');
                break;
        }
    }, [level]);

    return React.createElement(
        titleTag,
        { className: `${Styles.Title} ${className}`, onClick, style: styles },
        children,
    );
};

Typography.Title = Title;
