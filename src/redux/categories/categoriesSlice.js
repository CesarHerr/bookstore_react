import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.status = 'Under Construction';
    },
  },
});

export default categoriesSlice.reducer;
export const { selectCategories } = categoriesSlice.actions;
