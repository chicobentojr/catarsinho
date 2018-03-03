import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import api from '../utils/api';
import ProjectCard from '../components/ProjectCard';
import App from './App';

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
      <App loading={this.state.loading} title='Projetos Recentes'>
        <Card.Group itemsPerRow={2}>
          {this.state.projects.map(this.__renderProjectCard)}
        </Card.Group>
      </App>
    )
  }
}

export default ProjectsPage;
