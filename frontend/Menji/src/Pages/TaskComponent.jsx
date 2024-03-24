import React from 'react'
import "./Dash_style.css";
const TaskComponent = ({tasks}) => {
  return (
    <div>
        {tasks.map( (task) => (
            <div className='task' key={task.id}>{task.sambhavam}</div>

        ))}
    </div>
  )
}

export default TaskComponent
