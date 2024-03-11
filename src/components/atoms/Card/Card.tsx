import React, { PropsWithChildren } from 'react';
import Styles from './Card.module.scss';
import { Size } from '../../../types';
import { Flex } from '../Flex/Flex';

type classNamesCard = {
    main?: string;
    header?: string;
    body?: string;
    footer?: string;
    extra?: string;
    title?: string;
    avatar?: string;
    cover?: string;
};

type CardProps = {
    classNames?: classNamesCard;
    title?: string;
    description?: string;
    size?: Size;
    avatar?: React.ReactNode | { src: string; alt: string };
    bordered?: boolean;
    cover?: React.ReactNode;
    extra?: React.ReactNode;
    actions?: React.ReactNode;
    style?: React.CSSProperties;
};

export const Card = ({
    classNames = { main: '', header: '', body: '', footer: '', extra: '', title: '', avatar: '', cover: '' },
    size = 'middle',
    title,
    description,
    avatar,
    bordered = false,
    cover,
    extra,
    actions,
    style,
    children,
}: PropsWithChildren<CardProps>) => {
    const handleCheckHeaderCondition = () => {
        return title || extra || description || avatar;
    };

    const handleSetClassNamesCard = () => {
        const border = bordered ? Styles.bordered : '';
        const sizing = {
            small: Styles.smallCard,
            middle: Styles.middleCard,
            large: Styles.largeCard,
        };

        return [Styles.Card, sizing[size], border, classNames.main].join(' ');
    };

    const handleDisplayAvatar = () => {
        if (!avatar) return null;

        if (typeof avatar === 'object' && 'src' in avatar) {
            return <img src={avatar.src} alt={avatar.alt} className={`${Styles.avatar} ${classNames.avatar}`} />;
        }

        return avatar;
    };

    return (
        <div className={handleSetClassNamesCard()} style={{ ...style }}>
            {cover && <div className={`${Styles.cover} ${classNames.cover}`}>{cover}</div>}
            {handleCheckHeaderCondition() && (
                <Flex vertical className={`${Styles.header} ${classNames.header}`}>
                    <div className={Styles.headerWrapper}>
                        {handleDisplayAvatar()}
                        <div className={Styles.details}>
                            <div className={`${Styles.title} ${classNames.title}`}>{title}</div>
                            {description && <p className={Styles.description}>{description}</p>}
                        </div>
                        {extra && (
                            <Flex gap={'small'} className={`${Styles.extra} ${classNames.extra}`}>
                                {extra}
                            </Flex>
                        )}
                    </div>
                </Flex>
            )}
            <Flex vertical justify="space-between" align="stretch" className={Styles.bodyWrapper}>
                <div className={`${Styles.body} ${classNames.body}`}>{children}</div>
                {actions && <div className={`${Styles.footer} ${classNames.footer}`}>{actions}</div>}
            </Flex>
        </div>
    );
};
