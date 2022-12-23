import * as types from './types';

export function requestLogin(email, password) {
  return {
    type: types.LOGIN_REQUEST,
    email,
    password,
  };
}
export function loginFailed(response) {
  return {
    type: types.LOGIN_FAILED,
    response,
  };
}

export function onLoginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
