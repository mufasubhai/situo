import React from 'react';
import { Link } from 'react-router-dom';

const TaskIndexItem = props => (

  
  
    <Link className="task_index_item">
        {
                (!props.task.complete) ? 
                "uncomplete" : "complete"
        }
      {props.task.task_name}
    </Link>
 

     
 
)

export default TaskIndexItem;