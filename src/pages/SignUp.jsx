import React, { useState } from "react";
import { connect } from "react-redux";
import { authUser } from '../redux/actions';
import Loader from '../components/Loader';

function SignUp(props) {
  const { authUser, isLoading, history } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const isDisabled = email && password && name ? false : true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() && password.trim() && name.trim()) {
      const user = {
        email,
        name,
        password
      }

      await authUser(user);
      setEmail("");
      setPassword("");
      setName("");

      history.push("/");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="col-12 col-md-6 offset-md-3 login-form"
        data-testid="registr"
      >
        <div className="signup-logo" >
          <i className="fas fa-blog"></i>
        </div>
        {isLoading ? (
          <Loader />
        ) : (<> <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
        </small>
        </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isDisabled}
            className="btn btn-primary"
          >
            Sign Up
      </button>

        </>)}
      </form>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    isLoading: state.app.loading
  }
}

export default connect(mapStateToProps, { authUser })(SignUp);
