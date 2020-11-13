import React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import NonPrivateRoute from "./NonPrivateRoute";
import Header from "../Components/Header/Header";
import Home from "../screens/Landing/index";
import Devices from "../screens/Devices/index"
import './routes.css';

function Routes() {
  return (
    <Router basename="/" hashType="hashbang">
      <div className="routes-container">
        <Header />
        <Switch>
          <NonPrivateRoute
            exact
            path="/"
            component={Home}
          ></NonPrivateRoute>
          <NonPrivateRoute
            exact
            path="/devices"
            component={Devices}
          ></NonPrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
