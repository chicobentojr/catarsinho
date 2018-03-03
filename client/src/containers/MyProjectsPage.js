import React, { Component } from 'react';
import { Container, Segment, Header as SemanticHeader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
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

  __renderProjectCard(project) {
    return (
      <ProjectCard {...project} showEditButton={true} />
    )
  }

  render () {
    return (
      <div>
        <Header></Header>
        <Container text style={{ marginTop: '7em' }}>
          <SemanticHeader size='large'>My Projects</SemanticHeader>
          <Segment loading={this.state.loading}>
            {this.state.projects.length > 0 ? (
              this.state.projects.map(this.__renderProjectCard)
            ) : (
              <div>
                <SemanticHeader size='medium'>You don't have any project created.</SemanticHeader>
                <Link to='/myprojects/create'>Create now</Link>
              </div>
            )}
          </Segment>
        </Container>
      </div>
    )
  }
}

export default MyProjectsPage;
