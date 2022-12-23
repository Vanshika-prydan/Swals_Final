import {call, put} from 'redux-saga/effects';
import {signUp} from '../../services/Api';
import * as signUpActions from '../actions/signUpActions';

export default function* signUpAsync(action) {
  // yield put(signUpActions.enableLoader());
  // Calling function for API
  const response = yield call(
    signUp,
    action.name,
    action.email,
    action.password,
  );

  if (response) {
    yield put(signUpActions.onSignUpResponse(response));

    yield put(signUpActions.disableLoader());
  } else {
    yield put(signUpActions.signUpFailed());
    yield put(signUpActions.disableLoader());
  }
}
