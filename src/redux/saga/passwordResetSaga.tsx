import {call, put} from 'redux-saga/effects';
import {setNewPassword} from '../../services/Api';
import * as forgotPasswordActions from '../actions/forgotPasswordActions';

export default function* passwordResetAsync(action) {
  try {
    yield put(forgotPasswordActions.enableLoader());

    const response = yield call(
      setNewPassword,
      action.password,
      action.email,
      action.otp,
    );

    if (response) {
      yield put(forgotPasswordActions.onRequestPasswordResetResponse(response));
      yield put(forgotPasswordActions.disableLoader());
    } else {
      yield put(forgotPasswordActions.requestPasswordResetFailed());
      yield put(forgotPasswordActions.disableLoader());
    }
  } catch (error) {
    yield put(forgotPasswordActions.requestPasswordResetFailed());
    yield put(forgotPasswordActions.disableLoader());
  }
}
