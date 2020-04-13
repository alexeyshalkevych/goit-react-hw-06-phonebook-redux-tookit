import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    CHANGE_FILTER: (state, { payload }) => payload,
  },
});

export const { CHANGE_FILTER: changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
