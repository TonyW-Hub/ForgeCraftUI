import type { Meta, StoryObj } from '@storybook/react';
import '../../index.css';
import { Image } from '../../components/atoms/Image/Image';
import { STORIES_PARAMS } from '../../constants/storiesParams';

const meta: Meta<typeof Image> = {
    title: 'Image',
    component: Image,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        bordered: false,
        cover: false,
        shape: 'default',
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
                'Set the size of the image, you can use number for same width/height, or use the object to custom the width and the height.',
            table: {
                type: {
                    summary: 'number | objet',
                },
            },
        },
        shape: {
            control: 'select',
            options: STORIES_PARAMS.shape.image.options,
            description: 'Set the shape of the image, you can use number for custom shape, or use define shape.',
            table: {
                type: {
                    summary: 'number | string',
                },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'default image',
        size: 300,
    },
};

export const Bordered: Story = {
    args: {
        src: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'default image',
        size: 300,
        bordered: true,
    },
};

export const CustomBorder: Story = {
    args: {
        src: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'default image',
        size: 300,
        bordered: {
            color: 'red',
            radius: 25,
            size: 3,
            style: 'dashed',
        },
    },
};

export const Cover: Story = {
    args: {
        src: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'default image',
        size: 300,
        bordered: {
            size: 3,
        },
        cover: true,
    },
};

export const Shape: Story = {
    args: {
        src: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'default image',
        size: 300,
        shape: 'circle',
        cover: true,
    },
};

export const CustomSize: Story = {
    args: {
        src: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'default image',
        size: {
            width: 450,
            height: 200,
        },
        cover: true,
    },
};
