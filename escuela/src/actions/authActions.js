import axios from 'axios';
import jwt_decode from 'jwt-decode';

import * as ActionTypes from './types';
import { setAuthToken } from 'reducers/utilityFunctions';

export const registerUser = (user, history) => dispatch => {
  axios.post('/register', user)
    .then(res => {
      history.push('/login');
      console.log(res.data);
    })
    .catch(err => {
      Object.values(err.response.data).map(error =>
        dispatch({
          type: ActionTypes.ADD_FLASH_MESSAGE,
          message: {
            type: 'error',
            text: `${error}`
          }
        }));
    });
}

export const loginUser = (user) => dispatch => {
  axios.post('/login', user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      dispatch({
        type: ActionTypes.ADD_FLASH_MESSAGE,
        message: {
          type: 'success',
          text: `Welcome back ${decoded.name}!`
        }
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: ActionTypes.ADD_FLASH_MESSAGE,
        message: {
          type: 'error',
          text: 'Failed to login user'
        }
      });
    });
}

export const setCurrentUser = decoded => {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    payload: decoded
  }
}

export const logoutUser = (history) => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push('/login');
  dispatch({
    type: ActionTypes.ADD_FLASH_MESSAGE,
    message: {
      type: 'success',
      text: 'You have been logged out!'
    }
  })
}