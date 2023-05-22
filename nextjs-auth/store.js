import { combineReducers } from 'redux';
import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const user = createSlice({
  name: 'loginReducer',
  initialState: { token: null, logged: false },
  reducers: {
    login: (_, action) => ({
      token: action.payload.token,
      logged: action.payload.logged,
    }),
  },
});

const reducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      return combineReducers({ user: user.reducer })(state, action);
  }
};

const makeStore = () =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware(),
  });

export const wrapper = createWrapper(makeStore);

export const { login } = user.actions;
