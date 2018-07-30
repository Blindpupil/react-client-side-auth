import axios from 'axios';

// import AUTH_USER from './types';

const SIGN_UP_API = 'http://localhost:3090/signup';

export const signup = (formProps) => (dispatch) => {
  axios.post(SIGN_UP_API, formProps);
};
