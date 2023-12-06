import React, { useState } from 'react';

function Search(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList({ name, description });
      setName('');
      setDescription('');
    }
  };

  return (
    <div className='input-container'>
      <input
        type='text'
        className='input-box-todo'
        placeholder='Enter Task Name'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type='text'
        className='input-box-todo'
        placeholder='Enter Task Description'
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.addList({ name, description });
          setName('');
          setDescription('');
        }}
        className='add-btn'
      >
        +
      </button>
    </div>
  );
}

export default Search;
