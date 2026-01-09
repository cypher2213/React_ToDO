import React from 'react'
import css from '../Task/Task.module.css'

const Task = ({taskName, isCompleted, taskDone}) => {
  return (
    <>
    <li className={css.item_body}>
        <h3 className={css.task_title}>{taskName}</h3>
        <p className={css.task_completed}>Status: {isCompleted ? 'Completed' : 'In progress'}</p>
        <button onClick={taskDone} type='button'>{isCompleted ? 'Undo' : 'Done'}</button>
    </li>
    </>
  )
}

export default Task