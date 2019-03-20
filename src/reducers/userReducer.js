import { SET_USER } from "../actions/types";
const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
