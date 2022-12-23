import {call, put} from 'redux-saga/effects';
import {help} from '../../services/Api';
import * as helpAction from '../actions/helpAction';

export default function* helpAsync(action) {
  const response = yield call(help);
  if (response) {
    yield put(helpAction.onHelpResponse(response));

    yield put(helpAction.disableLoader());
  } else {
    yield put(helpAction.helpFailed());
    yield put(helpAction.disableLoader());
  }
}
