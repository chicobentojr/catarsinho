import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import FormMessages from '../components/FormMessages';
import api from '../utils/api';
import App from './App';

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
      this.setState({loading: false});
      this.props.history.push('/myprojects');
    })).catch((error) => {
      console.log(error);
      this.setState({loading: false, error: true});
    })
  }

  render () {
    return (
      <App title='Login' loading={this.state.loading}>
        <Form onSubmit={this.__handleSubmit} error={this.state.error} warning={this.state.warning}>
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
      </App>
    )
  }
}

export default LoginPage;
