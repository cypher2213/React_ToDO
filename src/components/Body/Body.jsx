import React from 'react'
import css from '../Body/Body.module.css'
import Task from '../Task/Task'

const Body = () => {
  return (
    <div className={css.body_section}>
        <ul className={css.body_ul}>
            <Task taskName="Task1 Static Mock" taskDescr="Task1 Static Mock Description" taskStatus="Status:Done" />
            <Task taskName="Task2 Static Mock" taskDescr="Task2 Static Mock Description" taskStatus="Status:Not Done" />
            <Task taskName="Task3 Static Mock" taskDescr="Task3 Static Mock Description" taskStatus="Status:Done" />
        </ul>
    </div>
  )
}

export default Body