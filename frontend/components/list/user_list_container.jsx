import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import UserList from './user_list'
import { fetchTasks, deleteTask, fetchTask, createTask, updateTask } from '../../actions/task_actions'


const mSTP = state => ({
    userId: state.session.id,
    user: state.entities.users[state.session.id],
    tasks: Object.values(state.entities.tasks)
});

const mDTP = dispatch => ({
    fetchTasks: () => dispatch(fetchTasks()),
    fetchTask: (taskId) => dispatch(fetchTask(taskId)),
    createTask: (task) => dispatch(createTask(task)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    updateTask: (taskId) => dispatch(updateTask(taskId)),
});




export default withRouter(connect(mSTP, mDTP)(UserList))