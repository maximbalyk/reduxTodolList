import React, { useState } from 'react'
import './Input.css'

import {useDispatch} from 'react-redux'
import {saveTodo, filterBy} from '../features/todoSlice'


const Input = () => {
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now(),
    }))
  }

  const handelSelectChange = (event) => {
    setFilter(event.target.value);

    dispatch(filterBy(event.target.value))
  };

  return (
    <>
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={ e => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
    <select
      value={filter}
      onChange={(event => 
        handelSelectChange(event)
      )}
    >
      <option value="default">default</option>
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
    </>
    
  )
}


export default Input
