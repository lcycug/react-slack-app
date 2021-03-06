import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";

function SidePanel() {
  return (
    <Menu
      size="large"
      inverted
      vertical
      fixed="left"
      style={{ background: "#4c3c4c", fontSize: "1.2rem" }}
    >
      <UserPanel />
      <Channels />
    </Menu>
  );
}

export default SidePanel;
