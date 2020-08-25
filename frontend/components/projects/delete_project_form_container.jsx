import React from 'react';
import { deleteProject, fetchProject } from '../../actions/project_actions';
import {withRouter, Link } from 'react-router-dom';
import {closeModal, openModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';


class DeleteProjectForm extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProject(this.props.projectId)
    }

    render() {
        return (
        
            <div>
                <h1>Delete the "{this.props.project.project_name}" project?</h1>
                <ul>This will delete the project, along with the following:
                    <li>Any unassigned tasks that are only in this project</li>
                    <li>Any Custom Fields local to the project</li>
                    <li>Any rules in the project</li>
                </ul>
                <button onClick={() => this.props.closeModal()}>Cancel</button>
                <Link onClick={() => this.props.deleteProject(this.props.projectId)} to="/home">Delete</Link>
            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    const parts = ownProps.location.pathname.split("/")
    const projectId = parts.pop()

    return {
        project: state.entities.projects[projectId],
        projectId: projectId
    }

}


const mDTP = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    closeModal: () => dispatch(closeModal()),
    deleteProject: projectId => dispatch(deleteProject(projectId))
})


export default withRouter(connect(mSTP, mDTP)(DeleteProjectForm))