import {
  Card,
  Container,
  Header,
  ListContainer,
  InputSearchContainer,
} from './styles';

import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>

        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Fauzer Junior</strong>
            <small>Instagram</small>
          </div>

          <span>fauzer@gmail.com</span>
          <span>(19) 98904-6079</span>
        </div>

        <div className="actions">
          <Link to="/edit/12">
            <img src={edit} alt="Edit" />
          </Link>

          <button type="button">
            <img src={trash} alt="Trash" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
