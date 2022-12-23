import {call, put} from 'redux-saga/effects';
import {ForgotPassword} from '../../services/Api';
import * as forgotPasswordActions from '../actions/forgotPasswordActions';

export default function* forgotPasswordAsync(action) {
  try {
    yield put(forgotPasswordActions.enableLoader());

    const response = yield call(ForgotPassword, action.email);

    if (response) {
      yield put(forgotPasswordActions.onForgotPasswordResponse(response));

      yield put(forgotPasswordActions.disableLoader());
    } else {
      yield put(forgotPasswordActions.forgotPasswordFailed());

      yield put(forgotPasswordActions.disableLoader());
    }
  } catch (error) {
    yield put(forgotPasswordActions.forgotPasswordFailed());

    yield put(forgotPasswordActions.disableLoader());
  }
}
