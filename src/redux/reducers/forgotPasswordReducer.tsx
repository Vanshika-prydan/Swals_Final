import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  email: '',
  forgotPasswordResponse: {},
  requestOTPResponse: {},
  requestPasswordReset: {},
  spinner: false,
};

export default function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case types.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        email: action.email,
        spinner: true,
      };
    case types.REQUEST_OTP:
      return {
        ...state,
        otp: action.otp,
        spinner: true,
      };
    case types.REQUEST_PASSWORD_RESET:
      return {
        ...state,
        password: action.password,
        email: action.email,
        otp: action.otp,
        spinner: true,
      };
    case types.FORGOT_PASSWORD_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.FORGOT_PASSWORD_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.FORGOT_PASSWORD_RESPONSE:
      return {
        ...state,
        forgotPasswordResponse: action.response,
        spinner: false,
      };
    case types.REQUEST_OTP_RESPONSE:
      return {
        ...state,
        requestOTPResponse: action.response,
        spinner: false,
      };
    case types.REQUEST_PASSWORD_RESET_RESPONSE:
      return {
        ...state,
        requestPasswordReset: action.response,
        spinner: false,
      };
    case types.FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        requestOTPResponse: {},
        spinner: false,
      };
    case types.REQUEST_OTP_FAILED:
      return {
        ...state,
        requestPasswordReset: {},
        spinner: false,
      };

    case types.REQUEST_PASSWORD_RESET_FAILED:
      return {
        ...state,
        spinner: false,
      };

    default:
      return state;
  }
}
