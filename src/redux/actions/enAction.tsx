import * as types from './types';

export function requestEn(name, countryName, companyName, serviceName, phone) {
  return {
    type: types.EN_REQUEST,
    name,
    countryName,
    companyName,
    serviceName,
    phone,
  };
}

export function enFailed() {
  return {
    type: types.EN_FAILED,
  };
}

export function onEnResponse(response) {
  return {
    type: types.EN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.EN_LOADING_ENDED,
  };
}

export function disableLoader() {
  return {
    type: types.EN_DISABLE_LOADER,
  };
}
