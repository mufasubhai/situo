import React from 'react';
import { Link } from 'react-router-dom';

class ProjectTaskIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.task;
        this.updateStatus = this.updateStatus.bind(this)
        this.updateStatusField = this.updateStatusField.bind(this)
        this.openEdit = this.openEdit.bind(this)
    }

    update(field) {
        return (e) => {this.setState({[field]: e.currentTarget.value}, () => {this.props.updateTask(this.state)})}
    }

    updateStatus() {
        (this.state.status === 'not-started') ? this.setState({ status: 'started' }, () => this.props.updateTask(this.state)) :
            (this.state.status === 'started') ? this.setState({ status: 'complete' }, () => this.props.updateTask(this.state)) : this.setState({ status: 'not-started' }, () => this.props.updateTask(this.state))
    }



    updateStatusField() {
        this.updateStatus();
    }

    openEdit(key) {
        // this.props.openModal('edit_task');
        this.props.setTask(key)
    }
    render () {

    return (
                <li className="task_index_item ">
                    <span className="project_index_item_left">
                        <span className="project_index_divider">
                    <button className="check_mark_button" onClick={this.updateStatusField}>
                        {
                            ((this.props.task.status === 'not-started')) ?
                                <svg className="check_mark_small not-started" focusable="false" viewBox="0 0 32 32">
                                    <path d="M31,16c0,8.3-6.7,15-15,15S1,24.3,1,16S7.7,1,16,1S31,7.7,31,16z" className="outer_checkmark_small not-started"></path>
                                    <path d="M13.4,22.1c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.1,3.1l8.1-8.1c0.4-0.4,1-0.4,1.4,0   s0.4,1,0,1.4l-8.9,8.9C13.9,22,13.7,22.1,13.4,22.1z" className="inner_checkmark_small unchecked"></path>
                                </svg>
                                : ((this.props.task.status === 'started')) ?
                                    <svg className="check_mark_small started" focusable="false" viewBox="0 0 32 32">
                                        <path d="M31,16c0,8.3-6.7,15-15,15S1,24.3,1,16S7.7,1,16,1S31,7.7,31,16z" className="outer_checkmark_small started"></path>
                                        <path d="M13.4,22.1c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.1,3.1l8.1-8.1c0.4-0.4,1-0.4,1.4,0   s0.4,1,0,1.4l-8.9,8.9C13.9,22,13.7,22.1,13.4,22.1z" className="inner_checkmark_small checked"></path>
                                    </svg>
                                    :
                                    <svg className="check_mark_small complete" focusable="false" viewBox="0 0 32 32">
                                        <path d="M31,16c0,8.3-6.7,15-15,15S1,24.3,1,16S7.7,1,16,1S31,7.7,31,16z" className="outer_checkmark_small complete"></path>
                                        <path d="M13.4,22.1c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.1,3.1l8.1-8.1c0.4-0.4,1-0.4,1.4,0   s0.4,1,0,1.4l-8.9,8.9C13.9,22,13.7,22.1,13.4,22.1z" className="inner_checkmark_small checked"></path>
                                    </svg>

                        }
                            </button>

                        </span>
                            <span className="project_index_divider">
                            </span>
                            <span className="text_input project_input">
                                <input type="text" className="task_index_item_field" value={this.state.task_name} onChange={this.update('task_name')} />
                            </span>
                        </span>
                                <p className="task_index col_4 index_border_1">{this.state.status}</p>
                        <span className="task_index col_3 index_border_1">
                            Start:
                            <input className="cal" type="date" value={this.state.start_date} onChange={this.update('start_date')} />                    
                        </span>
                        <span className="task_index col_3 index_border_1">
                            Due:
                            <input className="cal" type="date" value={this.state.due_date} onChange={this.update('due_date')} />                    
                                           
                        </span>
                        <button className="delete_button2" onClick={() => this.props.deleteTask(this.state.id)}>Delete</button>
                        <div className="delete_button2" onClick={
                                () => this.openEdit(this.state.id)} >Edit</div>
            </li>
        )

    }

}

export default ProjectTaskIndexItem;