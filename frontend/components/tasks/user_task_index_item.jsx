import React from 'react';
import { Link } from 'react-router-dom';

const UserTaskIndexItem = props => (

    <li className="task_index_item">
        <span className="project_index_item_left">
            <span className="project_index_divider">
                <button className="check_mark_button">
                    {
                        ((props.task.status === 'not-started') || (props.task.status === 'started')) ?

                            <svg className="check_mark checked" focusable="false" viewBox="0 0 32 32">
                                <path d="M31,16c0,8.3-6.7,15-15,15S1,24.3,1,16S7.7,1,16,1S31,7.7,31,16z" className="outer_checkmark checked"></path>
                                <path d="M13.4,22.1c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.1,3.1l8.1-8.1c0.4-0.4,1-0.4,1.4,0   s0.4,1,0,1.4l-8.9,8.9C13.9,22,13.7,22.1,13.4,22.1z" className="inner_checkmark unchecked"></path>
                            </svg>
                            :
                            <svg className="check_mark unchecked" focusable="false" viewBox="0 0 32 32">
                                <path d="M31,16c0,8.3-6.7,15-15,15S1,24.3,1,16S7.7,1,16,1S31,7.7,31,16z" className="outer_checkmark checked"></path>
                                <path d="M13.4,22.1c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.1,3.1l8.1-8.1c0.4-0.4,1-0.4,1.4,0   s0.4,1,0,1.4l-8.9,8.9C13.9,22,13.7,22.1,13.4,22.1z" className="inner_checkmark checked"></path>
                            </svg>

                    }
                </button>
            </span>
            <span className="project_index_divider">
                <button className="task_index_item_field">{props.task.status}</button>
            </span>
            <span className="project_index_divider">
                <button className="task_index_item_field">{props.task.task_name}</button>
            </span>
        </span>
        <span className="project_index_item_right">
            <button className="task_index_item_field task_due_date">{props.task.due_date}</button>
        </span>

    </li>


)

export default UserTaskIndexItem;