import type { Meta, StoryObj } from '@storybook/react';
import '../../index.css';
import { Alert } from '../../components/atoms/Alert/Alert';
import { fn } from '@storybook/test';

const meta: Meta<typeof Alert> = {
    title: 'Alert',
    component: Alert,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        variant: 'background',
        type: 'info',
        visible: true,
    },
    argTypes: {
        type: {
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        variant: {
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        children: 'Alert info',
        type: 'info',
    },
};

export const Error: Story = {
    args: {
        children: 'Alert error',
        type: 'error',
    },
};

export const Warning: Story = {
    args: {
        children: 'Alert warning',
        type: 'warning',
    },
};

export const Success: Story = {
    args: {
        children: 'Alert success',
        type: 'success',
    },
};

export const Text: Story = {
    args: {
        children: 'Alert info',
        type: 'info',
        variant: 'text',
    },
};

export const Remove: Story = {
    args: {
        children: 'Alert removable',
        type: 'info',
        onRemove: fn(),
    },
};
