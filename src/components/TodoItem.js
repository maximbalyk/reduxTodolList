import React from 'react'
import './TodoItem.css'

import Checkbox from '@material-ui/core/Checkbox';

import { useDispatch } from 'react-redux';
import { setCheck, removeItem } from '../features/todoSlice'

function TodoItem({ name, done, id }) {
  const dispatch = useDispatch();

  const handleCheck = () => {
    console.log('check 1');
    dispatch(setCheck(id))
  };

  const deleteTodo = () => {
    console.log('delete 1');
    dispatch(removeItem(id))
  };

  return (
    <li className='todoItem'>

      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />

      <p className={done ? 'todoItem--done' : 'todoItem'}>{name}</p>
      <button onClick={deleteTodo}>X</button>
    </li>
  )
}

export default TodoItem
