import {call, put} from 'redux-saga/effects';
import * as enSubmitActions from '../actions/enSubmitActions';
import {enrollUpload} from '../../services/Api';

export default function* enSubmitActionsAsync(action) {
  const response = yield call(
    enrollUpload,
    action.name,
    action.upload,
    action.enrollment_id,
  );
  if (response) {
    yield put(enSubmitActions.onEnSubmitResponse(response));
    yield put(enSubmitActions.disableLoader());
  } else {
    yield put(enSubmitActions.enSubmitFailed());
    yield put(enSubmitActions.disableLoader());
  }
}
