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
            <div>
                <span className="project_top_container">
                    <Link to="/home">
                        <svg className="back_arrow_svg" focusable="false" viewBox="0 0 32 32">
                            <path d="M28,14.5H7.6L15,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0l-10,10c-0.6,0.6-0.6,1.5,0,2.1l10,10c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1l-7.4-7.4H28c0.8,0,1.5-0.7,1.5-1.5S28.8,14.5,28,14.5z"></path></svg>
                    </Link>

                    <Link to='/home'>
                        <svg className="x_arrow_svg" focusable="false" viewBox="0 0 32 32"><path d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z"></path></svg>
                    </Link>
                </span>
                <span className="project_create_form_container">
                        <form onSubmit={this.handleSubmit}>
                            <h1>New Project</h1>

                            <label className="new_project_name">Project Name
                                 <input value={this.state.project_name} onChange={this.update('project_name')}/>
                            </label> 

                            <label className="new_project_summary"> Summary
                                <textarea value={this.state.summary} onChange={this.update('summary')}/>
                            </label>

                            <button type='submit' value="Create Project" />
                        </form>

                </span>
            </div>
        )
    }

}

export default CreateProjectForm;