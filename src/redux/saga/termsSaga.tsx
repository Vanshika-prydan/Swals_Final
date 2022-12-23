import {call, put} from 'redux-saga/effects';
import {terms} from '../../services/Api';
import * as termsAction from '../actions/termsAction';

export default function* termsAsync() {
  const response = yield call(terms);
  if (response) {
    yield put(termsAction.onTermsResponse(response));

    yield put(termsAction.disableLoader());
  } else {
    yield put(termsAction.termsFailed());
    yield put(termsAction.disableLoader());
  }
}
