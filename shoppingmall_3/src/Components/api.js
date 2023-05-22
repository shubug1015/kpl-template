import axios from 'axios';

var api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

export const productsApi = {
  apiProducts: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiClothes: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiAccesories: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiOutside: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiHarnesses: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiLeaders: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiAutoLeaders: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiCarriers: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiEnvelopes: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiHouse: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiHomes: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiCushion: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiFences: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiLife: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiStares: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiToilets: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiDiapers: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiBathes: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiBrushes: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiDishes: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiWaterPots: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiToy: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiToys: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiNoseWorks: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiTrainings: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiFood: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiFoods: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiSnacks: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiHealth: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiHealthFood: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiDental: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  apiSupplements: (pageNum, filterOption) =>
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
