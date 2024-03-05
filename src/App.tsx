import { useState } from 'react';
import './App.css';
import { Input } from './components/atoms/Input/Input';
import { Modal } from './components/atoms/Modal/Modal';
import { Button } from './components/atoms/Button/Button';

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
                <Button onClick={() => setModalOpen(true)} loading={loading} variant="default" danger>
                    Modal
                </Button>
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
