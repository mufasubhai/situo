import { combineReducers } from 'redux';
import sessionErrors from './session_errors_reducer';
import projectErrors from './projects_errors_reducer'

const errorsReducer = combineReducers({
    session: sessionErrors,
    project: projectErrors
});

export default errorsReducer;