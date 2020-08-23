import React from 'react';
import TaskIndexItem from './task_index_item'

class TaskIndex extends React.Component {

    componentDidMount() {
        this.props.fetchTasks(); 
    }
    constructor(props) {
        super(props)


    }

    render() {

        const { tasks, deleteTask, updateTask } = this.props;
        return (


            <div>
                <ul>
    
                    {
                        tasks.map(task => (
                            <TaskIndexItem
                            task={task}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                            key={task.id}
                            />
                            ))
                            
                        }

                </ul>
                        <button>New Task</button>
            </div>
        )
    }
}

export default TaskIndex;