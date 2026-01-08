import React, { useState } from 'react'
import css from '../Body/Body.module.css'
import Task from '../Task/Task'
import CreateTaskBar from '../CreateTaskBar/CreateTaskBar'

const Body = () => {
  const [tasks, setTasks] = useState([])

  const taskAdd = (text)=>{
    setTasks(prev =>[...prev,{
      id: Date.now(),
      text,
      completed:false
    }])
  }

  return (
    <div className={css.body_section}>
        <ul className={css.body_ul}>
            <CreateTaskBar addTask={taskAdd}/>
           {tasks.map(task=>(
            <Task key={task.id} taskName={task.text}/>
           ))}
        </ul>
    </div>
  )
}

export default Body