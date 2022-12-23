import {call, put} from 'redux-saga/effects';
import {services} from '../../services/Api';
import * as servicesAction from '../actions/servicesAction';

export default function* serviceAsync() {
  const response = yield call(services);
  if (response) {
    yield put(servicesAction.onServicesResponse(response));

    yield put(servicesAction.disableLoader());
  } else {
    yield put(servicesAction.servicesFailed());
    yield put(servicesAction.disableLoader());
  }
}
