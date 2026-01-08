import React, { useState } from 'react'
import css from '../CreateTaskBar/CreateTaskBar.module.css'

const CreateTaskBar = ({addTask}) => {
    const [value,setValue] = useState("")

    const handleAddition = ()=>{
        addTask(value)
        setValue("")
    }

  return (
    <>
    <div className={css.taskBar_section}>
    <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" required placeholder='Enter your task' />
    <button onClick={handleAddition} type='button'>Add Task</button>
    </div>
    </>
  )
}

export default CreateTaskBar