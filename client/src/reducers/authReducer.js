import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    console.log(action);
    switch(action.type) {
        case FETCH_USER:
            // if being an empty string, it returns false
            return action.payload || false;
        default:
            return state;
    }
}