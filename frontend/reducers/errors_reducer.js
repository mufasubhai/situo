import { combineReducers } from 'redux';
import sessionErrors from './session_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrors
});

export default errorsReducer;