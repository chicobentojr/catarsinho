import React, { Component } from 'react';
import { Container, Form, Button, Segment } from 'semantic-ui-react';
import Header from '../components/Header';
import api from '../utils/api';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    loading: false
  }

  __handleSubmit = (e) => {

    if (!this.state.username || !this.state.password) {
      return;
    }

    this.setState({loading: true});

    api.authUser(this.state.username, this.state.password).then((response => {
      console.log(response);
      this.setState({loading: false});
      this.props.history.push('/');
    })).catch((error) => {
      console.log(error);
      this.setState({loading: false});
    })
  }

  render () {
    return (
      <div>
        <Header></Header>
        <Container text style={{ marginTop: '7em' }}>
          <Segment>
          <Form onSubmit={this.__handleSubmit} loading={this.state.loading}>
            <Form.Field>
              <label>Username</label>
              <input onChange={(e) => { this.setState({username: e.target.value })}} placeholder='username' required />
            </Form.Field>
            <Form.Field error>
              <label>Password</label>
              <input onChange={(e) => { this.setState({password: e.target.value })}} type='password' placeholder='Password' required />
            </Form.Field>
            <Button type='submit'>Login</Button>
          </Form>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default LoginPage;
