import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Link to='/'>Catarsinho</Link>
        </Menu.Item>
        <Menu.Item position='right' as='a'>
          <Link to='register'>Register</Link>
        </Menu.Item>

        {/*
          <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon'/>
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      */}
      </Container>
    </Menu>
  )
}

export default Header;
