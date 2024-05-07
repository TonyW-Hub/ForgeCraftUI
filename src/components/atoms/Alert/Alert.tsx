import React, { PropsWithChildren } from 'react';
import Styles from './Alert.module.scss';
import { XSVG } from '../SVGs/XSVG/XSVG';
import { AlertType, AlertVariant } from '../../../types';
import { AlertCircleSVG } from '../SVGs/AlertsSVGs/AlertCircleSVG/AlertCircleSVG';
import { AlertTriangleSVG } from '../SVGs/AlertsSVGs/AlertTriangleSVG/AlertTriangleSVG';
import { CircleCheckSVG } from '../SVGs/CheksSVGs/CircleCheckSVG/CircleCheckSVG';
import { InfoSVG } from '../SVGs/InfoSVG/InfoSVG';

type AlertProps = {
    type: AlertType;
    variant?: AlertVariant;
    className?: string;
    style?: React.CSSProperties;
    visible?: boolean;
    onRemove?: () => void;
};

export const Alert = ({
    type,
    variant = 'background',
    className = '',
    style,
    visible = true,
    onRemove,
    children,
}: PropsWithChildren<AlertProps>) => {
    const setIcon = () => {
        if (!type) return null;

        const icons = {
            error: <AlertCircleSVG />,
            warning: <AlertTriangleSVG />,
            success: <CircleCheckSVG />,
            info: <InfoSVG />,
        };

        return icons[type];
    };

    const setVariantPerType = () => {
        if (!type) return '';

        const backgrounds = {
            error: Styles.errorBg,
            warning: Styles.warningBg,
            success: Styles.successBg,
            info: Styles.infoBg,
        };
        const texts = {
            error: Styles.error,
            warning: Styles.warning,
            success: Styles.success,
            info: Styles.info,
        };

        const variants = {
            background: backgrounds[type],
            text: texts[type],
        };

        return variants[variant];
    };

    if (!visible) return null;

    return (
        <div
            className={`${Styles.Alert} ${setVariantPerType()} ${className}`}
            style={{ paddingRight: onRemove ? 20 : style?.paddingRight, ...style }}
        >
            {setIcon()}
            <p>{children}</p>
            {onRemove && <XSVG className={Styles.xIcon} size={15} onClick={onRemove} />}
        </div>
    );
};
