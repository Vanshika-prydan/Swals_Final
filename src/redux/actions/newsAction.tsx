import * as types from './types';

export function requestNews() {
  return {
    type: types.NEWS_REQUEST,
  };
}

export function newsFailed() {
  return {
    type: types.NEWS_FAILED,
  };
}

export function onNewsResponse(response) {
  return {
    type: types.NEWS_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.NEWS_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.NEWS_DISABLE_LOADER,
  };
}
