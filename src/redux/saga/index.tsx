import {takeEvery, all} from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import forgotPasswordSaga from './forgotPasswordSaga';
import signUpSaga from './signUpSaga';
import otpVerifySaga from './otpVerifySaga';
import passwordResetSaga from './passwordResetSaga';
import dashboardSaga from './dashboardSaga';
import servicesSaga from './servicesSaga';
import countrySaga from './countrySaga';
import newsSaga from './newsSaga';
import termsSaga from './termsSaga';
import helpSaga from './helpSaga';
import privacySaga from './privacySaga';
import logoutSaga from './logoutSaga';
import enSaga from './enSaga';
import enSubmitSaga from './enSubmitSaga';

/**
 * Create root saga file for manage api request and response
 * @class rootSaga
 */
export default function* rootSaga() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  yield all([takeEvery(types.FORGOT_PASSWORD_REQUEST, forgotPasswordSaga)]);
  yield all([takeEvery(types.REQUEST_OTP, otpVerifySaga)]);
  yield all([takeEvery(types.REQUEST_PASSWORD_RESET, passwordResetSaga)]);
  yield all([takeEvery(types.SIGNUP_REQUEST, signUpSaga)]);
  yield all([takeEvery(types.DASHBOARD_REQUEST, dashboardSaga)]);
  yield all([takeEvery(types.SERVICES_REQUEST, servicesSaga)]);
  yield all([takeEvery(types.NEWS_REQUEST, newsSaga)]);
  yield all([takeEvery(types.TERMS_REQUEST, termsSaga)]);
  yield all([takeEvery(types.HELP_REQUEST, helpSaga)]);
  yield all([takeEvery(types.PRIVACY_REQUEST, privacySaga)]);
  yield all([takeEvery(types.LOGOUT_REQUEST, logoutSaga)]);
  yield all([takeEvery(types.EN_REQUEST, enSaga)]);
  yield all([takeEvery(types.EN_SUBMIT_REQUEST, enSubmitSaga)]);
  yield all([takeEvery(types.COUNTRY_REQUEST, countrySaga)]);
}
