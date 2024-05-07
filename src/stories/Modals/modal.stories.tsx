import type { Meta, StoryObj } from '@storybook/react';
import '../../index.css';
import { Modal } from '../../components/atoms/Modal/Modal';
import { Flex } from '../../components/atoms/Flex/Flex';
import { Button } from '../../components/atoms/Button/Button';
import { fn } from '@storybook/test';
import { STORIES_PARAMS } from '../../constants/storiesParams';

const meta: Meta<typeof Modal> = {
    title: 'Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        visible: {
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        closeVisible: {
            table: {
                defaultValue: {
                    summary: 'true',
                },
            },
        },
        texts: {
            control: 'object',
            table: {
                defaultValue: {
                    detail: `Cancel | Continue`,
                    summary: 'Default texts',
                },
                type: {
                    summary: '{[key]: string;}',
                },
            },
        },
        header: {
            description: 'Display custom header element',
            table: {
                type: {
                    summary: 'ReactNode',
                },
            },
        },
        footer: {
            description: 'Display custom footer element',
            table: {
                type: {
                    summary: 'ReactNode',
                },
            },
        },
        close: {
            description: 'Display custom close element',
            table: {
                type: {
                    summary: 'ReactNode',
                },
            },
        },
        footerPosition: {
            control: 'select',
            options: STORIES_PARAMS.flex.direction.justify.options,
            table: {
                defaultValue: {
                    summary: 'flex-end',
                },
            },
        },
        className: {
            description: 'Add class name for the modal container',
            control: 'text',
            table: {
                category: 'className',
                type: {
                    summary: 'string',
                },
            },
        },
        classNames: {
            description: 'Add class names for each elements of the modal',
            control: 'object',
            table: {
                category: 'className',
                type: {
                    summary: 'string',
                },
            },
        },
    },
    args: {
        visible: false,
        onCancel: fn(),
        onContinue: fn(),
        closeVisible: true,
        texts: {
            cancelText: 'Cancel',
            ContinueText: 'Continue',
        },
        backdrop: {
            show: true,
            closable: false,
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Default Modal',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        footerPosition: 'flex-end',
    },
};

export const CustomHeader: Story = {
    args: {
        header: (
            <Flex style={{ background: '#00a2ae' }}>
                <p style={{ paddingInline: 10 }}>Custom header</p>
            </Flex>
        ),
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
    },
};

export const CustomFooter: Story = {
    args: {
        title: 'Custom footer',
        footer: (
            <Flex style={{ padding: 10 }} gap="medium" justify="center">
                <Button variant="primary">Ok</Button>
                <Button danger>Return</Button>
            </Flex>
        ),
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
    },
};

export const ClosableBackdrop: Story = {
    args: {
        title: 'Default Modal',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        footerPosition: 'flex-end',
        backdrop: {
            closable: true,
        },
    },
};

export const UnshownBackdrop: Story = {
    args: {
        title: 'Default Modal',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        footerPosition: 'flex-end',
        backdrop: {
            show: false,
        },
    },
};

export const UnshownDefaultClose: Story = {
    args: {
        title: 'Default Modal',
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat atque, ducimus alias, facere aut eveniet voluptas deserunt ut repudiandae eius fugiat reprehenderit? Totam mollitia nihil ad repellat quaerat cumque.',
        footerPosition: 'flex-end',
        closeVisible: false,
    },
};
