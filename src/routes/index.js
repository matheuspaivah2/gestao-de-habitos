import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import Groups from "../pages/Groups";
import Habits from "../pages/Habits";
import MyAcount from "../pages/MyAcount";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/singup" component={Singup} />
      <Route path="/groups" component={Groups} />
      <Route path="/habits" component={Habits} />
      <Route path="/myacount" component={MyAcount} />
    </Switch>
  );
};

export default Routes;
