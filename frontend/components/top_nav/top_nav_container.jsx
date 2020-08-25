import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import TopNav from './top_nav';
import { logout } from '../../actions/session_actions';
import { fetchProject, deleteProject } from '../../actions/project_actions'
import {openModal} from '../../actions/modal_actions'



const mSTP = (state, ownProps) => ({
        user: state.entities.users[state.session.id],
        currentProject: state.entities.projects[ownProps.match.params.projectId]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchProject: (postId) => dispatch(fetchProject(postId)),
    deleteProject: projectId => dispatch(deleteProject(projectId)),
    openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(mSTP, mDTP)(TopNav))