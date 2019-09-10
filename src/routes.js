import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import HeroRant from "./components/HeroRant";

const Routes = props => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/Home" exact component={Home} />
    <Route path="/HeroRant" exact component={HeroRant} />
  </Switch>
);

export default Routes;
