import axios from 'axios';
import store from 'store';

var api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

export const productsApi = {
  apiProducts: (pageNum, filterOption) =>
    api.get(`products/?page=${pageNum}&filter=${filterOption}`),
  showDetail: (id) => api.get(`products/${id}/`),

  addReview: (data, productId) =>
    api.post(`products/${productId}/reviews/`, data, {
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    }),

  deleteReview: (ReviewId, productId) =>
    api.delete(`products/${productId}/reviews/`, {
      data: { id: ReviewId },
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    }),

  reviews: (productId) => {
    return api.get(`products/${productId}/reviews/`);
  },

  addQnA: (data, productId) =>
    api.post(`products/${productId}/qnas/`, data, {
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    }),

  deleteQnA: (QnAId, productId) =>
    api.delete(`products/${productId}/qnas/`, {
      data: { id: QnAId },
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    }),

  qnas: (productId) => {
    return api.get(`products/${productId}/qnas/`);
  },
};

export const usersApi = {
  login: (id, pw) =>
    api.post(`users/login/`, {
      id,
      pw,
    }),

  kakaoLogin: (name, email) => api.post(`/users/login/kakao/`, { name, email }),

  naverLogin: (name, email) => api.post(`/users/login/naver/`, { name, email }),

  signup: (id, pw, name, email, phoneNum) =>
    api.post(`users/signup/`, {
      username: id,
      password: pw,
      name,
      email,
      phone_number: phoneNum,
    }),
  checkId: (id) => api.get(`users/signup/check_id/`, { params: { id } }),

  checkName: (name) =>
    api.get(`users/signup/check_name/`, { params: { name } }),

  user: () =>
    api.get(`users/me/`, {
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    }),

  editProfile: (name, email, phone_number) =>
    api.put(
      `users/me/`,
      { name, email, phone_number },
      {
        headers: {
          Authorization: store.getState()?.user.token,
          'Content-Type': 'application/json',
        },
      }
    ),

  addToCart: (item) =>
    api.post(
      `users/me/basket/`,
      { item },
      {
        headers: {
          Authorization: store.getState()?.user.token,
          'Content-Type': 'application/json',
        },
      }
    ),

  deleteCart: (item) =>
    api.delete(`users/me/basket/`, {
      data: { item: item },
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    }),

  cart: () => {
    return api.get(`users/me/basket/`, {
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    });
  },

  favs: (pageNum) =>
    api.get(`users/me/favs/?page=${pageNum}`, {
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    }),

  checkfavs: (id) =>
    api.get(`users/me/check_favs/`, {
      params: { id: id },
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    }),

  addFavs: (id) =>
    api.post(
      `users/me/favs/`,
      { id },
      {
        headers: {
          Authorization: store.getState()?.user.token,
          'Content-Type': 'application/json',
        },
      }
    ),

  deleteFavs: (id) =>
    api.delete(`users/me/favs/`, {
      data: { id: id },
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    }),

  purchase: (items, receiverData) =>
    api.post(
      `users/me/purchase/`,
      { items, receiverData },
      {
        headers: {
          Authorization: store.getState()?.user.token,
          'Content-Type': 'application/json',
        },
      }
    ),

  purchasedList: (pageNum) => {
    return api.get(`users/me/purchase/?page=${pageNum}`, {
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    });
  },

  exchange: (purchasedId) => {
    return api.put(
      'users/me/exchange/',
      { purchasedId },
      {
        headers: {
          Authorization: store.getState()?.user.token,
          'Content-Type': 'application/json',
        },
      }
    );
  },

  exchangedList: (pageNum) => {
    return api.get(`users/me/exchange/?page=${pageNum}`, {
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    });
  },

  refund: (purchasedId) => {
    return api.put(
      'users/me/refund/',
      { purchasedId },
      {
        headers: {
          Authorization: store.getState()?.user.token,
          'Content-Type': 'application/json',
        },
      }
    );
  },

  refundedList: (pageNum) => {
    return api.get(`users/me/refund/?page=${pageNum}`, {
      headers: {
        Authorization: store.getState()?.user.token,
        'Content-Type': 'application/json',
      },
    });
  },
};

export const searchApi = {
  search: (searchTerm, pageNum, filterOption) => {
    return api.get(
      `products/search/?search=${searchTerm}&page=${pageNum}&filter=${filterOption}`
    );
  },
};
