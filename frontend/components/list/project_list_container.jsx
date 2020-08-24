import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import ProjectList from './project_list'
import { fetchProject } from '../../actions/project_actions'
import {fetchTasks} from '../../actions/task_actions'



const mSTP = (state, ownProps) => ({
    projectId: state.entities.projects[ownProps.match.params.projectId]
});


const mDTP = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    fetchTasks: () => dispatch(fetchTasks())
});




export default connect(mSTP, mDTP)(ProjectList)