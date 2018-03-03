import React, { Component } from 'react';
import { Container, Segment, Header as SemanticHeader } from 'semantic-ui-react';
import api from '../utils/api';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

class ProjectsPage extends Component {
  state = {
    loading: true,
    projects: []
  }

  componentDidMount() {
    api.loadProjects().then((response) => {
      this.setState({ projects: response.data, loading: false});
    }).catch((error) => {
      console.log(error);
    })
  }

  __renderProjectCard(project, index) {
    return (
      <ProjectCard key={index} {...project} />
    )
  }

  render () {
    return (
      <div>
        <Header></Header>
        <Container text style={{ marginTop: '7em' }}>
          <SemanticHeader size='large'>Projetos Recentes</SemanticHeader>
          <Segment loading={this.state.loading}>
            {this.state.projects.map(this.__renderProjectCard)}
          </Segment>
        </Container>
      </div>
    )
  }
}

export default ProjectsPage;
