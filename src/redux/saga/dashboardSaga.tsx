import {call, put} from 'redux-saga/effects';
import {dashBoard} from '../../services/Api';
import * as dashboardAction from '../actions/dashboardAction';

export default function* dashboardAsync() {
  // yield put(signUpActions.enableLoader());
  // Calling function for API
  const response = yield call(dashBoard);

  if (response) {
    yield put(dashboardAction.onDashboardResponse(response));

    yield put(dashboardAction.disableLoader());
  } else {
    yield put(dashboardAction.dashboardFailed());
    yield put(dashboardAction.disableLoader());
  }
}
