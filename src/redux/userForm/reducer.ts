import { addNewUserActionTypes, SetResponseMessage } from "./types";

const initialState = { responseMsg: [] };
const addNewUserReducer = (
    state = initialState,
    action: SetResponseMessage
) => {
    switch (action.type) {

        case addNewUserActionTypes.SET_RESPONSE_MESSAGE: {
            return { ...state, responseMsg: action.payload.newResponseMsg };
        }
        default:
            return { ...state };
    }
};
export default addNewUserReducer;