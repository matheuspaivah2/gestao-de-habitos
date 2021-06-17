import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Groups from "../pages/Groups";
import Habits from "../pages/Habits";
import MyAcount from "../pages/MyAcount";
import Discovery from "../pages/Discovery";
import PageNotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/groups" component={Groups} />
      <Route path="/habits" component={Habits} />
      <Route path="/myacount" component={MyAcount} />
      <Route path="/discovery" component={Discovery}/>
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
