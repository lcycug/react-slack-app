import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import { setUser } from "./actions";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import MetaPanel from "./components/MetaPanel/MetaPanel";
import Messages from "./components/Messages/Messages";

const App = props => {
  return (
    <Grid columns="equal" className="app" style={{ background: "#eee" }}>
      <ColorPanel />
      <SidePanel />
      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>
      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { setUser }
)(App);
