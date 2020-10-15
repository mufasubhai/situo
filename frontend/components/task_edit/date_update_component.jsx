import React from "react";
import { connect } from 'react-redux'
import {updateTask} from '../../actions/task_actions'


const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
    updateTask: (task) => dispatch(updateTask(task))
})


class DateUpdateComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.currentTask;
    }


    update(field) {
        return (e) => {this.setState({[field]: e.currentTarget.value}, () => {this.props.updateTask(this.state)})}
    }
    
    render() {
      
        return (
            
            <div className="calendar_item calendar_item_2">
                <div>
                        <span className="task_index col_3 index_border_1">
                            Started:
                        </span>
                            <input className="cal" type="date" value={this.state.start_date} onChange={this.update('start_date')} />                    

                </div>
                <div>

                        <span className="task_index col_3 index_border_1 last_date">
                            Due Date:
                        </span>
                            <input className="cal" type="date" value={this.state.due_date} onChange={this.update('due_date')} />                    
                </div>
                                           
            </div>
        )
    }
}


export default connect(mSTP, mDTP)(DateUpdateComponent)