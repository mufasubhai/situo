import React from 'react';
import { Link } from 'react-router-dom';

class ProjectList extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
    }

    render () {
        return (
        <div>{this.props.match.params.projectId}</div>
        )

    }

}

export default ProjectList