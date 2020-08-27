import React from 'react';
import { Link } from 'react-router-dom';
import SideNavContainer from '../side_nav/side_nav_container';
import TopNavContainer from '../top_nav/top_nav_container';
import UserTaskIndexItem from '../tasks/user_task_index_item'

class UserList extends React.Component {
    constructor(props) {
        super(props)
        const userId = parseInt(this.props.userId)

    }

    componentDidMount() {
        this.props.fetchTasks()
        this.newTask = this.newTask.bind(this)
    }

    newTask() {
        const userId = parseInt(this.props.userId)
        this.props.createTask({
            task_name: "Test", 
            description: "", 
            due_date: Date(),
            owner_id: userId,
            creator_id: userId,
            status: "not-started"
        })
    }

 

    render() {
        
        const userId = parseInt(this.props.userId)

        
        const userTasks = this.props.tasks.filter(task => (task.owner_id === userId));
        const incompleteTasks = userTasks.filter(task => (task.status !== 'complete'))
        const { tasks, projectId, fetchTask, deleteTask, updateTask, createTask } = this.props;
      
        return (
            <span className="situo_full_page">
                <div className="left_page_content">
                    <SideNavContainer />

                </div>

                <span className="right_page_content" id="right_page_content">
                    <TopNavContainer />
                    <span className='separator'></span>
                    <div className="main_content">
                        
                    <span className="main_list_container">

                        <div className="main_list_inner">
                            <span className="add_task_container">
                                <button className="add_task_button" onClick={this.newTask}>Add Task</button>

                            </span>
                            {
                                
                                incompleteTasks.map(task => (
                                    <UserTaskIndexItem
                                    task={task}
                                    deleteTask={deleteTask}
                                    updateTask={updateTask}
                                    key={task.id}
                                    />
                                    ))
                                    
                                    
                                }
                        </div>
                    </span>
                    </div>
                </span>

            </span>
        )

    }

}

export default UserList