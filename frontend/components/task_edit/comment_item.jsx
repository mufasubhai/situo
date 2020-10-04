import React from "react";

class CommentItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment;
    }

    render() {
        const { author_id, project_id, body, created_at, updated_at} = this.props.comment;
        return (
            <div>
                <p>{author_id}</p>
                <p>{body}</p>
            </div>
        )
    }
}


export default CommentItem;