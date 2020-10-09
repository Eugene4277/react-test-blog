import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function Sidebar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <NavLink className="nav-link logo" to="/" exact>
          <i className="fas fa-blog"></i>
        </NavLink>
        <h5>
          <NavLink className="nav-link" to="/" exact>
            <i className="fas fa-home"></i> Home
          </NavLink>
        </h5>

        <h5>
          <NavLink className="nav-link" to="/profile">
            <i className="fas fa-user"></i> Profile
          </NavLink>
        </h5>
        <button type="button" className="btn btn-primary btn-lg add-post-btn">
          Add post
        </button>
      </div>
    </nav>
  );
}

export default withRouter(Sidebar);
