import {
    RECEIVE_TASK,
    RECEIVE_TASKS,
    REMOVE_TASK
} from '../actions/task_actions'

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TASKS:
            return Object.assign({}, state, action.tasks)
        case RECEIVE_TASK:
            return Object.assign({}, state, { [action.task.id]: action.task })
        case REMOVE_TASK:
            const newState = Object.assign({}, state);
            delete newState[action.taskId];
            return newState;
        default:
            return state;
    }
}

export default tasksReducer;