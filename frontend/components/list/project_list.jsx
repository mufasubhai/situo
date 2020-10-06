import React from 'react';
import { Link } from 'react-router-dom';
import SideNavContainer from '../side_nav/side_nav_container';
import TopNavContainer from '../top_nav/top_nav_container';
import ProjectTaskIndexItem from '../tasks/project_task_index_item';


class ProjectList extends React.Component {
    
    constructor(props) {
        super(props)
        this.newTask = this.newTask.bind(this)    
    }

    componentDidMount() {
        this.props.fetchTasks()
        this.props.fetchProject(this.props.match.params.projectId)
                this.props.fetchUsers();

    }

    newTask() {
        const projectId = parseInt(this.props.match.params.projectId)
        const userId = this.props.userId
        this.props.createTask({
            task_name: "New task",
            description: "",
            due_date: Date(),
            start_date: Date(),
            owner_id: userId,
            creator_id: userId,
            status: "not-started",
            project_id: projectId
        })
    }


    render () {

        const boundProjectId = this.props.match.params.projectId
        const projectTasks = this.props.tasks.filter(task => {
            
            return task.project_id === parseInt(boundProjectId)});
        const incompleteTasks = projectTasks.filter(task => (task.status !== 'complete'))

        const { tasks, projectId, fetchTask, deleteTask, updateTask, createTask, openModal, setTask} = this.props;
     
      
        return (
            <span className="situo_full_page">
                <div className="left_page_content">
                    <SideNavContainer />

                </div>
                <span className="right_page_content" id="right_page_content">
                    <TopNavContainer />
                    <span className='separator'></span>
                    <div className="main_content">
                        {/* <span className="main_list_container"> */}
                                <span className="project_list_container">

                                
                                <div className="main_list_inner project_list_inner">
                                    <span className="add_task_container">
                                    <div className="spacer_4"></div>
                                        <button className="add_task_button project_add_task" onClick={this.newTask}>Add task</button>
                                        <div className="spacer_3"></div>
                                    <span id="project_list_top">
                               
                                        
                                    </span>


                                    </span>
                                    {
                                        
                                        incompleteTasks.map(task => (
                                            <ProjectTaskIndexItem
                                            task={task}
                                            deleteTask={deleteTask}
                                            updateTask={updateTask}
                                            key={task.id}
                                            openModal={openModal}
                                            setTask={setTask}

                                            />
                                            ))
                                            
                                            
                                        }
                                </div>
                        </span>
                        {/* </span> */}
                    </div>  
                </span>

            </span> 
        )

    }

}

export default ProjectList