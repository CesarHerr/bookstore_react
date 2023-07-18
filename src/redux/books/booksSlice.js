import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.books.push(action.payload);
    },
    remove: (state, action) => {
      state.books.splice(action.payload, 1);
    },
  },
});

export default bookSlice.reducer;
export const { add, remove } = bookSlice.actions;
