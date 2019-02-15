import axios from 'axios';
import { FETCH_USER } from './types';

// a function reduxThunk will see that we return to function and it
// will authomatically call it with dispatch
// we then make a request and wait until we get the response back from our API
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};