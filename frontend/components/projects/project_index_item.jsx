import React from 'react';
import { Link } from 'react-router-dom';



class ProjectIndexItem extends React.Component {
  constructor(props) {
    
    super(props)
  
  }


  render () {
    var arr = ['tile_card blue_card', 'tile_card purple_card', 'tile_card red_card', 'tile_card pink_card'];
    var idx = Math.floor(Math.random() * arr.length);
    const color = arr[idx]
    return ( 
      <Link to={`/tasklist/project/${this.props.project.id}`} >
      <div className="tile_container">  
      <div className="tile_structure">
        <div className={color}>
      
            <svg viewBox="-14 -14 50 50"className="multi_color_icon"   title="board" services="[object Object]">
            <path className="multi_color_icon_black" d="M5,21H1c-0.6,0-1-0.4-1-0.9v-7.2C0,12.4,0.4,12,1,12h4c0.6,0,1,0.4,1,0.9v7.2C6,20.6,5.6,21,5,21z"></path>
            <path className="multi_color_icon_white" d="M5,9H1C0.4,9,0,8.6,0,8V4c0-0.5,0.4-1,1-1h4c0.6,0,1,0.5,1,1v4C6,8.6,5.6,9,5,9z M14,3h-4C9.4,3,9,3.5,9,4v12  c0,0.5,0.4,1,1,1h4c0.6,0,1-0.5,1-1V4C15,3.5,14.6,3,14,3z M23,3h-4c-0.5,0-1,0.5-1,1v4c0,0.6,0.5,1,1,1h4c0.5,0,1-0.4,1-1V4  C24,3.5,23.5,3,23,3z"></path></svg>
              <div id="lui_87" className="icon_button" tabIndex="0" role="button" aria-disabled="false" aria-pressed="false"></div></div>
      </div>
        <div className="tile_title">{this.props.project.project_name}</div>
      </div>
    </Link >
    )
  }
}
  


export default ProjectIndexItem;