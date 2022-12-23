import * as types from './types';

export function requestPrivacy() {
  return {
    type: types.PRIVACY_REQUEST,
  };
}

export function privacyFailed() {
  return {
    type: types.PRIVACY_FAILED,
  };
}

export function onPrivacyResponse(response) {
  return {
    type: types.PRIVACY_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.PRIVACY_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.PRIVACY_DISABLE_LOADER,
  };
}
