import { Action } from "redux";

export enum addNewUserActionTypes {
    
    ADD_NEW_USER = "userForm/addNewUser",
    SET_RESPONSE_MESSAGE = "userForm/setResponseMessage"
}

export interface AddNewUser extends Action<typeof addNewUserActionTypes.ADD_NEW_USER> {
	payload: object
}
export interface SetResponseMessage extends Action<typeof addNewUserActionTypes.SET_RESPONSE_MESSAGE> {
	payload: {
		newResponseMsg: any,
	}
}