import React, { Component, PropTypes } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home";
import Survey0 from "./Pages/Survey/Survey0";
import Survey1 from "./Pages/Survey/Survey1";
import Survey2 from "./Pages/Survey/Survey2";
import Survey3 from "./Pages/Survey/Survey3";
import Survey4 from "./Pages/Survey/Survey4";
import Survey5 from "./Pages/Survey/Survey5";
import Razor from "./Pages/Razor";
import "./Styles/Reset.scss";
import SubScriptionInfo from "./Pages/SubScription-Info/SubScriptionInfo";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/SignIn' component={SignIn} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/Survey0' component={Survey0} />
          <Route exact path='/Survey1' component={Survey1} />
          <Route exact path='/Survey2' component={Survey2} />
          <Route exact path='/Survey3' component={Survey3} />
          <Route exact path='/Survey4' component={Survey4} />
          <Route exact path='/Survey5' component={Survey5} />
          <Route exact path='/product/razor-set' component={Razor} />
          <Route exact path='/SubScription-Info' component={SubScriptionInfo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
