import { combineReducers } from "redux";
import addNewUserReducer from "./userForm/reducer";

export const rootReducer = combineReducers({
    addNewUserData: addNewUserReducer
});

export type RootState = ReturnType<typeof rootReducer>;
