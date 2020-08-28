import { combineReducers } from 'redux';
import sessionErrors from './session_errors_reducer';
import projectErrors from './projects_errors_reducer';
import taskErrors from './tasks_errors_reducer';
import commentErrors from './comments_errors_reducer';
import userErrors from './users_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrors,
    project: projectErrors,
    comment: commentErrors,
    task: taskErrors,
    user: userErrors
});

export default errorsReducer;