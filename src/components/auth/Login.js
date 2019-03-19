import React from "react";
import { Link } from "react-router-dom";
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

const Login = props => {
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
                placeholder="Username"
                name="username"
                icon="user"
              />
              <Form.Input
                type="text"
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
              />
              <Button fluid color="blue">
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

export default Login;
