import axios from 'axios';

var api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

export const productsApi = {
  apiProducts: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  showDetail: (id) => api.get(`products/${id}/`),
};

export const usersApi = {
  login: (id, pw) =>
    api.post(`users/login/`, {
      id,
      pw,
    }),
  kakaoLogin: (name, email) => api.post(`/users/login/kakao/`, { name, email }),
  naverLogin: (name, email) => api.post(`/users/login/naver/`, { name, email }),
};

export const searchApi = {
  search: (searchTerm, pageNum, filterOption) => {
    return api.get(
      `products/search/?search=${searchTerm}&page=${pageNum}&filter=${filterOption}`
    );
  },
};
