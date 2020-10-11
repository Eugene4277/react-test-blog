import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import UserPage from "../pages/UserPage";
import PostDetails from "../pages/PostDetails";
import SignUp from '../pages/SignUp';
import ProtectedRoute from './ProtectedRoute';
import WrappedComponent from './WrappedComponent';

function Main() {
  return (
    <div className="container">
      <div className="row">
        <BrowserRouter>
          <Switch>
            <ProtectedRoute path="/" exact component={() => <WrappedComponent component={Home} />} />
            <ProtectedRoute path="/profile" component={() => <WrappedComponent component={Profile} />} />
            <ProtectedRoute path="/user/:id" component={() => <WrappedComponent component={UserPage} />} />
            <ProtectedRoute path="/post/:id" component={() => <WrappedComponent component={PostDetails} />} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Main;
