import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksList: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.booksList.push(action.payload);
    },
    remove: (state, action) => {
      state.booksList.splice(action.payload, 1);
    },
  },
});

export default bookSlice.reducer;
export const { add, remove } = bookSlice.actions;
