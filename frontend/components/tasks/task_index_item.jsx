import React from 'react';
import { Link } from 'react-router-dom';

const TaskIndexItem = props => (

  <li>

  
    <p>
        {
                (!props.task.complete) ? 
                " Incomplete!  " : "Donezo!  "
        }
      {props.task.task_name}
        </p>
 

     
  </li>
)

export default TaskIndexItem;