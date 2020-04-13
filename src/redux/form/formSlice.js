import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    RESET_FORM: state => ({
      ...state,
      name: '',
      number: '',
    }),

    CHANGE_INPUT: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
});

export const {
  RESET_FORM: resetForm,
  CHANGE_INPUT: changeInput,
} = formSlice.actions;

export default formSlice.reducer;
