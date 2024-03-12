import { useState } from 'react';
import './App.css';
import { Input } from './components/atoms/Input/Input';
import { Modal } from './components/atoms/Modal/Modal';
import { Button } from './components/atoms/Button/Button';
import { Tooltip } from './components/atoms/Tooltip/Tooltip';
import { Flex } from './components/atoms/Flex/Flex';
import { Card } from './components/atoms/Card/Card';
import { Grid } from './components/atoms/Grid/Grid';
import { ChevronDownSVG } from './components/atoms/SVGs/ChevronDownSVG/ChevronDownSVG';
import { Accordion } from './components/atoms/Accordion/Accordion';

function App() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleContinue = () => {
        setModalOpen(false);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <>
            <Input
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

            <div style={{ width: '100%' }}>
                <Flex vertical gap={'small'} align="center">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis expedita ipsam natus!
                        Nesciunt iusto quidem, voluptatibus quibusdam velit mollitia, dolor dolore quo sed voluptatem
                        repudiandae totam blanditiis aliquid aut vitae.
                    </p>
                    <Tooltip
                        title="Tooltip very long text to check if the css was good or not to fix that"
                        position="bottom"
                        trigger="click"
                    >
                        <Button loading={loading} variant="default" danger>
                            Modal
                        </Button>
                        {/* <Button onClick={() => setModalOpen(true)} loading={loading} variant="default" danger>
                            Modal
                        </Button> */}
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
            <Button.Link link="https://ant.design/components/button">link</Button.Link>

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
