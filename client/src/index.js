import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App';
import RegisterPage from './containers/RegisterPage';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/register" component={RegisterPage} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
