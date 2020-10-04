import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import CommentItem from './comment_item'

class TaskForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        const {tasks, comments, currentTaskId } = this.props;
        // console.log(comments);
        // console.log(currentTaskId);
        // console.log(currentTask);
        const currentTaskComments = comments.filter(comment => (comment.task_id === currentTaskId))
        const currentTask = tasks[currentTaskId];

        console.log(currentTaskComments)
        return (
            <div>
                <p>{currentTask.task_name}</p>
                <p>{currentTask.description}</p>
                <p>{currentTask.due_date}</p>
                <p>{currentTask.start_date}</p>
                <div> 
                    {
                        currentTaskComments.map(comment => (
                            <CommentItem 
                                comment={comment}
                            />
                        ))
                    }
                </div>
              
            </div>
        )
    }
}

export default TaskForm;