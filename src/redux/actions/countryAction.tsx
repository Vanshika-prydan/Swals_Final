import * as types from './types';

export function requestCountry() {
  return {
    type: types.COUNTRY_REQUEST,
  };
}

export function countryFailed() {
  return {
    type: types.COUNTRY_FAILED,
  };
}

export function onCountryResponse(response: {}) {
  return {
    type: types.COUNTRY_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.COUNTRY_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.COUNTRY_DISABLE_LOADER,
  };
}
