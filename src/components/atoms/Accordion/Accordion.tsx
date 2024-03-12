import React, { PropsWithChildren } from 'react';
import Styles from './Accordion.module.scss';
import { Card } from '../Card/Card';

type AccordionProps = {
    className?: string;
    items: { key: string; title: string; children: React.ReactNode }[];
};

export const Accordion = ({ items = [], className = '' }: PropsWithChildren<AccordionProps>) => {
    return (
        <div className={`${Styles.Accordion} ${className}`}>
            {items?.map((item, index) => (
                <Card.Collapse key={item.key + index} title={item.title} classNames={{ main: Styles.main }}>
                    {item.children}
                </Card.Collapse>
            ))}
        </div>
    );
};
