import React from 'react';
import ProjectIndexItem from './project_index_item'

class ProjectIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProjects();
    }
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <button>New Project</button>
                <ul>
                    {  
                        this.props.projects.map(project => (
                            <ProjectIndexItem 
                                project={project}
                                deleteProject={this.props.deleteProject}
                                updateProject={this.props.updateProject}
                            />
                        ))

                    }

                </ul>
                this is the project Index!
            </div>
        )
    }
}

export default ProjectIndex;