import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import tasksReducer from './tasks_reducer';
import commentsReducer from './comments_reducer';
import currentTaskReducer from './current_task_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
    comments: commentsReducer,
    currentTask: currentTaskReducer

});

export default entitiesReducer;