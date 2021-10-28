import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload)
    },

    setCheck: (state, action) => {
      console.log('check 2')
      state.todoList = state.todoList.map( item => {
        if (action.payload === item.id) {
          item.done = !item.done
        }
        return item
      });
    },

    removeItem: (state, action) => {
      console.log('delete 2')
      state.todoList = state.todoList.filter(item => {
        return action.payload === item.id;
      });
    },

    filterBy: (state, action) => {
      state.todoList.filter(todo => {
        switch (action.payload) {
          case 'active':
            return !todo.done;
          case 'completed':
            return todo.done;
          case 'all':
            return todo;
          default:
            return 0;
        }
      });
    }
  }
});

export const { saveTodo, setCheck, filterBy, removeItem } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer
