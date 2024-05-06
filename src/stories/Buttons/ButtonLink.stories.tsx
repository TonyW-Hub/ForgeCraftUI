import type { Meta, StoryObj } from '@storybook/react';
import '../../index.css';

import { ButtonLink } from '../../components/atoms/Buttons/ButtonLink/ButtonLink';
import { UserSVG } from '../../components/atoms/SVGs/UserSVG/UserSVG';
import { STORIES_PARAMS } from '../../constants/storiesParams';

const meta: Meta<typeof ButtonLink> = {
    title: 'Button/Link',
    component: ButtonLink,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `This is the documentation for the Button Link. It can be imported as <b style="color:#00a2ae">ButtonLink</b> or <b style="color:#00a2ae">Button.Link</b> (via the Button component).`,
            },
        },
    },
    argTypes: {
        variant: {
            options: STORIES_PARAMS.button.variant.options,
            control: 'select',
            description: 'Select variant',
            defaultValue: 'link',
            table: {
                defaultValue: {
                    summary: 'link',
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
        link: {
            control: 'text',
            table: {
                defaultValue: {
                    summary: '',
                },
            },
        },
        target: {
            table: {
                type: { summary: 'string' },
            },
        },
        className: {
            description: 'Add class name for the link container',
            table: {
                category: 'className',
            },
        },
        classNames: {
            description: 'Add class names for each elements of the link',
            table: {
                category: 'className',
            },
        },
    },
    args: {
        variant: 'link',
        size: 'middle',
        danger: false,
        endIcon: false,
        shape: 'default',
        link: '#',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Link',
    },
};

export const Blank: Story = {
    args: {
        target: '_blank',
        children: 'Link Blank',
    },
};

export const Danger: Story = {
    args: {
        danger: true,
        children: 'Link danger',
    },
};

export const Icon: Story = {
    args: {
        icon: <UserSVG />,
        children: 'Link Icon',
    },
};

export const EndIcon: Story = {
    args: {
        icon: <UserSVG />,
        endIcon: true,
        children: 'Link Icon',
    },
};

export const Text: Story = {
    args: {
        variant: 'text',
        children: 'Link',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Link outline',
    },
};

export const Dashed: Story = {
    args: {
        variant: 'dashed',
        children: 'Link dashed',
    },
};

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Link primary',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Link secondary',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        children: 'Link tertiary',
    },
};

export const Quaternary: Story = {
    args: {
        variant: 'quaternary',
        children: 'Link quaternary',
    },
};

export const DangerButton: Story = {
    args: {
        variant: 'default',
        children: 'Link danger',
        danger: true,
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        variant: 'primary',
        children: 'Small',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        variant: 'primary',
        children: 'Large',
    },
};

export const Round: Story = {
    args: {
        variant: 'primary',
        children: 'Round',
        shape: 'round',
    },
};

export const Circle: Story = {
    args: {
        icon: <UserSVG />,
        variant: 'primary',
        shape: 'circle',
        size: 30,
    },
};
