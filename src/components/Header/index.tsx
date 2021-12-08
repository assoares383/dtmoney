import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';
interface HeadersProps {
    onOpenNewTransactionModal: () => void;
}

const Header = ({ onOpenNewTransactionModal }: HeadersProps) => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transacao
                </button>
            </Content>
        </Container>
    )
}

export default Header;