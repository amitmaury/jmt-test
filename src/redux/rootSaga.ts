import { all, fork } from "redux-saga/effects";
import { addNewUserSaga } from "./userForm/saga";

export function* rootSaga() {
  yield all([
    fork(addNewUserSaga)
  ]);
}
