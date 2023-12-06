import React, { useState } from 'react'
// import { Container } from 'react-bootstrap'
import './App.css'
import Search from './components/search'
import TodoList from './components/TodoList';
import Date from './components/Date';
import DateDisplay from './components/Date';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = ({ name, description }) => {
    if (name !== '' && description !== '') {
      setListTodo([...listTodo, { name, description }]);
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
        {/* ... (other components) */}
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

export default App