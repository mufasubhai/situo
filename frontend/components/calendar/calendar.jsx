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

 

  render() {
    const userId = parseInt(this.props.userId);

    const userTasks = this.props.tasks.filter(
      (task) => task.owner_id === userId
    );
    const incompleteTasks = userTasks.filter(
      (task) => task.status !== "complete"
    );
    const {
      tasks,
      projectId,
      fetchTask,
      deleteTask,
      updateTask,
      createTask,
    } = this.props;

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
                className="calendar_container"
                plugins={[dayGridPlugin]} 
                initialView="dayGridMonth" />
   
              
          </div>
        </span>
      </span>
    );
  }
}

export default Calendar