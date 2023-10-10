import React, { useState } from 'react'

function Search(props) {
  const [inputText,setInputText] = useState('');
  const handleEnterPress= (e)=>{
    if(e.keyCode === 13){
      props.addList(inputText);
      setInputText('');
    }
  }
  return (
    <div className='input-container'>
        <input
         type='text'
          className='input-box-todo'
           placeholder='Enter Your Tasks'
           value={inputText}

           onChange={e=>{
            setInputText(e.target.value)
           }}
           onKeyDown={handleEnterPress}></input>
        <button onClick={()=>{
          props.addList(inputText);
          setInputText('');
        }} className='add-btn'>+</button>
       
    </div>
  )
}

export default Search
