import React, { useEffect, useState } from 'react'
import css from '../Body/Body.module.css'
import Task from '../Task/Task'
import CreateTaskBar from '../CreateTaskBar/CreateTaskBar'

const Body = () => {
  const [tasks, setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem('task')
    if(savedTasks !=null){
        return JSON.parse(savedTasks)
    }
    return []
  })

  const taskAdd = (text)=>{
    setTasks(prev =>[...prev,{
      id: Date.now(),
      text,
      completed:false
    }])
  }

  useEffect(()=>{
    localStorage.setItem('task', JSON.stringify(tasks),[tasks])    
  })
  return (
    <div className={css.body_section}>
        <ul className={css.body_ul}>
            <CreateTaskBar addTask={taskAdd}/>
           {tasks.map(task=>(
            <Task key={task.id} taskName={task.text} isCompleted={task.completed}/>
           ))}
        </ul>
    </div>
  )
}

export default Body