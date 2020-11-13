import axios from 'axios';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { addNewUserActionTypes } from './types';
import { setResponseMessage } from './actions';
import config from '../../config';


function userFormAPI(userData: any) {
  return axios.request({
    method: 'post',
    url: `${config.baseUrl}api/users`,
    data: userData
  });
}

function* userFormEffectSaga(action: any) {
  yield put(setResponseMessage({ newResponseMsg: [] }))
  try {
    let { data } = yield call(userFormAPI, action.payload);
    const newResponseMsg = data;

    yield put(setResponseMessage({ newResponseMsg }));
  } catch (e) {
    console.log(e);
  }
}

export function* watcherUserFormSaga() {
  yield takeLatest(addNewUserActionTypes.ADD_NEW_USER, userFormEffectSaga);
}

export function* addNewUserSaga() {
  yield all([call(watcherUserFormSaga)]);
}
