import * as React from 'react';
import { history } from './config';
import * as ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import * as serviceWorker from './serviceWorker';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
