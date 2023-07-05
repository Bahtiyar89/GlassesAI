import {CLEAR_ERRORS} from '../types';
import * as types from '../types';

export default (state, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isSigned: true,
        loading: false,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isSigned: true,
      };
    case types.AUTOMATIC_LOGIN_SUCCESS:
      return {
        ...state,
        isSigned: true,
      };

    case types.REGISTER_FAIL:
    case types.AUTH_ERROR:
    case types.LOGIN_FAIL:
      // localStorage.removeItem('token');
      return {
        ...state,
        isSigned: false,
        loading: false,
      };
    case types.LOGOUT:
      return {
        ...state,
        isSigned: false,
      };
    case types.CLEAR_ERRORS:
      return {...state, error: null};

    default:
      return state;
  }
};
