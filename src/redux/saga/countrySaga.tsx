import { call, put } from 'redux-saga/effects';
import { countries } from '../../services/Api';
import * as countryAction from '../actions/countryAction';

export default function* countryAsync() {
  const response = yield call(countries);
  if (response) {
    yield put(countryAction.onCountryResponse(response));

    yield put(countryAction.disableLoader());
  } else {
    yield put(countryAction.countryFailed());
    yield put(countryAction.disableLoader());
  }
}
