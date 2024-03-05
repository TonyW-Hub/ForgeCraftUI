import React, { PropsWithChildren } from 'react';
import Styles from './Tooltip.module.scss';

type TooltipProps = {};

export const Tooltip = (props: PropsWithChildren<TooltipProps>) => {
    return <div className={Styles.Tooltip}></div>;
};
