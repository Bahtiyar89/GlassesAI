import React, {useReducer} from 'react';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import * as types from '../types';

const AuthState = props => {
  const initialState = {
    isSigned: false,
    access_token: null,
    user_id: null,
    refresh_token: null,
    error: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const signUp = async (FormData, navigation) => {
    dispatch({
      type: types.SIGN_UP_SUCCESS,
      payload: FormData,
    });
  };

  //logout
  const signOut = async () => {
    try {
      dispatch({
        type: types.LOGOUT,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Login User
  const signin = FormData => {
    dispatch({type: types.LOGIN_SUCCESS, payload: true});
  };
  const automaticSignin = FormData => {
    dispatch({type: types.AUTOMATIC_LOGIN_SUCCESS, payload: FormData});
  };

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        isSigned: state.isSigned,
        access_token: state.access_token,
        user_id: state.user_id,
        refresh_token: state.refresh_token,
        loading: state.loading,
        file: state.file,
        signUp,
        signin,
        signOut,
        automaticSignin,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
