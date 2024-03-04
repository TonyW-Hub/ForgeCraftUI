import { useState } from 'react';
import './App.css';
import { Input } from './components/atoms/Input/Input';
import { Modal } from './components/atoms/Modal/Modal';

function App() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

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

            <button onClick={() => setModalOpen(true)}>modal</button>

            <Modal visible={modalOpen} onCancel={() => setModalOpen(false)} title="Test modal">
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
            </Modal>
        </>
    );
}

export default App;
