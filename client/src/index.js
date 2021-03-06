import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import 'moment/locale/pt-br';

import ProjectsPage from './containers/ProjectsPage';
import RegisterPage from './containers/RegisterPage';
import LoginPage from './containers/LoginPage';
import MyProjectsPage from './containers/MyProjectsPage';
import LogoutPage from './containers/LogoutPage';
import CreateProjectPage from './containers/CreateProjectPage';
import EditProjectPage from './containers/EditProjectPage';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ProjectsPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/myprojects" component={MyProjectsPage} />
      <Route exact path="/myprojects/create" component={CreateProjectPage} />
      <Route exact path="/myprojects/:id/edit" component={EditProjectPage} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
