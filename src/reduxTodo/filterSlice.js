import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
  },
  selectors: { selectFilter: state => state },
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
export const { selectFilter } = filterSlice.selectors;
