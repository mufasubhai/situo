import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (

  
  <li>  
    {/* link to props show page */}
    <p>{props.project.project_name}</p>
  </li>
)

export default ProjectIndexItem;