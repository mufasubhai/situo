import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (

  <li>

  
    <p>status:  
        
        {
                (!props.project.complete) ? 
                " Incomplete!" : "Donezo!"
        }
        </p>
    <p>name: {props.project.project_name}</p>
    <p>summary: {props.project.summary}</p>
    <p>ID: {props.project.id}</p>
      <button onClick={()=> props.deleteProject(props.project.id)}>Delete Project</button>
      {/* edit project prop form ? */}
      <button onClick={()=> props.updateProject(props.project.id)}>Update Project</button>
      <br/>
  </li>
)

export default ProjectIndexItem;