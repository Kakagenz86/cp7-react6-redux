import { authReducer } from "./authReducer";
import { menuReducer } from "./menuReducer";
import { userReducer } from "./userReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    authReducer,
    menuReducer,
    userReducer
})