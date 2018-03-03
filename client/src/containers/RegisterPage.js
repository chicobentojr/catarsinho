import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Header from '../components/Header';

class RegisterPage extends Component {
  render () {
    return (
      <div>
        <Header></Header>
        <Container text style={{ marginTop: '7em' }}>
          <h1>heartless</h1>
        </Container>
      </div>
    )
  }
}

export default RegisterPage;
