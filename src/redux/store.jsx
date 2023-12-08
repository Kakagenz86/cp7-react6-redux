import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import { thunk } from "redux-thunk";

// combine many reducers into one
// create story with reducers
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store