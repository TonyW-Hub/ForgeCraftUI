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

function App() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
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
