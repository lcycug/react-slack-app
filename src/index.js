import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import store from "./store";
import App from "./App";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import * as serviceWorker from "./serviceWorker";

const Root = withRouter(() => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Switch>
));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
