import React from 'react';
import ProjectIndexItem from './project_index_item'
import { Link } from 'react-router-dom';

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
            

            <div className="project_list">
                <ul className="project_list">
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
                    <Link to="/"><div className="tile_container"><div className="dot_box"><svg focusable="false" viewBox="0 0 0 0 "><path className='plus_icon' d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"></path></svg></div>
                        <div className="tile_title">New Project</div>
                    </div>
                        </Link>
                </ul>
                
            </div>
        )
    }
}

export default ProjectIndex;