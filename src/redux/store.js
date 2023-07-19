import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';
import { apiBookReducer } from './apiBook/apiBookSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,  
  },
});

export default store;
