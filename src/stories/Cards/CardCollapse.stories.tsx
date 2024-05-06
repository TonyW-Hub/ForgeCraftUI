import type { Meta, StoryObj } from '@storybook/react';
import '../../index.css';
import { CardCollapse } from '../../components/atoms/Cards/CardCollapse/CardCollapse';
import { Button } from '../../components/atoms/Button/Button';
import { UserSVG } from '../../components/atoms/SVGs/UserSVG/UserSVG';
import { Flex } from '../../components/atoms/Flex/Flex';

const meta: Meta<typeof CardCollapse> = {
    title: 'Card/Collapse',
    component: CardCollapse,
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
        size: 'small',
        bordered: false,
        variant: 'collapse',
        expandIconPosition: 'end',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Default card',
        description: 'sub title',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
    },
};

export const Basic: Story = {
    args: {
        title: 'Basic card',
        avatar: {
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
            alt: `Logo`,
            size: 40,
        },
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        actions: <Button>Action</Button>,
    },
};

export const Bordered: Story = {
    args: {
        title: 'Bordered card',
        avatar: {
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
            alt: `Logo`,
            size: 40,
        },
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        bordered: true,
    },
};

export const Medium: Story = {
    args: {
        title: 'Medium card',
        avatar: {
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
            alt: `Logo`,
            size: 40,
        },
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        bordered: true,
        size: 'middle',
    },
};

export const Large: Story = {
    args: {
        title: 'Large card',
        avatar: {
            src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
            alt: `Logo`,
            size: 40,
        },
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        bordered: true,
        size: 'large',
    },
};

export const StartIcon: Story = {
    args: {
        title: 'Start icon card',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        expandIconPosition: 'start',
    },
};

export const CustomIcon: Story = {
    args: {
        title: 'Custom icon card',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        expandIcon: <UserSVG />,
        expandIconPosition: 'start',
    },
};

export const Menu: Story = {
    args: {
        title: 'Menu card',
        description: 'sub title',
        children: (
            <Flex vertical gap="small">
                <Button.Link link="#">Link 1</Button.Link>
                <Button.Link link="#">Link 2</Button.Link>
            </Flex>
        ),
        variant: 'menu',
    },
};
