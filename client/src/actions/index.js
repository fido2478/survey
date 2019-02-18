import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

// a function reduxThunk will see that we return to function and it
// will authomatically call it with dispatch
// we then make a request and wait until we get the response back from our API
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
    // send the token from Stripe to the back-end server and then
    // get the user updated with credits 
    const res = await axios.post('/api/stripe', token);
    // send the updated user to Redux
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
  
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
  };
  
  export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');
  
    dispatch({ type: FETCH_SURVEYS, payload: res.data });
  };
  