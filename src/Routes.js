import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp/SignUp";
import "./Styles/Reset.scss";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/SignIn' component={SignIn}/>
          <Route exact path="/SignUp" component={SignUp}/>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
