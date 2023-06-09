import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/test"
          component={Home}
        />

        <Route
          exact
          path="/blog"
          component={Blog}
        />

      </Switch>
    </Router>
  );
};

export default Routes;

