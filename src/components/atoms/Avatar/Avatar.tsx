import React, { forwardRef } from 'react';
import Styles from './Avatar.module.scss';
import { ImageAttributes } from '../../../types';
import { AvatarGroup } from '../AvatarGroup/AvatarGroup';

type AvatarProps = ImageAttributes & {
    className?: string;
    size?:
        | number
        | {
              width?: number;
              height?: number;
          };
    style?: React.CSSProperties;
    cover?: boolean;
};

interface AvatarComponent extends React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLImageElement>> {
    Group: typeof AvatarGroup;
}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
    ({ className = '', size = 30, style, cover = false, src, alt }: AvatarProps, ref) => {
        return (
            <img
                ref={ref}
                className={`${Styles.Avatar} ${className}`}
                src={src}
                alt={alt}
                style={{
                    width: typeof size === 'number' ? size : size?.width,
                    height: typeof size === 'number' ? size : size?.height,
                    minWidth: typeof size === 'number' ? size : style?.minWidth,
                    minHeight: typeof size === 'number' ? size : style?.minHeight,
                    objectFit: cover ? 'cover' : style?.objectFit,
                    ...style,
                }}
            />
        );
    },
) as AvatarComponent;

Avatar.Group = AvatarGroup;
