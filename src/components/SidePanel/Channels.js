import React, { useState, useEffect } from "react";
import { Menu, Icon, Modal, Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";

import firebase from "../../firebase";

const Channels = props => {
  const { channels } = props;
  const [firebaseKey, setFirebaseKey] = useState(null);
  const [modal, setModal] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [channelDetail, setChannelDetail] = useState("");
  useEffect(() => setFirebaseKey(firebase.database().ref("channels")), []);
  const handleSubmit = event => {
    event.preventDefault();
    const { user } = props;
    if (!channelName.trim().length || !channelDetail.trim().length) return;
    const key = firebaseKey.push().key;
    const newChannel = {
      uid: key,
      name: channelName,
      detail: channelDetail,
      createdBy: {
        name: user && user.displayName,
        avatar: user && user.photoURL
      }
    };
    firebaseKey.child(key).update(newChannel);
    setModal(false);
  };
  return (
    <>
      <Menu.Menu>
        <Menu.Item>
          <span>
            <Icon name="exchange" />
            CHANNELS
          </span>{" "}
          ({channels && channels.length})
          <Icon name="add" onClick={() => setModal(true)} />
        </Menu.Item>
      </Menu.Menu>
      <Modal open={modal} basic onClose={() => setModal(false)}>
        <Modal.Header>Add New Channel</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <Input
                fluid
                autoComplete="off"
                label="Name of channel"
                name="channelName"
                value={channelName}
                onChange={e => setChannelName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <Input
                autoComplete="off"
                fluid
                label="Detail of channel"
                name="channelDetail"
                value={channelDetail}
                onChange={e => setChannelDetail(e.target.value)}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" inverted onClick={handleSubmit}>
            <Icon name="checkmark" />
            Submit
          </Button>
          <Button color="red" inverted onClick={() => setModal(false)}>
            <Icon name="remove" />
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Channels);
