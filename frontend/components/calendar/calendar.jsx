import React from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import SideNavContainer from "../side_nav/side_nav_container";
import TopNavContainer from "../top_nav/top_nav_container";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.fetchTasks()
      this.props.fetchComments()
      this.props.fetchUsers()
  }


  render() {
            
    const setTask = this.props.setTask
    const openModal = this.props.openModal
    const userId = parseInt(this.props.id);
    const comment = this.props.comment

    
    let activeTasks;

    if (this.props.match.params.projectId) {
        const projectTasks = this.props.tasks.filter(
            (task) => task.project_id === parseInt(this.props.match.params.projectId)
            )
        activeTasks = projectTasks;
    } else {
        const userTasks = this.props.tasks.filter(
            (task) => task.owner_id === userId
        )
        activeTasks = userTasks
    }
    


    const events = [];
    const incompleteTasks = activeTasks.filter(
      (task) => task.status !== "complete"
    );
    
    incompleteTasks.forEach(task => {
        const details = {
            id: task.id,
            start: task.start_date,
            end: task.due_date,
            title: task.task_name
        };

        events.push(details)
    })





    // const {
    //   tasks,
    //   projectId,
    //   fetchTask,
    //   deleteTask,
    //   updateTask,
    //   createTask,
    // } = this.props;

    return (
      <span className="situo_full_page">
        <div className="left_page_content">
          <SideNavContainer />
        </div>

        <span className="right_page_content" id="right_page_content">
          <TopNavContainer />
          <span className="separator"></span>
          <div className="main_content">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
              eventClick={
                function(e) {
                  e.jsEvent.preventDefault();
                  const currentTaskId = (e.event._def.publicId)
                  setTask(currentTaskId);
                  openModal('edit_task');
                }
                
              }
   
    
            />
          </div>
        </span>
      </span>
    );
  }
}

export default Calendar

//  currentTaskId: state.entities.currentTask.id,
//   comments: Object.values(state.entities.comments),
//   users: Object.values(state.entities.users),
//   tasks: state.entities.tasks,
//   tasksObjects: Object.values(state.entities.tasks),
//   userId: state.session.id,
//   comment: {
//     body: "",
//     task_id: state.entities.currentTask.id,
//     author_id: state.session.id
//   },