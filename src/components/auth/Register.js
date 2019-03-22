import React, { useState } from "react";
import { Link } from "react-router-dom";
import md5 from "md5";
import firebase from "../../firebase";
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

const Register = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        user.user.updateProfile({
          displayName: username,
          photoURL: `https://secure.gravatar.com/avatar/${md5(email)}`
        });
      })
      .catch(err => console.error(err));
  };
  return (
    <div>
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="blue" textAlign="center">
            <Icon name="talk" color="blue" />
            Register for DevChat
          </Header>
          <Form>
            <Segment stacked>
              <Form.Input
                iconPosition="left"
                placeholder="Username"
                type="text"
                name="username"
                icon="user"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <Form.Input
                iconPosition="left"
                placeholder="Email"
                type="email"
                name="email"
                icon="mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Input
                type="password"
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Form.Input
                type="password2"
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
                value={password2}
                onChange={e => setPassword2(e.target.value)}
              />
              <Button fluid color="blue" onClick={handleSubmit}>
                Submit
              </Button>
            </Segment>
            <Message>
              Already have an account? <Link to="/login">Login</Link> now.
            </Message>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Register;
