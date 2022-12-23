import * as types from '../actions/types';

const initialState = {
  name: '',
  upload: {},
  enrollment_id: 0,
  enSubmitResponse: {},
  spinner: false,
};

export default function enSubmitReducer(state = initialState, action) {
  switch (action.type) {
    case types.EN_SUBMIT_REQUEST:
      return {
        ...state,
        name: action.name,
        upload: action.upload,
        enrollment_id: action.enrollment_id,
        spinner: true,
      };
    case types.EN_SUBMIT_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.EN_SUBMIT_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.EN_SUBMIT_RESPONSE:
      return {
        ...state,
        enSubmitResponse: action.response,
        spinner: false,
      };
    case types.EN_SUBMIT_FAILED:
      return {
        ...state,
        spinner: false,
      };

    default:
      return state;
  }
}
