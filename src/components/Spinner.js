import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const Spinner = ({ loading }) => {
  return (
    <Dimmer active>
      <Loader content="Loading..." loading={loading} />
    </Dimmer>
  );
};

export default Spinner;
