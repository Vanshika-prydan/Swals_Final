import {call, put} from 'redux-saga/effects';
import {otpVerify} from '../../services/Api';
import * as forgotPasswordActions from '../actions/forgotPasswordActions';

export default function* otpVerifyAsync(action) {
  try {
    yield put(forgotPasswordActions.enableLoader());

    const response = yield call(otpVerify, action.email, action.otp);

    if (response) {
      yield put(forgotPasswordActions.onRequestOTPResponse(response));
      yield put(forgotPasswordActions.disableLoader());
    } else {
      yield put(forgotPasswordActions.requestOTPFailed());
      yield put(forgotPasswordActions.disableLoader());
    }
  } catch (error) {
    yield put(forgotPasswordActions.requestOTPFailed());
    yield put(forgotPasswordActions.disableLoader());
  }
}
