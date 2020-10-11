import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../services/authService';
import { logoutUser } from '../redux/actions';
import { withRouter } from 'react-router-dom';

function AccountData(props) {
  const { name } = props.currentUser;

  const [theme, setTheme] = useState('Dark');

  const logoutHandler = () => {
    props.logoutUser();
    logout();
    props.history.push("/signup");
  }

  const changeTheme = () => {
    if (theme === 'Dark') {
      document.getElementsByTagName("body")[0].classList.add("dark");
      setTheme('Light');
    } else {
      document.getElementsByTagName("body")[0].classList.remove("dark");
      setTheme('Dark');
    }
  }

  return (
    <>
      <div className="account-data" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div className="account-content">
          <img
            src="https://randomuser.me/api/portraits/men/99.jpg"
            className="align-self-start mr-3 user-icon"
            alt="..."
          />
          <div className="account-data-name">
            <span><b>{name}</b></span>
          </div>
          <i className="fas fa-angle-down"></i>
        </div>
      </div>
      <div className="dropdown-menu">
        <button onClick={changeTheme} className="dropdown-item"><i className="fas fa-palette"></i>Change Theme to {theme}</button>
        <div className="dropdown-divider"></div>
        <button onClick={logoutHandler} className="dropdown-item"><i className="fas fa-sign-out-alt"></i>Logout</button>
      </div>
    </>

  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { logoutUser })(AccountData));