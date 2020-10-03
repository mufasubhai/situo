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
  }


  render() {
            console.log(this.props);

    const userId = parseInt(this.props.id);

    
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
    
    console.log(activeTasks)

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
            />
          </div>
        </span>
      </span>
    );
  }
}

export default Calendar