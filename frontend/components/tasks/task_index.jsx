import React from 'react';
import TaskIndexItem from './task_index_item'

class TaskIndex extends React.Component {
    
    constructor(props) {
        super(props)

        
    }
    componentDidMount() {
        this.props.fetchTasks(); 
    }
    
    render() {
        
        const userTasks = this.props.tasks.filter(task => (task.owner_id === this.props.id ));
        const incompleteTasks = userTasks.filter(task => (task.status !== 'complete'));
        const { tasks, deleteTask, updateTask} = this.props;
        return (


            
                <ul className='home_task_list'>
                    
                    {


                        incompleteTasks.map(task => (
                            <TaskIndexItem
                            task={task}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                            key={task.id}
                            />
                            ))
                            
                        }

                </ul>
           
        )
    }
}

export default TaskIndex;