import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

import rootReducer from "./reducers";

const initState = {};
export default createStore(rootReducer, initState, composeWithDevTools());
