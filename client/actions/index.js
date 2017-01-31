import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // submit email and password to server
    axios
    .post('/signin', { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER }); // update state to indicate user-auth'ed
      localStorage.setItem('token', response.data.token); // save JWT
      browserHistory.push('/feature'); // redirect to route /feature
    })
    .catch((err) => {
      dispatch(authError('Bad Login Info'))
    });
  }
}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token'); // remove JWT
  return { type: UNAUTH_USER };
}
