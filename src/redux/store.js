import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';
import formReducer from './form/formSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  form: formReducer,
});

const store = configureStore(
  {
    reducer: rootReducer,
  },
  composeWithDevTools(),
);

export default store;
