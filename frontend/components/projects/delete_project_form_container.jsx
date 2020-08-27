import React from 'react';
import { deleteProject, fetchProject } from '../../actions/project_actions';
import {withRouter, Link } from 'react-router-dom';
import {closeModal, openModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';


class DeleteProjectForm extends React.Component {

    constructor(props) {
        super(props)
        this.clickDelete = this.clickDelete.bind(this)
    }

    componentDidMount() {
        this.props.fetchProject(this.props.projectId)
    }

    clickDelete(e) {
       
        this.props.deleteProject(this.props.projectId).then(() => this.props.history.push('/home'))
    }
    render() {
       
        return (
        
            <div className="modal_container">
                <span className="modal_top">
                    <h1>Delete the "{this.props.project.project_name}" project?</h1>
                    <div className="modal_close_trigger" onClick={() => this.props.closeModal()}>
                        <svg className="x_arrow_svg" focusable="false" viewBox="0 0 32 32"><path className="x_arrow_svg" d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z"></path></svg>
                    </div>
                </span>
                <span className="modal_bottom">
                <ul className="warning_list">This will delete the project, along with the following:
                    <li className="warning_list_item">Any unassigned tasks that are only in this project</li>
                    <li className="warning_list_item">Any Custom Fields local to the project</li>
                    <li className="warning_list_item">Any rules in the project</li>
                </ul>
                <span className="delete_buttons">
                    <button className="cancel_button" onClick={() => this.props.closeModal()}>Cancel</button>
                    <span className="spacer"></span>
                    <button className="delete_button" onClick={() => this.clickDelete()}>Delete</button>
                </span>
                </span>
            </div>
        )
    }

}

const mSTP = (state, ownProps) => {
    
    const parts = ownProps.location.pathname.split("/")
    const projectId = parseInt(parts[parts.length-1])

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