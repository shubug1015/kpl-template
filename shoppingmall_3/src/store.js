import { combineReducers } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const LOGIN_INFO = 'LoginInfo';

const loadedLogin =
  sessionStorage.getItem(LOGIN_INFO) || localStorage.getItem(LOGIN_INFO);
const parsedLogin = JSON.parse(loadedLogin)
  ? JSON.parse(loadedLogin)
  : { token: '', user_pk: '', logged: false };

const location = createSlice({
  name: 'locationReducer',
  initialState: [{ location: '/' }],
  reducers: {
    saveLocation: (state, action) => {
      state.push({ location: action.payload });
    },
  },
});

const login = createSlice({
  name: 'loginReducer',
  initialState: parsedLogin,
  reducers: {
    loginData: (_, action) => ({
      token: action.payload.token,
      user_pk: action.payload.user_pk,
      logged: action.payload.logged,
    }),
  },
});

const product = createSlice({
  name: 'productReducer',
  initialState: [],
  reducers: {
    saveProduct: (state, action) => [action.payload, ...state],
    deleteProduct: (state, action) =>
      state.filter((product) => product.id !== action.payload.id),
  },
});

const page = createSlice({
  name: 'pageBarReducer',
  initialState: 1,
  reducers: {
    pageNum: (_, action) => parseInt(action.payload),
  },
});

const filter = createSlice({
  name: 'filterReducer',
  initialState: 'new',
  reducers: {
    filterOption: (_, action) => action.payload,
  },
});

const search = createSlice({
  name: 'searchReducer',
  initialState: '',
  reducers: {
    searchTerm: (_, action) => action.payload,
  },
});

const reducer = combineReducers({
  location: location.reducer,
  login: login.reducer,
  product: product.reducer,
  page: page.reducer,
  filter: filter.reducer,
  search: search.reducer,
});

const store = configureStore({ reducer });

export const { saveLocation } = location.actions;
export const { loginData } = login.actions;
export const { saveProduct, deleteProduct } = product.actions;
export const { pageNum } = page.actions;
export const { filterOption } = filter.actions;
export const { searchTerm } = search.actions;

export default store;
