import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Styles/Reset.scss';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/"/>
                    <Route exact path="/"/>
                </Switch>
            </Router>
        );
    }
}

export default Routes;