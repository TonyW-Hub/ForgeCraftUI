import React, { PropsWithChildren, useState } from 'react';
import Styles from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { Typography } from '../Typography/Typography';
import { CloseSVG } from '../SVGs/CloseSVG/CloseSVG';
import { Flex } from '../Flex/Flex';
import { FlexJustify } from '../../../types';
import { Button } from '../Button/Button';

type ModalClassNames = {
    backdrop?: string;
    modal?: string;
    header?: string;
    body?: string;
    footer?: string;
    close?: string;
};

type ModalTexts = {
    cancelText?: string;
    ContinueText?: string;
};

type ModalProps = {
    visible: boolean;
    onCancel?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    onContinue?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    backdrop?: {
        show?: boolean;
        closable?: boolean;
    };
    title?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    footerPosition?: FlexJustify;
    close?: React.ReactNode;
    closeVisible?: boolean;
    classNames?: ModalClassNames;
    texts?: ModalTexts;
};

export const Modal = ({
    visible,
    onCancel,
    onContinue,
    backdrop = {
        show: true,
        closable: false,
    },
    title,
    header,
    footer,
    footerPosition = 'flex-end',
    close,
    closeVisible = true,
    classNames = { modal: '', backdrop: '', body: '', footer: '', header: '', close: '' },
    texts = { cancelText: 'Cancel', ContinueText: 'Continue' },
    children,
}: PropsWithChildren<ModalProps>) => {
    const [decreaseAnimation, setDecreaseAnimation] = useState<boolean>(false);

    if (!visible) return null;

    const backdropProps = { ...backdrop, ...{ show: backdrop.show ?? true, closable: backdrop.closable ?? false } };
    const textsProps = {
        ...texts,
        ...{ cancelText: texts.cancelText ?? 'Cancel', ContinueText: texts.ContinueText ?? 'Continue' },
    };

    const handleCloseAnimation = () => {
        if (!onCancel) return;
        setDecreaseAnimation((prev) => !prev);
        setTimeout(() => {
            onCancel();
            setDecreaseAnimation((prev) => !prev);
        }, 200);
    };

    const handleBackdrop = () => {
        if (backdropProps.closable && onCancel) {
            handleCloseAnimation();
        }
    };

    return createPortal(
        <div
            className={`${Styles.backdrop} ${classNames?.backdrop} ${backdropProps.show ? Styles.backdropActive : ''} ${
                decreaseAnimation ? Styles.fadeBackdrop : ''
            }`}
            onClick={handleBackdrop}
        >
            <Flex
                vertical
                role="dialog"
                className={`${Styles.Modal} ${classNames.modal} ${decreaseAnimation ? Styles.decreaseAnimation : ''}`}
                gap={'medium'}
                onClick={(e) => e.stopPropagation()}
            >
                {closeVisible && (
                    <button className={`${Styles.cancelBtnCross} ${classNames.close}`} onClick={handleCloseAnimation}>
                        {close ? close : <CloseSVG />}
                    </button>
                )}
                {header && header}
                {title && !header && (
                    <div className={`${Styles.ModalHeader} ${classNames.header}`}>
                        <Typography.Title level={3}>{title}</Typography.Title>
                    </div>
                )}
                <Flex vertical className={`${Styles.ModalBody} ${classNames.body}`}>
                    {children}
                </Flex>
                {footer && footer}
                {!footer && (
                    <Flex
                        justify={footerPosition}
                        gap={'small'}
                        style={{ width: '100%' }}
                        className={classNames.footer}
                    >
                        <Button onClick={handleCloseAnimation} size="small" variant="outline">
                            {textsProps?.cancelText}
                        </Button>
                        <Button onClick={onContinue} size="small" variant="primary">
                            {textsProps?.ContinueText}
                        </Button>
                    </Flex>
                )}
            </Flex>
        </div>,
        document.getElementById('root') || document.body,
    );
};
