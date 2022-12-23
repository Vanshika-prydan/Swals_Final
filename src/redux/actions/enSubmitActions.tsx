import * as types from './types';

export function requestEnSubmit(name, upload, enrollment_id) {
  return {
    type: types.EN_SUBMIT_REQUEST,
    name,
    upload,
    enrollment_id,
  };
}

export function enSubmitFailed() {
  return {
    type: types.EN_SUBMIT_FAILED,
  };
}

export function onEnSubmitResponse(response) {
  return {
    type: types.EN_SUBMIT_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.EN_SUBMIT_LOADING_ENDED,
  };
}

export function disableLoader() {
  return {
    type: types.EN_SUBMIT_DISABLE_LOADER,
  };
}
