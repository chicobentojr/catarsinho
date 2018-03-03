import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Icon } from 'semantic-ui-react';
import simpleStore from '../utils/simpleStore';

const Header = () => {
  return (
    <Menu fixed='top' color='green' inverted>
      <Container>
        <Menu.Item as='h3' header>
          <Link to='/'>Catarsinho</Link>
        </Menu.Item>

        {simpleStore.user.isAuthenticated ? (
          <Menu.Menu position='right'>
            <Menu.Item as='div'><Icon name='user' /> {simpleStore.user.username}</Menu.Item>
            <Menu.Item as='a'><Link to='/myprojects/create'>Criar Projeto</Link></Menu.Item>
            <Menu.Item as='a'><Link to='/myprojects'>Meus Projetos</Link></Menu.Item>
            <Menu.Item as='a'><Link to='/logout'>Sair</Link></Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position='right'>
            <Menu.Item as='a'><Link to='/login'>Entrar</Link></Menu.Item>
          </Menu.Menu>
        )}
      </Container>
    </Menu>
  )
}

export default Header;
