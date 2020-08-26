import React from 'react';



class EditProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.project


        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);

    }

    handleChange(field) {
        return e => {this.setState({[field]: e.target.value})}
    }

    componentDidMount() {
        this.props.fetchProject(this.props.projectId)
    }

    handleUpdate() {
        this.props.updateProject(this.state)
    }

    render () {
        return (
            <div className="modal_container">
                
                <span className="modal_top">
                <h1 className="edit_title">Project details</h1>
                
                        <div className="modal_close_trigger" onClick={() => this.props.closeModal()}>
                    <svg className="x_arrow_svg"  focusable="false" viewBox="0 0 32 32"><path className="x_arrow_svg" d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z"></path></svg>
                    </div>
                
                </span>

                <span className="project_edit_bottom">

                <label className="modal_label" >Name
                    <span className="spacer"></span>    
                         <input type="text" className="project_name_update text_input" value={this.state.project_name} onChange={this.handleChange('project_name')} />
                </label>
                
                <span className="date_container">   
                    <label className="modal_label">Due Date
                        <input className="cal" type="date" value={this.state.due_date} onChange={this.handleChange('due_date')} />
                    </label>
                </span>


                <label className="modal_label">Description
                <span className="spacer"></span>
                    <textarea id="project_summary_update" className="text_input" value={this.state.summary} onChange={this.handleChange('summary')}/>
                </label>

                <div className="update-project-modal-button">
                    <button className="edit_project" onClick={this.handleUpdate}>Update Project
                    </button>
                </div>
                </span>

                
                
            </div>
        )
    }
}


export default EditProjectForm;