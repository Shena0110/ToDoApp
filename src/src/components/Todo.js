import React from 'react'

const Todo = ({todo, onDelete}) => {
  

  return (
    <div className='todo'>
        <h3>{todo.text}</h3>
        <h3>{todo.date}</h3>
        <h3>{todo.details}</h3>
        <button className='btn-sm' onClick={()=> onDelete(todo.id)}>Clear</button>
        </div>
      )
}

export default Todo