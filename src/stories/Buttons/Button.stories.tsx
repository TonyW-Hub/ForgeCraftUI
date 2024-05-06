import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import '../../index.css';

import { Button } from '../../components/atoms/Button/Button';
import { STORIES_PARAMS } from '../../constants/storiesParams';
import { UserSVG } from '../../components/atoms/SVGs/UserSVG/UserSVG';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            options: STORIES_PARAMS.button.variant.options,
            control: 'select',
            description: 'Select variant',
            table: {
                defaultValue: {
                    summary: 'default',
                },
                type: { summary: 'string' },
            },
        },
        shape: {
            control: 'radio',
            description: 'Select radius',
            table: {
                defaultValue: {
                    summary: 'default',
                },
                type: { summary: 'string' },
            },
        },
        disabled: {
            control: 'boolean',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        loading: {
            control: {
                type: 'boolean',
            },
            description: 'Display loading inside button',
            table: {
                defaultValue: {
                    summary: 'false',
                },
                type: { summary: 'boolean' },
            },
        },
        danger: {
            description: 'Apply danger(red) style',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        endIcon: {
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        icon: {
            description: 'Custom icon',
        },
        size: {
            control: 'radio',
            description: 'Select the button size',
            table: {
                defaultValue: {
                    summary: 'middle',
                },
                type: { summary: 'string' },
            },
        },
        className: {
            description: 'Add class name for the button container',
            table: {
                category: 'className',
            },
        },
        classNames: {
            description: 'Add class names for each elements of the button',
            table: {
                category: 'className',
            },
        },
    },
    args: {
        onClick: fn(),
        size: 'middle',
        shape: 'default',
        variant: 'default',
        loading: false,
        disabled: false,
        danger: false,
        icon: null,
        endIcon: false,
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Default',
    },
};

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        children: 'Tertiary',
    },
};

export const Quaternary: Story = {
    args: {
        variant: 'quaternary',
        children: 'Quaternary',
    },
};

export const Danger: Story = {
    args: {
        danger: true,
        children: 'Danger',
    },
};

export const Icon: Story = {
    args: {
        icon: <UserSVG />,
        children: 'Button Icon',
    },
};

export const EndIcon: Story = {
    args: {
        icon: <UserSVG />,
        endIcon: true,
        children: 'Button Icon',
    },
};

export const Round: Story = {
    args: {
        shape: 'round',
        children: 'Round',
    },
};

export const Circle: Story = {
    args: {
        shape: 'circle',
        icon: <UserSVG />,
        size: 30,
    },
};

export const Loading: Story = {
    args: {
        loading: true,
        children: 'Loading',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Disabled',
    },
};
