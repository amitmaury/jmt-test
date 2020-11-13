import {
    AddNewUser,
    SetResponseMessage,
    addNewUserActionTypes
} from "./types";

export const addNewUser = (payload: any): AddNewUser => ({
    type: addNewUserActionTypes.ADD_NEW_USER,
    payload,
})

export const setResponseMessage = (payload: any): SetResponseMessage => ({
    type: addNewUserActionTypes.SET_RESPONSE_MESSAGE,
    payload,
})