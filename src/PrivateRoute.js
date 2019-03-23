import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import firebase from "./firebase";
import { setUser } from "./actions";

const PrivateRoute = ({ user, history, setUser, ...rest }) => {
  Object.keys(user).length === 0 &&
    firebase.auth().onAuthStateChanged(u => {
      u && setUser(u);
    });
  return (
    <>
      {Object.keys(user).length === 0 ? (
        history.push("/login")
      ) : (
        <Route {...rest} />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { setUser }
)(withRouter(PrivateRoute));
