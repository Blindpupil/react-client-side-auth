import axios from 'axios';
import { AUTH_ERROR, AUTH_USER } from './types';

const SIGN_UP_API = 'http://localhost:3090/signup';

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(SIGN_UP_API, formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    console.log(e);
    dispatch({ type: AUTH_ERROR, payload: 'Hardcoded client-side error' })
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  }
};