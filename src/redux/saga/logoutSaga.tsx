import {call, put} from 'redux-saga/effects';
import {logout} from '../../services/Api';
import * as logoutAction from '../actions/logoutAction';

export default function* logoutAsync() {
  const response = yield call(logout);
  if (response) {
    yield put(logoutAction.onLogoutResponse(response));

    yield put(logoutAction.disableLoader());
  } else {
    yield put(logoutAction.logoutFailed());
    yield put(logoutAction.disableLoader());
  }
}
