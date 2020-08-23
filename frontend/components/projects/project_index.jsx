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

        const {projects, deleteProject, updateProject } = this.props;
        return (
            

            <div>
                <ul>
                    {  
                        projects.map(project => (
                            <ProjectIndexItem 
                            project={project}
                            deleteProject={deleteProject}
                            updateProject={updateProject}
                            key={project.id}
                            />
                            ))
                            
                        }

                </ul>
                
                        <button>New Project</button>
            </div>
        )
    }
}

export default ProjectIndex;