import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import SignUp from "./containers/Signup";
import Clustering from "./containers/Models/Clustering";
import MultipleReg from "./containers/Models/MultipleReg";
import SimpleReg from "./containers/Models/SimpleReg";
import HelpResources from "./containers/HelpResources";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp/>
      </Route>
      <Route exact path="/clustering">
        <Clustering/>
      </Route>
      <Route exact path="/multiplereg">
        <MultipleReg/>
      </Route>
      <Route exact path="/simplereg">
        <SimpleReg/>
      </Route>
      <Route exact path="/help">
        <HelpResources/>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}