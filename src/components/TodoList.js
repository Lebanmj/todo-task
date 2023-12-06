import React from 'react';

function TodoList(props) {
  const { name, description } = props.item;

  return (
    <li className='list-item'>
      <div>
        <h4>Name: {name}</h4>
        <textarea
          className='list-textarea' // Add a class for textarea styling
          value={description}
          readOnly
        />
      </div>
      <span className='icons'>
        <i
          className="fa-regular fa-trash-can icon-delete"
          onClick={(e) => {
            props.deleteTask(props.index);
          }}
        ></i>
      </span>
    </li>
  );
}

export default TodoList;
