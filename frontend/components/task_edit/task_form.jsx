import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import CommentItem from './comment_item'
import DateUpdateComponent from './date_update_component';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment
    // console.log('task form')
    // console.log(this.state)
    // console.log(this.props)
    this.handleChange = this.handleChange.bind(this);
    this.currentTask = this.props.tasksObjects.filter(task => (task.id === parseInt(this.props.currentTaskId)))[0];
    // this.currentTask = this.props.tasks.filter(task => (task.id === this.props.currentTaskId))[0];
    // // console.log(this.currentTask);
    // console.log(parseInt(this.props.currentTaskId))
    // console.log(this.currentTask)
  
  
    // this.currentTask =  currentTask;
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

    const tasks = this.props.tasks;
    const comments = this.props.comments;
    const currentTaskId = parseInt(this.props.currentTaskId);
    console.log(this.props.users)
    // const { tasks, comments, currentTaskId } = this.props;
    // console.log(comments)

    const currentTaskComments = comments.filter(
      (comment) => comment.task_id === currentTaskId

    );

    // console.log(currentTaskComments)
    const currentTask = tasks[currentTaskId];
    if (this.props.users.length === 0) {
        return null;
    } else {
    return (
      <div>
        <p>{currentTask.task_name}</p>
        <p>{currentTask.description}</p>
        <DateUpdateComponent currentTask={this.currentTask}/>

        <p>{currentTask.due_date}</p>
        <p>{currentTask.start_date}</p>
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
}

export default TaskForm;