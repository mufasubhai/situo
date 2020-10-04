export const SET_CURRENT_TASK = 'SET_CURRENT_TASK'

export const setTask = currentTask => {
    return {
    type: SET_CURRENT_TASK,
    currentTask
}}