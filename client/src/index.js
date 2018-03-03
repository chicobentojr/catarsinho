import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App';
import ProjectsPage from './containers/ProjectsPage';
import RegisterPage from './containers/RegisterPage';
import LoginPage from './containers/LoginPage';
import MyProjectsPage from './containers/MyProjectsPage';
import LogoutPage from './containers/LogoutPage';
import CreateProjectPage from './containers/CreateProjectPage';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ProjectsPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/myprojects" component={MyProjectsPage} />
      <Route exact path="/myprojects/create" component={CreateProjectPage} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
