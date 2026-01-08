import React from 'react'
import css from '../Task/Task.module.css'

const Task = ({taskName,taskDescr,taskStatus}) => {
  return (
    <>
    <li className={css.item_body}>
        <h3 className={css.task_title}>{taskName}</h3>
        <p className={css.task_descr}>{taskDescr}</p>
        <p className={css.task_status}>{taskStatus}</p>
    </li>
    </>
  )
}

export default Task