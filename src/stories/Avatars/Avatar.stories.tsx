import type { Meta, StoryObj } from '@storybook/react';
import '../../index.css';
import { Avatar as AvatarComp } from '../../components/atoms/Avatar/Avatar';

const meta: Meta<typeof AvatarComp> = {
    title: 'Avatar',
    component: AvatarComp,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        bordered: false,
        cover: false,
    },
    argTypes: {
        bordered: {
            control: 'boolean',
            table: {
                type: {
                    summary: 'boolean',
                },
            },
        },
        size: {
            description:
                'Set the size of the avatar, you can use number for same width/height, or use the object to custom the width and the height.',
            table: {
                type: {
                    summary: 'number | objet',
                },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
    args: {
        src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
        alt: `Logo`,
        size: 40,
    },
};

export const Bordered: Story = {
    args: {
        src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
        alt: `Logo`,
        size: 40,
        bordered: true,
    },
};
