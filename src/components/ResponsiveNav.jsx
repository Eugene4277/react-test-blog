import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountData from './AccountData';
import ModalPostForm from './modals/ModalPostForm';

function ResponsiveNav(props) {
  return (
    <>
      <ModalPostForm />
      <nav
        className="navbar navbar-dark navbar-expand-md fixed-top"
      >

        <NavLink className="nav-link logo" to="/" exact>
          <i className="fas fa-blog"></i>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav  mr-auto">
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
            <button type="button" data-toggle="modal" data-target="#modalPostForm" className="btn btn-primary btn-sm add-post-btn">
              Add post
          </button>
          </div>
          <div className="navbar-nav">
            <AccountData />
          </div>
        </div>
      </nav>
    </>
  );
}

export default ResponsiveNav;