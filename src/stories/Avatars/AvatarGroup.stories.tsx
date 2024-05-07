import type { Meta, StoryObj } from '@storybook/react';
import '../../index.css';
import { AvatarGroup } from '../../components/atoms/AvatarGroup/AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
    title: 'Avatar/Group',
    component: AvatarGroup,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        items: [...Array(5)].map((_, i) => ({
            src: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
            alt: 'Logo',
            size: 40,
            bordered: true,
        })),
    },
};
