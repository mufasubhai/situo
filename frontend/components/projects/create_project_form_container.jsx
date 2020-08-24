import React from 'react';
import { connect } from 'react-redux'
import { createProject} from '../../actions/project_actions';
import CreateProjectForm from './create_project_form';
import {withRouter} from 'react-router-dom';

const mSTP = state => ({
    project: {
        project_name: '',
        summary: '',
        due_date: null,
        owner_id: state.session.id

    },


})

const mDTP = dispatch => ({
    createProject: (project) => dispatch(createProject(project))
})

export default withRouter(connect(mSTP, mDTP)(CreateProjectForm))