import React from 'react';
import { Link } from 'react-router-dom';
import SideNavContainer from '../side_nav/side_nav_container';
import TopNavContainer from '../top_nav/top_nav_container';
import UserTaskIndexItem from '../tasks/user_task_index_item'

class UserList extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchTasks()
    }

    render() {

        
        const userTasks = this.props.tasks.filter(task => (task.owner_id === parseInt(this.props.userId)))
        const { tasks, projectId, fetchTask, deleteTask, updateTask, createTask } = this.props;
        console.log(this.props.tasks)
        console.log(this.props.userId)
        console.log(userTasks)
        return (
            <span className="situo_full_page">
                <div className="left_page_content">
                    <SideNavContainer />

                </div>

                <span className="right_page_content" id="right_page_content">
                    <TopNavContainer />
                    <span className='separator'></span>
                    <div className="main_content">

                        <div className="main_list_inner">
                            <button className="add_task_button">Add Task</button>
                            {

                                userTasks.map(task => (
                                    <UserTaskIndexItem
                                        task={task}
                                        deleteTask={deleteTask}
                                        updateTask={updateTask}
                                        key={task.id}
                                    />
                                ))


                            }
                        </div>
                    </div>
                </span>

            </span>
        )

    }

}

export default UserList