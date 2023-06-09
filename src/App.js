import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />

        <Route
          exact
          path="/blog"
          component={Blog}
        />
        <Route
          exact
          path="/contactus"
          component={ContactUs}
        />

      </Switch>
    </Router>
  );
};

export default Routes;

