import React, { PropsWithChildren, forwardRef } from 'react';
import Styles from './AvatarGroup.module.scss';
import { Bordered } from '../../../types';
import { Avatar } from '../Avatar/Avatar';

type AvatarGroupProps = {
    className?: string;
    items?: {
        src: string;
        alt: string;
        size?:
            | number
            | {
                  width?: number;
                  height?: number;
              };
        bordered?: Bordered;
    }[];
};

export const AvatarGroup = forwardRef<HTMLDivElement, PropsWithChildren<AvatarGroupProps>>(
    ({ className = '', items = [], children }: PropsWithChildren<AvatarGroupProps>, ref) => {
        return (
            <div ref={ref} className={`${Styles.AvatarGroup} ${className}`}>
                {!items &&
                    React.Children.map(children, (child, index) => (
                        <div className={Styles.wrapper} style={{ zIndex: 100 - index + 1 }}>
                            {child}
                        </div>
                    ))}
                {items?.length > 0 &&
                    items?.map((item, index) => (
                        <div
                            key={'avatar_item_' + index}
                            className={Styles.wrapper}
                            style={{ zIndex: 100 - index + 1 }}
                        >
                            <Avatar src={item.src} alt={item.alt} size={item.size} bordered={item?.bordered} />
                        </div>
                    ))}
            </div>
        );
    },
);
