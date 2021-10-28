import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice'

function App() {
  const todoList = useSelector(selectTodoList);

  console.log(todoList);

  return (
    <div className="app">
      <div className="app__container">
        <ul className="app__todoContainer">
          {
            todoList.map(item =>(
              <TodoItem 
                key={item.id}
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </ul>

        <Input />
      </div>
    </div>
  );
}

export default App;
