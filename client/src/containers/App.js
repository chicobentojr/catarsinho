import React, { Component } from 'react';
import Header from '../components/Header'
import { Container, Segment, Header as SemanticHeader } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header></Header>
        <Container fluid text style={{ marginTop: '7em' }}>
          <SemanticHeader size='large'>{this.props.title}</SemanticHeader>
          <Segment loading={this.props.loading}>
            { this.props.children }
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;
