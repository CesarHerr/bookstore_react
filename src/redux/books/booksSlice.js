import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  books: [],
  error: undefined,
};

const fetchBooks = createAsyncThunk('books/fetchUsers', async () => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RLFYv22wEz7EmmbbyrPK/books');
    return response.data;
  } catch (error) {
    throw error.response.message;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
export const { pending, fulfilled, rejected } = bookSlice.actions;
export { fetchBooks };