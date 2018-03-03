import React, { Component } from 'react';
import { Container, Form, Button, Segment, Message } from 'semantic-ui-react';
import Header from '../components/Header';
import api from '../utils/api';

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
      console.log(response);
      this.setState({loading: false});
      this.props.history.push('/');
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
          <Segment>
            <Form
              onSubmit={this.__handleSubmit} loading={this.state.loading}
              error={this.state.error} warning={this.state.warning}>
            <Form.Field>
              <label>Username</label>
              <input onChange={(e) => { this.setState({username: e.target.value })}} placeholder='username' required />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input onChange={(e) => { this.setState({password: e.target.value })}} type='password' placeholder='Password' required />
            </Form.Field>
            <Button type='submit'>Register</Button>
              <Message error>
                <Message.Header>Something bad happened :(</Message.Header>
                <p>Please try again later.</p>
              </Message>
              <Message warning>
                <Message.Header>There are missing fields!</Message.Header>
                <p>Please, fill the entire form before submit.</p>
              </Message>
          </Form>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default RegisterPage;
