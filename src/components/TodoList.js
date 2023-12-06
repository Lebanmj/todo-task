import React from 'react'

function TodoList(props) {
  return (
   <li className='list-item'>
    {props.item}
    <span className='icons'><i className="fa-regular fa-trash-can icon-delete"
    onClick={e=>{
        props.deleteTask(props.index)
    }}></i></span>
    </li>
   
  )
}

export default TodoList