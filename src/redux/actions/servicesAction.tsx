import * as types from './types';

export function requestServices() {
  return {
    type: types.SERVICES_REQUEST,
  };
}

export function servicesFailed() {
  return {
    type: types.SERVICES_FAILED,
  };
}

export function onServicesResponse(response: {}) {
  return {
    type: types.SERVICES_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.SERVICES_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.SERVICES_DISABLE_LOADER,
  };
}
