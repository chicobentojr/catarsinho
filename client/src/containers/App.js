import React, { Component } from 'react';
import Header from '../components/Header'
import { Container, Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
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
