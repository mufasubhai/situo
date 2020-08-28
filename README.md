![situo](https://github.com/mufasubhai/situo/blob/master/app/assets/images/situologo2.png?raw=true "logo")

Situo is a clone of the popular team project management and productivity suite, Asana. Users can add projects, add tasks. Update projects and tasks and mark tasks as complete. Other features are in development!
[Live Site](https://situo.herokuapp.com/)


## Technologies
* React/Redux
* Ruby on Rails
* PostgreSQL
* Javascript
* JQuery (ajax)
* Heroku
* CSS
* Webpack

[Design Docs](https://github.com/mufasubhai/situo/wiki)

## Task Completion 
![Task Gif](https://github.com/mufasubhai/situo/blob/master/app/assets/images/taskgif.gif?raw=true "task-completion")


## Task Update Functionality

Tasks update and disappear from relevant pages on click through a combination of filtering, status updating and style changes. These changes are set up on component pages. 
```javascript
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
              </svg>
              : ((this.props.task.status === 'started')) ?
                <svg className="check_mark_small started" focusable="false" viewBox="0 0 32 32">
                </svg>
                :
                <svg className="check_mark_small complete" focusable="false" viewBox="0 0 32 32">
                </svg>

          }
        </button>
```

```javascript
class TaskIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchTasks(); 
    }
    render() {   
        const userTasks = this.props.tasks.filter(task => (task.owner_id === this.props.id ));
        const incompleteTasks = userTasks.filter(task => (task.status !== 'complete'));
        const { tasks, deleteTask, updateTask} = this.props;
        return ( 
                <ul className='home_task_list'>
                    {
                        incompleteTasks.map(task => (
                            <TaskIndexItem
                            task={task}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                            key={task.id}
                            />
                            ))                    
                        }
                </ul>
        )
    }
}
export default TaskIndex;   
```
## Project Creation & Modal Updating
Project creation and modal updating, with style!
![Project Gif](https://github.com/mufasubhai/situo/blob/master/app/assets/images/projectgif.gif?raw=true "project gif")


## Shuffle Color!

Never look at the same page twice. Home icons shuffle colors to create a fun interface!
```javascript
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
      
            <svg viewBox="-14 -14 50 50"className="multi_color_icon"   title="board" services="[object Object]"></svg>
              <div id="lui_87" className="icon_button" tabIndex="0" role="button" aria-disabled="false" aria-pressed="false"></div></div>
      </div>
        <div className="tile_title">{this.props.project.project_name}</div>
      </div>
    </Link >
    )
  }
}
  


export default ProjectIndexItem;
```


## Roadmap
* Task creation modal with task assignment & task comments.
* Calendar for tasks and project lists.
* User profile photos and update modal
* Drag & Drop task list