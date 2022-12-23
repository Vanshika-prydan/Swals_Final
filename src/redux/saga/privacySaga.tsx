import {call, put} from 'redux-saga/effects';
import {privacy} from '../../services/Api';
import * as privacyAction from '../actions/privacyAction';

export default function* privacyAsync(action) {
  const response = yield call(privacy);
  if (response) {
    yield put(privacyAction.onPrivacyResponse(response));

    yield put(privacyAction.disableLoader());
  } else {
    yield put(privacyAction.privacyFailed());
    yield put(privacyAction.disableLoader());
  }
}
