import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import ModalPostForm from "./modals/ModalPostForm";

function Sidebar(props) {
  return (
    <>
      <ModalPostForm />
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
          <button type="button" data-toggle="modal" data-target="#modalPostForm" className="btn btn-primary btn-lg add-post-btn">
            Add post
          </button>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Sidebar);
