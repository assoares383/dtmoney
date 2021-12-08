import Modal from 'react-modal';
import { Container } from '../Header/styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >

             <Container>   
                <h2>Cadastrar transacao</h2>

                <input 
                    type="number"
                    placeholder="Valor"
                />

                <input 
                    placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}

export default NewTransactionModal;