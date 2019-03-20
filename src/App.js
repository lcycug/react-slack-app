import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import firebase from "./firebase";
import { setLoggedInUser } from "./actions";

const App = props => {
  const handleLogout = event => {
    firebase
      .auth()
      .signOut()
      .then(() => props.setLoggedInUser({}))
      .catch(err => console.error(err));
  };

  const { user } = props;
  return (
    <div>
      {Object.keys(user).length === 0 ? (
        <Link to="/login">Login</Link>
      ) : (
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      )}
      <br />
      <Link to="/register">Register</Link>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { setLoggedInUser }
)(App);
