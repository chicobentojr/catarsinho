import React, { Component } from 'react';
import api from '../utils/api';

class LogoutPage extends Component {
  componentWillMount() {
    api.logoutUser();
    this.props.history.push('/');
  }

  render () {
    return (
      <h1>Bye Bye</h1>
    )
  }
}

export default LogoutPage;
