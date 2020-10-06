import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import CommentItem from './comment_item'

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= this.props.comment
    this.handleChange = this.handleChange.bind(this);
    const currentTask = this.props.tasksObjects.filter(task => (task.id === this.props.currentTaskId))[0];
    this.currentTask =  currentTask;
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

  componentDidUpdate() {
  }

//   componentDidUpdate() {
//       this.props.fetchComments();
//   }

  render() {
    const { tasks, comments, currentTaskId } = this.props;

    const currentTaskComments = comments.filter(
      (comment) => comment.task_id === currentTaskId
    );
    const currentTask = tasks[currentTaskId];

    return (
      <div>
        <p>{currentTask.task_name}</p>
        <p>{currentTask.description}</p>
        <p>{currentTask.due_date}</p>
        <p>{currentTask.start_date}</p>
        <div>
          {currentTaskComments.map((comment) => {
            const user = this.props.users.filter(
              (user) => user.id === comment.author_id
            )[0] || null;
            
            return (
              <CommentItem
                comment={comment}
                key={comment.id}
                userName={user.name}
              />
            );
          })}
        </div>
       
          New Comment:
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleChange("body")}
          />
          <button onClick={() => {this.props.createComment(this.state), this.setState({body: ""})}}>New Comment</button>
        
      </div>
    );
  }
}

export default TaskForm;