import { combineReducers } from 'redux';
// redux-form.com
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
});