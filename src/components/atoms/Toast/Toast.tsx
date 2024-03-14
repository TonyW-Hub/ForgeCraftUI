import React, { PropsWithChildren, useEffect, useState } from 'react';
import Styles from './Toast.module.scss';
import { createPortal } from 'react-dom';
import { Flex } from '../Flex/Flex';
import { CloseSVG } from '../SVGs/CloseSVG/CloseSVG';

type ToastProps = {
    position?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    description?: string;
    type?: 'action';
};

export const Toast = ({ position = 'bottomRight', description, type, children }: PropsWithChildren<ToastProps>) => {
    const [visible, setVisible] = useState<boolean>(true);

    const handleToastClassName = () => {
        const positionToast = {
            bottomRight: Styles.ToastBottomRight,
            bottomCenter: Styles.ToastBottomCenter,
            bottomLeft: Styles.ToastBottomLeft,
            topRight: Styles.ToastTopRight,
            topCenter: Styles.ToastTopCenter,
            topLeft: Styles.ToastTopLeft,
        };

        return [Styles.Toast, positionToast[position]].join(' ');
    };

    useEffect(() => {
        if (type === 'action') return;

        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (!visible) return null;

    return createPortal(
        <Flex vertical className={handleToastClassName()}>
            <span style={description ? { fontWeight: 'bold' } : {}}>{children}</span>
            {description && <span className={`${Styles.description}`}>{description}</span>}
            {type === 'action' && (
                <button className={`${Styles.cancelBtnCross}`} onClick={() => setVisible(false)}>
                    <CloseSVG />
                </button>
            )}
        </Flex>,
        document.body,
    );
};

const ToastSuccess = ({ position = 'bottomRight', children }: PropsWithChildren<ToastProps>) => {
    const handleToastClassName = () => {
        const positionToast = {
            bottomRight: Styles.ToastBottomRight,
            bottomCenter: Styles.ToastBottomCenter,
            bottomLeft: Styles.ToastBottomLeft,
            topRight: Styles.ToastTopRight,
            topCenter: Styles.ToastTopCenter,
            topLeft: Styles.ToastTopLeft,
        };

        return [Styles.Toast, positionToast[position], Styles.Success].join(' ');
    };

    return createPortal(
        <Flex align="center" gap={'small'} className={handleToastClassName()}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
            </svg>{' '}
            {children}
        </Flex>,
        document.body,
    );
};

Toast.Success = ToastSuccess;
