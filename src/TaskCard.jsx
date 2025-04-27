import React from 'react'


function TaskCard(props) {
  return (
    <div  className=' border-gray-600 border-4 mb-4 p-3'>
      <h2 className='text-xl font-bold text-gray-700'>{props.title}</h2>
      <p>{props.dueDate?`Due on:${props.dueDate}`:`Completed on:${props.completedAtDate}`}</p>
      <p>Assignee:{props.assigneeName}</p>
    </div>
  )
}

export default TaskCard
