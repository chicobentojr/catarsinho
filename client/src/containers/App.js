import React, { Component } from 'react';
import Header from '../components/Header'
import { Container, Segment } from 'semantic-ui-react';
import api from '../utils/api';

class App extends Component {
  render() {
    console.log('app.js', api.user);
    return (
      <div className="App">
        <Header></Header>
        <Container text style={{ marginTop: '7em' }}>
          <Segment>
            <p>Here are our projects...</p>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;
