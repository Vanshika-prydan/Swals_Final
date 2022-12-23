import * as types from './types';

export function requestHelp() {
  return {
    type: types.HELP_REQUEST,
  };
}

export function helpFailed() {
  return {
    type: types.HELP_FAILED,
  };
}

export function onHelpResponse(response) {
  return {
    type: types.HELP_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.HELP_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.HELP_DISABLE_LOADER,
  };
}
