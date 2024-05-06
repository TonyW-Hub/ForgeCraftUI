import React, { PropsWithChildren } from 'react';
import Styles from './Image.module.scss';
import { Bordered, ImageAttributes, Shape } from '../../../types';

type ImageProps = ImageAttributes & {
    className?: string;
    size?:
        | number
        | {
              width?: number;
              height?: number;
          };
    style?: React.CSSProperties;
    bordered?: Bordered;
    cover?: boolean;
    shape?: number | Shape;
};

export const Image = ({
    src,
    alt,
    className = '',
    size = 25,
    bordered = false,
    cover = false,
    shape = 'default',
    style,
}: PropsWithChildren<ImageProps>) => {
    const isBorderedBoolean = typeof bordered === 'boolean';

    const setClassNamesProps = () => {
        const isBordered = isBorderedBoolean && bordered ? Styles.bordered : '';
        let isShape = '';
        if (typeof shape !== 'number') {
            const currentShape = {
                default: '',
                circle: Styles.circle,
                small: Styles.smallShape,
                middle: Styles.mediumShape,
                large: Styles.largeShape,
            };

            isShape = currentShape[shape];
        }

        return [Styles.Image, className, isBordered, isShape].join(' ');
    };

    return (
        <img
            className={setClassNamesProps()}
            src={src}
            alt={alt}
            style={{
                width: typeof size === 'number' ? size : size?.width,
                height: typeof size === 'number' ? size : size?.height,
                minWidth: typeof size === 'number' ? size : style?.minWidth,
                minHeight: typeof size === 'number' ? size : style?.minHeight,
                borderWidth: typeof bordered === 'object' && bordered?.size ? bordered?.size : style?.borderWidth,
                borderRadius:
                    typeof shape === 'number'
                        ? shape
                        : typeof bordered === 'object' && bordered?.radius
                          ? bordered?.radius
                          : style?.borderRadius,
                borderColor: typeof bordered === 'object' && bordered?.color ? bordered?.color : style?.borderColor,
                objectFit: cover ? 'cover' : style?.objectFit,
                borderStyle:
                    typeof bordered === 'object' ? (bordered?.style ? bordered?.style : 'solid') : style?.borderStyle,
                ...style,
            }}
        />
    );
};
