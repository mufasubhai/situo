import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.task
    this.updateStatus = this.updateStatus.bind(this)
    this.updateStatusField = this.updateStatusField.bind(this)
  }


  update(field) {
    return (e) => { this.setState({ [field]: e.currentTarget.value }, () => { this.props.updateTask(this.state); }) }
  }

  updateStatus() {

    (this.state.status === 'not-started') ? this.setState({ status: 'started' }, () => this.props.updateTask(this.state)) :
      (this.state.status === 'started') ? this.setState({ status: 'complete' }, () => this.props.updateTask(this.state)) : this.setState({ status: 'not-started' }, () => this.props.updateTask(this.state))
  }

  updateStatusField() {
    this.updateStatus();
  }
  render () {

    return (
    <li className="task_index_item">

        
    
        <button className="check_mark_button col_1" onClick={this.updateStatusField}>

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

        <p className="task_index col_2">{this.props.task.task_name}</p>
        <p className="task_index col_3">{this.props.task.status}</p>
        <p className="task_index col_4">{this.props.task.due_date}</p>
        

    </li>
 
    )
  }
          
 
}

export default TaskIndexItem;