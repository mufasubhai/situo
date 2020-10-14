import React from "react";

class CommentItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment;
    }

    render() {
        const { author_id, project_id, body, created_at, updated_at} = this.props.comment;
        
        // console.log(userName)
         const date = updated_at;
        let year = date.slice(0, 4)
        let month = date.slice(5, 10)
        let time = date.slice(14, 19)

        // let time = 
        return (
            <div>
                <p>{this.props.userName}</p>
        <p>Date: {year}-{month} Time: {time}</p>
                <p>{body}</p>
                
                
            </div>
        )
    }
}


export default CommentItem;