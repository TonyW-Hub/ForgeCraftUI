import { useState } from 'react';
import './App.css';
import { Input } from './components/atoms/Input/Input';
import { Modal } from './components/atoms/Modal/Modal';
import { Button } from './components/atoms/Button/Button';
import { Tooltip } from './components/atoms/Tooltip/Tooltip';
import { Flex } from './components/atoms/Flex/Flex';

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
                    >
                        <Button onClick={() => setModalOpen(true)} loading={loading} variant="default" danger>
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
            <Button.Link link="https://ant.design/components/button">link</Button.Link>

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
