import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import UserPage from "./pages/UserPage";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <div className="container">
      <div className="row">
        <BrowserRouter>
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-6 main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/user/:id" component={UserPage} />
              <Route path="/post/:id" component={PostDetails} />
              <Route path="/login" component={Login} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
