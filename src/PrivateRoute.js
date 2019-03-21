import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ user, history, ...rest }) => {
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

export default connect(mapStateToProps)(withRouter(PrivateRoute));
