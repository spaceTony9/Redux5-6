import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectFilter } from './filterSlice';

const todosInitState = { items: [] };

const todoSlice = createSlice({
  name: 'todos',
  initialState: todosInitState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
  selectors: {
    selectTodos: state => state.items,
  },
});
export const selectFilterTodo = createSelector(
  [state => state.todos.items, selectFilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.todo.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
export const { selectTodos } = todoSlice.selectors;
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
