import React from "react";
import { Grid, Header, Icon, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";

import { setUser } from "../../actions";
import firebase from "../../firebase";

const UserPanel = props => {
  const { setUser } = props;
  const handleLogout = event => {
    firebase.auth().signOut();
    setUser({});
  };
  return (
    <Grid>
      <Grid.Column>
        <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
          <Header inverted floated="left" as="h2">
            <Icon name="code" />
            <Header.Content>Devchat</Header.Content>
          </Header>
        </Grid.Row>
        <Header style={{ padding: "0.25em" }} as="h4" inverted>
          <Dropdown
            trigger={<span>User</span>}
            options={[
              {
                key: "user",
                text: (
                  <span>
                    Signed in as <strong>User</strong>
                  </span>
                ),
                disabled: true
              },
              {
                key: "avatar",
                text: <span>Change avatar</span>,
                disabled: true
              },
              {
                key: "logout",
                text: <span onClick={handleLogout}>Sign out</span>,
                disabled: false
              }
            ]}
          />
        </Header>
      </Grid.Column>
    </Grid>
  );
};

export default connect(
  null,
  { setUser }
)(UserPanel);
