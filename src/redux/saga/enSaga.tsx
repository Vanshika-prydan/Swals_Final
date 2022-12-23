import {call, put} from 'redux-saga/effects';
import * as enActions from '../actions/enAction';
import {enrollmentSubmit} from '../../services/Api';

export default function* enActionsAsync(action) {
  const response = yield call(
    enrollmentSubmit,
    action.name,
    action.countryName,
    action.companyName,
    action.serviceName,
    action.phone,
  );

  if (response) {
    yield put(enActions.onEnResponse(response));
    yield put(enActions.disableLoader());
  } else {
    yield put(enActions.enFailed());
    yield put(enActions.disableLoader());
  }
}
