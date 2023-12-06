// App.js
import React, { useState } from 'react';
import Search from './components/search'; 
import TodoList from './components/TodoList';


function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (task) => {
    if (task.name !== '' && task.description !== '') {
      setListTodo([...listTodo, task]);
    }
  };

  const deleteTask = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className='main-container'>
      <div className='center-container'>
        <Search addList={addList} />
        <h1 className='app-heading'>My TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => (
          <TodoList key={i} item={listItem} deleteTask={deleteTask} index={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
