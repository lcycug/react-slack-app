import { SET_USER } from "./types";

export const setLoggedInUser = user => ({ type: SET_USER, payload: user });
