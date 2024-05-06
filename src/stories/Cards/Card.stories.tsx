import type { Meta, StoryObj } from '@storybook/react';
import '../../index.css';
import { Card } from '../../components/atoms/Card/Card';
import { Button } from '../../components/atoms/Button/Button';
import { UserSVG } from '../../components/atoms/SVGs/UserSVG/UserSVG';
import { Input } from '../../components/atoms/Input/Input';
import { Flex } from '../../components/atoms/Flex/Flex';
import { Image } from '../../components/atoms/Image/Image';

const meta: Meta<typeof Card> = {
    title: 'Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        avatar: {
            table: {
                type: { summary: 'object | ReactNode' },
            },
        },
        description: {
            control: 'text',
            description: 'Sub title',
            table: {
                type: { summary: 'string' },
            },
        },
        actions: {
            control: 'object',
        },
        cover: {
            description: 'Display the cover at the top of the card',
        },
        className: {
            description: 'Add class name for the card container',
            table: {
                category: 'className',
            },
        },
        classNames: {
            description: 'Add class names for each elements of the card',
            table: {
                category: 'className',
            },
        },
    },
    args: {
        size: 'middle',
        bordered: false,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Default Card',
        description: 'sub title',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
    },
};

export const Basic: Story = {
    args: {
        title: 'Default Card',
        description: 'sub title',
        avatar: {
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=6',
            alt: `Logo`,
            size: 40,
        },
        actions: <Button>Action</Button>,
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
    },
};

export const Bordered: Story = {
    args: {
        title: 'Bordered Card',
        description: 'sub title',
        actions: <Button>Action</Button>,
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        bordered: true,
    },
};

export const Extra: Story = {
    args: {
        title: 'Extra Card',
        description: 'sub title',
        extra: (
            <Flex justify="center" align="center">
                <Button shape="circle" size={30}>
                    <UserSVG />
                </Button>
                <Input.Switch name="switch" />
            </Flex>
        ),
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        bordered: true,
    },
};

export const Small: Story = {
    args: {
        title: 'Small Card',
        avatar: {
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=6',
            alt: `Logo`,
            size: 40,
        },
        actions: <Button>Action</Button>,
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        bordered: true,
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        title: 'Large Card',
        avatar: {
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=6',
            alt: `Logo`,
            size: 40,
        },
        actions: <Button>Action</Button>,
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        bordered: true,
        size: 'large',
    },
};

export const Cover: Story = {
    args: {
        cover: (
            <Image
                src="https://images.pexels.com/photos/20838764/pexels-photo-20838764/free-photo-of-mer-paysage-plage-vacances.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                size={{ width: 240, height: 300 }}
                cover
                alt="cover"
            />
        ),
        title: 'Large Card',
        actions: <Button>Action</Button>,
        style: { width: 240 },
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit?',
        size: 'small',
    },
};
