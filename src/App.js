import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from "./component/home_note/note";
import Edit from "./component/edit/edit";
import Login from "./component/login/login";
import PageError from "./component/Error/pageError";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/edit" component={Edit} />
          <Route path="/add" component={Edit} />
          <Route component={PageError} />
        </Switch>
      </Router>
    );
  }
}

export default App;
