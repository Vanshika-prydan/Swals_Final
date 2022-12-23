import {call, put} from 'redux-saga/effects';
import {news} from '../../services/Api';
import * as newsAction from '../actions/newsAction';

export default function* newsAsync(action) {
  const response = yield call(news);

  if (response) {
    yield put(newsAction.onNewsResponse(response));

    yield put(newsAction.disableLoader());
  } else {
    yield put(newsAction.newsFailed());
    yield put(newsAction.disableLoader());
  }
}
