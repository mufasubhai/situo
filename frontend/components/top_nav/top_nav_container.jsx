import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import TopNav from './top_nav';
import { logout } from '../../actions/session_actions';
import { fetchProject } from '../../actions/project_actions'



const mSTP = (state, ownProps) => ({
        user: state.entities.users[state.session.id],
        currentProject: state.entities.projects[ownProps.match.params.projectId]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchProject: (postId) => dispatch(fetchProject(postId))

})

export default withRouter(connect(mSTP, mDTP)(TopNav))