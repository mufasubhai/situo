import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import ProjectList from './project_list'
import { fetchProject } from '../../actions/project_actions'
import { fetchTasks, deleteTask, fetchTask, createTask, updateTask } from '../../actions/task_actions'



const mSTP = (state, ownProps) => ({
    projectId: state.entities.projects[ownProps.match.params.projectId],
    tasks: Object.values(state.entities.tasks)
});


const mDTP = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    fetchTasks: () => dispatch(fetchTasks()),
    fetchTask: (taskId) => dispatch(fetchTask(taskId)),
    createTask: (task) => dispatch(createTask(task)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    updateTask: (taskId) => dispatch(updateTask(taskId)),
});




export default withRouter(connect(mSTP, mDTP)(ProjectList))