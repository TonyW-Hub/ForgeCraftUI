import React, { PropsWithChildren, useState } from 'react';
import Styles from './Backdrop.module.scss';

type BackdropProps = {
    variant?: 'transparent' | 'darkOpacity';
    onCancel?: () => void;
    closeAnimation?: boolean;
};

export const Backdrop = ({
    variant = 'transparent',
    onCancel,
    closeAnimation = false,
    children,
}: PropsWithChildren<BackdropProps>) => {
    const [decreaseAnimation, setDecreaseAnimation] = useState<boolean>(false);

    const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (!onCancel) return;
        if (closeAnimation) {
            setDecreaseAnimation((prev) => !prev);
            setTimeout(() => {
                onCancel();
                setDecreaseAnimation((prev) => !prev);
            }, 200);
        } else {
            onCancel();
        }
    };
    return (
        <div className={Styles.Backdrop} onClick={handleBackdrop}>
            {children}
        </div>
    );
};
