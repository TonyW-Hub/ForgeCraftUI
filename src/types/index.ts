export type FlexJustify =
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

export type BasicColorVarian = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

export type ButtonVariant = BasicColorVarian | 'default' | 'dashed' | 'outline' | 'link' | 'text';

export type TooltipVariant = BasicColorVarian | 'default' | 'outline';

export type Size = BasicSizeType | number;

export type BasicSizeType = 'small' | 'middle' | 'large';

export type ButtonShape = 'default' | 'circle' | 'round';

export type ImageAttributes = { src: string; alt: string };

export type Shape = 'default' | 'circle' | BasicSizeType;

export type CSSPosition = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    x?: number;
    y?: number;
};

export type AvatarType =
    | React.ReactNode
    | {
          src: string;
          alt: string;
          size?:
              | number
              | {
                    width?: number;
                    height?: number;
                };
          bordered?: Bordered;
      };

export type Bordered =
    | boolean
    | { size?: number; color?: string; radius?: number | string; style?: 'solid' | 'inset' | 'dashed' | 'dotted' };

export type InputType = {
    name: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    rules?: {
        pattern?: string | RegExp;
        errors?: {
            type: string;
            message?: string;
        }[];
    };
    placeholder?: string;
    shape?: Shape;
    icon?: React.ReactNode;
    value?: string;
    bordered?: Bordered;
    style?: React.CSSProperties;
    classNames?: {
        icon?: string;
        input?: string;
        alert?: string;
    };
};

export type ButtonClassNamesProps = {
    button?: string;
    loader?: string;
    body?: string;
};
