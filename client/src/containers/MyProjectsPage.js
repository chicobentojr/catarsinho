import React, { Component } from 'react';
import { Card, Header as SemanticHeader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import api from '../utils/api';
import App from './App';

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
      this.setState({loading: false});
    })
  }

  __renderProjectCard(project, index) {
    return (
      <ProjectCard key={index} {...project} showEditButton={true} />
    )
  }

  render () {
    return (
      <App title='Meus Projetos' loading={this.state.loading}>
        {this.state.projects.length > 0 ? (
          <Card.Group itemsPerRow={2}>
            { this.state.projects.map(this.__renderProjectCard) }
          </Card.Group>
        ) : (
          <div>
            <SemanticHeader size='medium'>Você ainda não tem nenhum projeto cadastrado.</SemanticHeader>
            <Link to='/myprojects/create'>Crie agora.</Link>
          </div>
        )}
      </App>
    )
  }
}

export default MyProjectsPage;
