import React from 'react';
import { Link, Redirect} from 'react-router-dom';


class CreateProjectForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.project;
        console.log(this.props.project)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createProject(this.state)
        this.props.history.push("/home");
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value })
    }

    render() {
        return (
            <span class_name="total_page">
                <span className="project_top_container">
                    <Link to="/home">
                        <svg className="back_arrow_svg" focusable="false" viewBox="0 0 32 32">
                            <path d="M28,14.5H7.6L15,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0l-10,10c-0.6,0.6-0.6,1.5,0,2.1l10,10c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1l-7.4-7.4H28c0.8,0,1.5-0.7,1.5-1.5S28.8,14.5,28,14.5z"></path></svg>
                    </Link>

                    <Link className="" to='/home'>
                        <svg className="x_arrow_svg modal_close_trigger" focusable="false" viewBox="0 0 32 32"><path d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z"></path></svg>
                    </Link>
                </span>
                <span className="project_bottom_container">
                    <span className="left_50"> </span>
                    <img src={window.newProjectTop} className='new_project_right' />
                </span>
            <div className="create_project_page">
                        <span className="create_spacer"></span>
                <div className="new_project_main_content">
                        <span className="project_create_form_container">
                                <form className="create_form_body" onSubmit={this.handleSubmit}>
                                    <h1 id="create_project_title">New Project</h1>
                                <span className="spacer_2"></span>
                                    <label className="new_project_name modal_label">Project Name
                                                        <span className="spacer"></span>    

                                    <input id="create_project_name" className="" value={this.state.project_name} onChange={this.update('project_name')}/>
                                    </label> 
                                    <span className="spacer_2"></span>
                                    <label className="modal_label"> Summary
                                                        <span className="spacer"></span>    

                                        <textarea id="create_project_summary" className="text_input" value={this.state.summary} onChange={this.update('summary')}/>
                                    </label>

                                    <span className="spacer_2"></span>

                                    <button type='submit'>Create Project</button>
                                </form>

                        </span>
                       <img src={window.newProject} className='new_project_image' />

                     
                </div>
                    
            </div>
                <span className="project_bottom_container">
                    <span className="left_50"> </span>
                    <img src={window.newProjectBottom} className='new_project_right' />
                </span>
            </span>
        )
    }

}

export default CreateProjectForm;