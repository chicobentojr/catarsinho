import React, { Component } from 'react';
import { Container, Form, Button, Segment } from 'semantic-ui-react';
import Header from '../components/Header';
import api from '../utils/api';

class MyProjectsPage extends Component {
  state = {
    username: '',
    password: '',
    loading: true,
    projects: []
  }

  componentDidMount() {
    api.loadUserProjects().then((response) => {
      this.setState({ projects: response.data, loading: false});
    }).catch((error) => {
      console.log(error);
    })
  }

  render () {
    return (
      <div>
        <Header></Header>
        <Container text style={{ marginTop: '7em' }}>
          <Segment loading={this.state.loading}>
            {this.state.projects.map((project) => {
              return <p>{project.title}</p>
            })}
          </Segment>
        </Container>
      </div>
    )
  }
}

export default MyProjectsPage;
