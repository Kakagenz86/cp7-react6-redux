import { authReducer } from "./authReducer";
import { menuReducer } from "./menuReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    authReducer,
    menuReducer
})