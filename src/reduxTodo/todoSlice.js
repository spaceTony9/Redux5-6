import { createSlice } from '@reduxjs/toolkit';

const todosInitState = { items: [] };

const todoSlice = createSlice({
  name: 'todos', initialState: todosInitState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  }, selectors: { selectTodos: state => state.items },
});

export const { selectTodos } = todoSlice.selectors;
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;