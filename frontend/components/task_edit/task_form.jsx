import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import CommentItem from './comment_item'
import DateUpdateComponent from './date_update_component';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment
    this.handleChange = this.handleChange.bind(this);
    this.currentTask = this.props.tasksObjects.filter(task => (task.id === parseInt(this.props.currentTaskId)))[0];
}   

componentDidMount() {
    this.props.fetchComments();
    this.props.fetchUsers();
    
    
}

handleCreateComment() {
    this.props.createComment(this.state);
}

handleChange(field) {
    return (e) => {
        this.setState({ project_id: this.currentTask.project_id});
        this.setState({ [field]: e.currentTarget.value },
      )
    };
  }


  render() {

    const tasks = this.props.tasks;
    const comments = this.props.comments;
    const currentTaskId = parseInt(this.props.currentTaskId);
    const currentTaskComments = comments.filter(
      (comment) => comment.task_id === currentTaskId

    );

    const currentTask = tasks[currentTaskId];
    if (this.props.users.length === 0) {
        return null;
    } else {
    return (
      <div className="task_edit_modal">
        <h2 className="task_title">{currentTask.task_name}</h2>
        <p className="task_description">{currentTask.description}</p>
        <DateUpdateComponent currentTask={this.currentTask}/>
        <div>
          {currentTaskComments.map((comment) => {
            const userName = this.props.users.filter(
              (user) => user.id === comment.author_id
            )[0].name;
            
            return (
              <CommentItem
                comment={comment}
                key={comment.id}
                userName={userName}
              />
            );
          })}
        </div>
       
          <div className="comment_input_wrapper">

          <input className="comment_input"
            type="text"
            value={this.state.body}
            placeholder={"Ask a question or post an update..."}
            onChange={this.handleChange("body")}
          />
          <button className="comment_button"onClick={() => {this.props.createComment(this.state), this.setState({body: ""})}}>Comment</button>

          </div>
        
      </div>
    );
}
  }
}

export default TaskForm;