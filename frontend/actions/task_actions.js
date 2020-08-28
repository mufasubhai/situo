import * as TaskAPIUtil from '../util/task_api_util'

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS"
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveErrors = errors => ({
    type: RECEIVE_TASK_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
}) 

const receiveTasks = tasks => ({
    type: RECEIVE_TASKS,
    tasks
})

const receiveTask = task => ({
    type: RECEIVE_TASK,
    task
})

const removeTask = taskId => ({
    type: REMOVE_TASK,
    taskId
})

export const fetchTasks = () => dispatch => (
    TaskAPIUtil.fetchTasks()
        .then(tasks => (dispatch(receiveTasks(tasks))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const fetchTask = task => dispatch => (
    TaskAPIUtil.fetchTask(task)
        .then(task => (dispatch(receiveTask(task))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const createTask = task => dispatch => (
    TaskAPIUtil.createTask(task)
        .then(task => (dispatch(receiveTask(task))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const updateTask = task => dispatch => (
    TaskAPIUtil.updateTask(task)
        .then(task => (dispatch(receiveTask(task))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const deleteTask = taskId => dispatch => (
    TaskAPIUtil.deleteTask(taskId)
        .then(() => dispatch(removeTask(taskId)))
)