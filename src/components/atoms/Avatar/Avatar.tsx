import React, { forwardRef } from 'react';
import Styles from './Avatar.module.scss';
import { Bordered, ImageAttributes } from '../../../types';
import { AvatarGroup } from '../AvatarGroup/AvatarGroup';
import { Image } from '../Image/Image';

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
    bordered?: Bordered;
};

interface AvatarComponent extends React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLImageElement>> {
    Group: typeof AvatarGroup;
}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
    ({ className = '', size = 30, style, cover = false, src, alt, bordered = false }: AvatarProps, ref) => {
        return (
            <Image
                ref={ref}
                className={`${Styles.Avatar} ${className} ${bordered ? Styles.bordered : ''}`}
                src={src}
                alt={alt}
                style={{
                    width: typeof size === 'number' ? size : size?.width,
                    height: typeof size === 'number' ? size : size?.height,
                    minWidth: typeof size === 'number' ? size : style?.minWidth,
                    minHeight: typeof size === 'number' ? size : style?.minHeight,
                    objectFit: cover ? 'cover' : style?.objectFit,
                    borderColor: typeof bordered === 'object' && bordered?.color ? bordered?.color : '',
                    borderStyle:
                        typeof bordered === 'object'
                            ? bordered?.style
                                ? bordered?.style
                                : 'solid'
                            : style?.borderStyle,
                    borderWidth: typeof bordered === 'object' && bordered?.size ? bordered?.size : '',
                    borderRadius: typeof bordered === 'object' && bordered?.radius ? bordered?.radius : '',
                    ...style,
                }}
            />
        );
    },
) as AvatarComponent;

Avatar.Group = AvatarGroup;
