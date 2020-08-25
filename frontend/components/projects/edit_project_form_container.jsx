import React from 'react';
import {connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import EditProjectForm from './edit_project_form'
import {fetchProject, updateProject} from '../../actions/project_actions'
import { openModal, closeModal} from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    const parts = ownProps.location.pathname.split("/")
    const projectId = parts.pop()

    return {
        project: state.entities.projects[projectId],
        projectId: projectId,

    }
}

const mDTP = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    updateProject: projectId => dispatch(updateProject(projectId)),
    closeModal: () => dispatch(closeModal())

})

export default withRouter(connect(mSTP, mDTP)(EditProjectForm))
