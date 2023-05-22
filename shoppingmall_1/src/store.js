import { combineReducers } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { getQueryStringObject as qs } from 'getQueryStringObject';

const LOGIN_INFO = 'Login_Info';

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

const user = createSlice({
  name: 'loginReducer',
  initialState: parsedLogin,
  reducers: {
    userData: (_, action) => ({
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
  initialState: qs().page,
  reducers: {
    pageNum: (_, action) => parseInt(action.payload),
  },
});

const filter = createSlice({
  name: 'filterReducer',
  initialState: qs().filter,
  reducers: {
    filterOption: (_, action) => action.payload,
  },
});

const search = createSlice({
  name: 'searchReducer',
  initialState: qs().search,
  reducers: {
    searchTerm: (_, action) => action.payload,
  },
});

const reducer = combineReducers({
  location: location.reducer,
  user: user.reducer,
  product: product.reducer,
  page: page.reducer,
  filter: filter.reducer,
  search: search.reducer,
});

const store = configureStore({ reducer });

export const { saveLocation } = location.actions;
export const { userData } = user.actions;
export const { saveProduct, deleteProduct } = product.actions;
export const { pageNum } = page.actions;
export const { filterOption } = filter.actions;
export const { searchTerm } = search.actions;

export default store;
