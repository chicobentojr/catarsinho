import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import FormMessages from '../components/FormMessages';
import api from '../utils/api';
import App from './App';

class RegisterPage extends Component {
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

    api.registerUser(this.state.username, this.state.password).then((response => {
      api.authUser(this.state.username, this.state.password).then((response => {
        this.setState({loading: false});
        this.props.history.push('/myprojects');
      })).catch((error) => {
        console.log(error);
        this.setState({loading: false, error: true});
      })
    })).catch((error) => {
      console.log(error);
      this.setState({loading: false, error: true});
    })
  }

  render () {
    return (
      <App title='Registre-se' loading={this.state.loading}>
        <Form onSubmit={this.__handleSubmit} error={this.state.error} warning={this.state.warning}>
          <Form.Field>
            <label>Usuário</label>
            <input onChange={(e) => { this.setState({username: e.target.value })}} placeholder='Usuário' required />
          </Form.Field>
          <Form.Field>
            <label>Senha</label>
            <input onChange={(e) => { this.setState({password: e.target.value })}} type='password' placeholder='Senha' required />
          </Form.Field>
          <Button primary type='submit'>Registrar</Button>
            <FormMessages />
        </Form>
      </App>
    )
  }
}

export default RegisterPage;
