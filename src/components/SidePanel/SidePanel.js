import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";

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
    </Menu>
  );
}

export default SidePanel;
