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

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ProjectsPage} />
      <Route path="/myprojects" component={MyProjectsPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={LogoutPage} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
