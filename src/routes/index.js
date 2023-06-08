import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainSearchList from "../components/MainSearchList";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/destinations/:destination/:region_group?/:region?/:resort?"
          component={MainSearchList}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
