import { useState } from 'react';
import './App.css';
import { Input } from './components/atoms/Input/Input';
import { Modal } from './components/atoms/Modal/Modal';
import { Button } from './components/atoms/Button/Button';
import { Tooltip } from './components/atoms/Tooltip/Tooltip';
import { Flex } from './components/atoms/Flex/Flex';
import { Card } from './components/atoms/Card/Card';
import { Grid } from './components/atoms/Grid/Grid';
import { Accordion } from './components/atoms/Accordion/Accordion';
import { Toast } from './components/atoms/Toast/Toast';
import { Separator } from './components/atoms/Separator/Separator';
import { FloatButton } from './components/atoms/FloatButton/FloatButton';

function App() {
    const [modalOpen, setModalOpen] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [showTooltip, setShowTooltip] = useState<boolean>(false);

    const handleContinue = () => {
        setModalOpen(false);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const keys = Array.from(formData.keys()).map((key) => console.log(key));
        const test = formData.get('Test');
        const second = formData.get('second');
        console.log(keys, test, second);

        for (const item of formData) {
            console.log(item);
        }
    };

    return (
        <>
            <Tooltip
                title="Tooltip very long text to check if the css was good or not to fix that"
                trigger="click"
                custom={
                    <Flex vertical>
                        <h1>Title tooltip</h1> <p>Param</p>
                    </Flex>
                }
                position="top"
            >
                <Button loading={loading} variant="default" danger>
                    Modal
                </Button>
            </Tooltip>
            <form onSubmit={handleSubmit}>
                <Input
                    name="Test"
                    rules={{
                        pattern: /^[A-Za-zÀ-ÿ\s-_'".()]*$/,
                        errors: [
                            {
                                type: 'pattern',
                                message: '',
                            },
                        ],
                    }}
                />
                <input type="text" name="second" />
                <Button>Submit</Button>
            </form>
            {/* 
            <FloatButton
                onClick={() => console.log('button float')}
                portal
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m7.5 4.27 9 5.15" />
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                    </svg>
                }
            />
            <FloatButton
                onClick={() => console.log('button float')}
                link="http://example.com"
                target="_blank"
                style={{ right: 100 }}
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                }
            /> */}

            <FloatButton.Group
                open
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m7.5 4.27 9 5.15" />
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                    </svg>
                }
            >
                <Flex align="center" gap={'small'}>
                    <FloatButton
                        link="http://example.com"
                        target="_blank"
                        style={{ right: 100 }}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 3h6v6" />
                                <path d="M10 14 21 3" />
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                        }
                    />
                    <FloatButton
                        link="http://example.com"
                        target="_blank"
                        style={{ right: 100 }}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 3h6v6" />
                                <path d="M10 14 21 3" />
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                        }
                    />
                    <FloatButton
                        link="http://example.com"
                        target="_blank"
                        style={{ right: 100 }}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 3h6v6" />
                                <path d="M10 14 21 3" />
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                        }
                    />
                    <FloatButton
                        link="http://example.com"
                        target="_blank"
                        style={{ right: 100 }}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 3h6v6" />
                                <path d="M10 14 21 3" />
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                        }
                    />
                </Flex>
                <Flex align="center" gap={'small'}>
                    <FloatButton
                        link="http://example.com"
                        target="_blank"
                        style={{ right: 100 }}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 3h6v6" />
                                <path d="M10 14 21 3" />
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                        }
                    />
                    <FloatButton
                        link="http://example.com"
                        target="_blank"
                        style={{ right: 100 }}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 3h6v6" />
                                <path d="M10 14 21 3" />
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                        }
                    />
                </Flex>
                <Flex vertical align="center" gap={'small'}>
                    <FloatButton
                        link="http://example.com"
                        target="_blank"
                        style={{ right: 100 }}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 3h6v6" />
                                <path d="M10 14 21 3" />
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                        }
                    />
                    <FloatButton
                        link="http://example.com"
                        target="_blank"
                        style={{ right: 100 }}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 3h6v6" />
                                <path d="M10 14 21 3" />
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                        }
                    />
                </Flex>
            </FloatButton.Group>

            <div style={{ width: '100%' }}>
                <Flex vertical gap={'small'} align="center">
                    <Tooltip position="top" title="Tooltip text" trigger="click">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis expedita ipsam natus!
                            Nesciunt iusto quidem, voluptatibus quibusdam velit mollitia, dolor dolore quo sed
                            voluptatem repudiandae totam blanditiis aliquid aut vitae.
                        </p>
                    </Tooltip>
                    <Tooltip
                        title="Tooltip very long text to check if the css was good or not to fix that"
                        position="right"
                    >
                        <Button loading={loading} variant="default" danger>
                            Modal
                        </Button>
                    </Tooltip>
                    <Tooltip title="Tooltip " position="top">
                        <Button loading={loading} variant="default" danger>
                            Modal
                        </Button>
                    </Tooltip>

                    {/* <Tooltip title="Tooltip" position="right">
                        <Button onClick={() => setModalOpen(true)} loading={loading} variant="default" danger>
                            Modal
                        </Button>
                    </Tooltip> */}
                </Flex>
                {/* <Tooltip title="Tooltip">
                    <Button onClick={() => setModalOpen(true)} loading={loading} variant="default" danger>
                        Modal
                    </Button>
                </Tooltip> */}
            </div>
            <Flex align="center">
                <Button.Link link="https://ant.design/components/button">link</Button.Link>
                <Separator vertical />
                <Button.Link link="https://ant.design/components/button">link 2</Button.Link>
            </Flex>

            <>
                <Button.Link link="https://ant.design/components/button">link</Button.Link>
                <Separator>Text</Separator>
                <Button.Link link="https://ant.design/components/button">link 2</Button.Link>
            </>

            <Grid autoFit={300} gap={'large'}>
                <Card
                    title="Title card very long name for testing text overflow ellipsis"
                    description="Description card very long name for testing text overflow ellipsis"
                    avatar={{ src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3', alt: 'avatar' }}
                    actions={
                        <Flex gap={'small'}>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                        </Flex>
                    }
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et enim perspiciatis velit!
                        Odio quas quae totam impedit non, sed aperiam soluta, voluptatibus, illo quo ipsam tenetur
                        repudiandae architecto nesciunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et enim perspiciatis velit!
                        Odio quas quae totam impedit non, sed aperiam soluta, voluptatibus, illo quo ipsam tenetur
                        repudiandae architecto nesciunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et enim perspiciatis velit!
                        Odio quas quae totam impedit non, sed aperiam soluta, voluptatibus, illo quo ipsam tenetur
                        repudiandae architecto nesciunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et enim perspiciatis velit!
                        Odio quas quae totam impedit non, sed aperiam soluta, voluptatibus, illo quo ipsam tenetur
                        repudiandae architecto nesciunt.
                    </p>
                </Card>
                <Card
                    title="Title card very long name for testing text overflow ellipsis"
                    description="Description card very long name for testing text overflow ellipsis"
                    avatar={{ src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3', alt: 'avatar' }}
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et enim perspiciatis velit!
                        Odio quas quae totam impedit non, sed aperiam soluta, voluptatibus, illo quo ipsam tenetur
                        repudiandae architecto nesciunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et enim perspiciatis velit!
                        Odio quas quae totam impedit non, sed aperiam soluta, voluptatibus, illo quo ipsam tenetur
                        repudiandae architecto nesciunt.
                    </p>
                </Card>
            </Grid>
            <Card.Collapse
                title="Card collapse"
                actions={
                    <Flex gap={'small'} justify="space-between">
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Flex>
                }
            >
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et enim perspiciatis velit! Odio
                    quas quae totam impedit non, sed aperiam soluta, voluptatibus, illo quo ipsam tenetur repudiandae
                    architecto nesciunt.
                </span>
            </Card.Collapse>

            <Accordion
                items={[
                    { key: '1', title: 'Item one', children: <span>Item one children</span> },
                    { key: '2', title: 'Item two', children: <span>Item two children</span> },
                ]}
            />

            <Toast position="bottomLeft" description="description" type="action">
                Toast
            </Toast>
            <Button onClick={() => setShowTooltip(true)}>show Toast</Button>
            {showTooltip && <Toast position="topCenter">Show toast</Toast>}

            <Input.Switch name="switch" onChange={(e) => console.log(e.target.checked)} />

            <Input.Checkbox name="checkbox" onChange={(e) => console.log('checkbox', e.target.checked)}>
                Checkbox
            </Input.Checkbox>

            <Modal
                visible={modalOpen}
                onCancel={() => setModalOpen(false)}
                onContinue={handleContinue}
                title="Test modal"
            >
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
            </Modal>
        </>
    );
}

export default App;
