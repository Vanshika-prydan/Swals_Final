import * as types from './types';

export function requestTerms() {
  return {
    type: types.TERMS_REQUEST,
  };
}

export function termsFailed() {
  return {
    type: types.TERMS_FAILED,
  };
}

export function onTermsResponse(response) {
  return {
    type: types.TERMS_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.TERMS_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.TERMS_DISABLE_LOADER,
  };
}
