import * as types from './types';

export function requestLogout() {
  return {
    type: types.LOGOUT_REQUEST,
  };
}

export function logoutFailed() {
  return {
    type: types.LOGOUT_FAILED,
  };
}

export function onLogoutResponse(response) {
  return {
    type: types.LOGOUT_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGOUT_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGOUT_DISABLE_LOADER,
  };
}
