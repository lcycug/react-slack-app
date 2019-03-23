import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Header,
  Segment,
  Button,
  Form,
  Message,
  Icon,
  Loader,
  Dimmer
} from "semantic-ui-react";

import "../../App.css";
import firebase from "../../firebase";
import { setUser } from "../../actions";
import Spinner from "../Spinner";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const { setUser, history, user } = props;
  const handleLogin = event => {
    event.preventDefault();
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(loggedUser => {
        setLoading(false);
        setUser(loggedUser.user);
        history.push("/");
      });
  };
  useEffect(() => {
    Object.keys(user).length > 0 && history.push("/");
    setPageLoading(false);
  }, [user]);
  // useEffect(() => setPageLoading(false), [user]);
  return (
    <>
      {pageLoading ? (
        <Spinner loading={pageLoading} />
      ) : (
        <Grid textAlign="center" verticalAlign="middle" className="app">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" icon color="blue" textAlign="center">
              <Icon name="talk" color="blue" />
              Login for Devchat
            </Header>
            <Form>
              <Segment stacked>
                <Form.Input
                  type="text"
                  iconPosition="left"
                  placeholder="Email"
                  name="email"
                  icon="mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Form.Input
                  type="text"
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <Button
                  loading={loading}
                  disabled={loading}
                  fluid
                  color="blue"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Message>
                  Forget your account or password? Click{" "}
                  <Link to="/forget">here</Link>.
                </Message>
              </Segment>
              <Message>
                Have not an account? You can{" "}
                <Link to="/register">register</Link> yourself.
              </Message>
            </Form>
          </Grid.Column>
        </Grid>
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
)(Login);
