import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class TaskForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        const {comments, currentTaskId } = this.props;
        console.log(comments);
        console.log(currentTaskId);
        
        return (
            <div> THIS IS THE TASK EDIT FORM</div>
        )
    }
}

export default TaskForm;