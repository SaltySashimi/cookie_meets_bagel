import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios
    .post('/signin', { email, password })
    .then(resp => {
      dispatch({ type: AUTH_USER }); // update state to indicate user-auth'ed
      localStorage.setItem('token', resp.data.token); // save JWT
      browserHistory.push('/feature'); // redirect to route /feature
    })
    .catch((err) => {
      dispatch(authError('Bad Login Info'))
    });
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios
    .post('/signup', { email, password })
    .then(resp => {
      dispatch({ type: AUTH_USER }); // update state to indicate user-auth'ed
      localStorage.setItem('token', resp.data.token); // save JWT
      browserHistory.push('/feature'); // redirect to route /feature
    })
    .catch(err => {
      dispatch(authError(err.response.data.error))
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
