import { configureStore } from '@reduxjs/toolkit';
import  bookReducer from './books/booksSlice.js';
import categoriesReducer from './categories/categoriesSlice.js'

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
