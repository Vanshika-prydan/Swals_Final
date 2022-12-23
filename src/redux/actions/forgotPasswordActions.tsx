import * as types from './types';

export function requestForgotPassword(email) {
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
    email,
  };
}

export function forgotPasswordFailed() {
  return {
    type: types.FORGOT_PASSWORD_FAILED,
  };
}

export function onForgotPasswordResponse(response) {
  return {
    type: types.FORGOT_PASSWORD_RESPONSE,
    response,
  };
}

export function requestOTP(email, otp) {
  return {
    type: types.REQUEST_OTP,
    email,
    otp,
  };
}

export function requestOTPFailed() {
  return {
    type: types.REQUEST_OTP_FAILED,
  };
}

export function onRequestOTPResponse(response) {
  return {
    type: types.REQUEST_OTP_RESPONSE,
    response,
  };
}

export function requestPasswordReset(password, email, otp) {
  return {
    type: types.REQUEST_PASSWORD_RESET,
    password,
    email,
    otp,
  };
}

export function requestPasswordResetFailed() {
  return {
    type: types.REQUEST_PASSWORD_RESET_FAILED,
  };
}

export function onRequestPasswordResetResponse(response) {
  return {
    type: types.REQUEST_PASSWORD_RESET_RESPONSE,
    response,
  };
}
export function enableLoader() {
  return {
    type: types.FORGOT_PASSWORD_LOADING_ENDED,
  };
}

export function disableLoader() {
  return {
    type: types.FORGOT_PASSWORD_DISABLE_LOADER,
  };
}
