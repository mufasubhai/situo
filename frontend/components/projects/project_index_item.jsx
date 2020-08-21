import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (

  <span>

    <p>status:  
        
        {
                (!props.project.complete) ? 
                " Incomplete!" : "Donezo!"
        }
        </p>
    <p>name: {props.project.project_name}</p>
    <p>summary: {props.project.summary}</p>
      <button onClick={()=> props.deleteProject(props.project.id)}>Delete Project</button>
      <button onClick={()=> props.updateProject(props.project)}>Update Project</button>
      <br/>
  </span>
)

export default ProjectIndexItem;