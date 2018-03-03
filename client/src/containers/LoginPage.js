import React, { Component } from 'react';
import { Container, Form, Button, Segment, Header as SemanticHeader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FormMessages from '../components/FormMessages';
import api from '../utils/api';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    loading: false,
    error: false,
    warning: false
  }

  __handleSubmit = (e) => {

    if (!this.state.username || !this.state.password) {
      this.setState({warning: true});
      return;
    }

    this.setState({loading: true, warning: false});

    api.authUser(this.state.username, this.state.password).then((response => {
      console.log(response);
      this.setState({loading: false});
      this.props.history.push('/myprojects');
    })).catch((error) => {
      console.log(error);
      this.setState({loading: false, error: true});
    })
  }

  render () {
    return (
      <div>
        <Header></Header>
        <Container text style={{ marginTop: '7em' }}>
          <SemanticHeader size='large'>Login</SemanticHeader>
          <Segment>
            <Form
              onSubmit={this.__handleSubmit} loading={this.state.loading}
              error={this.state.error} warning={this.state.warning}>
            <Form.Field>
              <label>Usuário</label>
              <input onChange={(e) => { this.setState({username: e.target.value })}} placeholder='Usuário' required />
            </Form.Field>
            <Form.Field>
              <label>Senha</label>
              <input onChange={(e) => { this.setState({password: e.target.value })}} type='password' placeholder='Senha' required/>
            </Form.Field>
            <Button primary type='submit'>Login</Button>
            <p>Não tem uma conta? <Link to='/register'>Registre-se aqui!</Link></p>
            <FormMessages />
          </Form>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default LoginPage;
