import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import simpleStore from '../utils/simpleStore';

const Header = () => {
  return (
    <Menu fixed='top' color='green' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Link to='/'>Catarsinho</Link>
        </Menu.Item>

        {simpleStore.user.isAuthenticated ? (
          <Menu.Menu position='right'>
            <Menu.Item as='a'><Link to='/myprojects'>My Projects</Link></Menu.Item>
            <Menu.Item as='a'><Link to='/logout'>Logout</Link></Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position='right'>
            <Menu.Item as='a'><Link to='/login'>Login</Link></Menu.Item>
          </Menu.Menu>
        )}
      </Container>
    </Menu>
  )
}

export default Header;
