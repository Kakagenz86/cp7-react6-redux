import { createStore } from "redux";
import { rootReducer } from "./reducers";

// combine many reducers into one
// create story with reducers
const store = createStore(rootReducer)

export default store