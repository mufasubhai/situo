import React from 'react';



class EditProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.project
        console.log(this.props.project)
        console.log(this.props.projectId)
        console.log(this.props.users)

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
            <div>
                
                <div>
                    <button onClick={() => this.props.closeModal()}>
                    <svg clasName="x_arrow_svg"  focusable="false" viewBox="0 0 32 32"><path d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z"></path></svg>
                    </button>
                </div>

                <h1>Project Details</h1>
                <label className="modal_label" >Name

                         <input type="text" className="project_name_update" value={this.state.project_name} onChange={this.handleChange('project_name')} />
                </label>
                
                <span>
                   
                      
                   
                    <label className="modal_label">Due Date
                        <input type="date" value={this.state.due_date} onChange={this.handleChange('due_date')} />
                    </label>
                </span>


                <label className="modal_label">Description
                    <textarea className="project_summary_update" value={this.state.summary} onChange={this.handleChange('summary')}/>
                </label>

                <div className="update-project-modal-buttons">
                    <button className="edit_project" onClick={this.handleUpdate}>
                        Update Project
                    </button>
                </div>

                
                
            </div>
        )
    }
}


export default EditProjectForm;