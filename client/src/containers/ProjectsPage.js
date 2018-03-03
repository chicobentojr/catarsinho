import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Header } from 'semantic-ui-react';
import api from '../utils/api';
import simpleStore from '../utils/simpleStore';
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

  __renderFirstAccess() {
    return (
      simpleStore.user.isAuthenticated ? (
        <div>
          <Header size='medium'>Ainda não foi cadastrado nenhum projeto. Cadastre o primeiro!</Header>
          <Link to='/myprojects/create'>Clique aqui para cadastrar.</Link>
        </div>
      ) : (
        <div>
          <Header size='medium'>Ainda não foi cadastrado nenhum projeto. Registre-se e crie o primeiro!</Header>
          <Link to='/register'>Clique aqui para registrar.</Link>
        </div>
      )
    )
  }

  render () {
    return (
      <App loading={this.state.loading} title='Projetos Recentes'>
        {this.state.projects.length > 0 ? (
          <Card.Group itemsPerRow={2}>
            { this.state.projects.map(this.__renderProjectCard) }
          </Card.Group>
        ) : this.__renderFirstAccess() }
      </App>
    )
  }
}

export default ProjectsPage;
