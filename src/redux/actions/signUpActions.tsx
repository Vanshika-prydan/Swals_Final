import * as types from './types';

export function requestSignUp(name, email, password) {
  return {
    type: types.SIGNUP_REQUEST,
    name,
    email,
    password,
  };
}

export function signUpFailed() {
  return {
    type: types.SIGNUP_FAILED,
  };
}

export function onSignUpResponse(response) {
  return {
    type: types.SIGNUP_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.SIGNUP_LOADING_ENDED,
  };
}

export function disableLoader() {
  return {
    type: types.SIGNUP_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
export function onlogoutResponse(response) {
  return {
    type: types.LOGOUT_RESPONSE,
    response,
  };
}
