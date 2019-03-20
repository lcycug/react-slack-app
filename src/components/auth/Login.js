import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Header,
  Segment,
  Button,
  Form,
  Message,
  Icon
} from "semantic-ui-react";

import "../../App.css";
import firebase from "../../firebase";
import { setLoggedInUser } from "../../actions";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = event => {
    event.preventDefault();
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(loggedUser => {
        setLoading(false);
        props.setLoggedInUser(loggedUser.user);
        props.history.push("/");
      });
  };
  return (
    <div>
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
              Have not an account? You can <Link to="/register">register</Link>{" "}
              yourself.
            </Message>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default connect(
  null,
  { setLoggedInUser }
)(Login);
