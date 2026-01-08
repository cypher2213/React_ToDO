import React from 'react'
import css from '../Task/Task.module.css'

const Task = ({taskName}) => {
  return (
    <>
    <li className={css.item_body}>
        <h3 className={css.task_title}>{taskName}</h3>
    </li>
    </>
  )
}

export default Task