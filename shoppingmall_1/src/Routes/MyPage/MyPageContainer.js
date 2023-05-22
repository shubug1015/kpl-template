import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MyPagePresenter from './MyPagePresenter';
import { usersApi } from 'api';

const MyPageContainer = () => {
  const initialSection = useLocation().state.init;
  // props.location.state !== undefined ? props.location.state.init : 0;

  const [myPageData, setMyPageData] = useState({
    user: null,
    cart: null,
    fav: null,
    purchase: null,
    exchange: null,
    refund: null,
    loading: true,
  });
  const history = useHistory();

  const getData = async () => {
    try {
      const { data: user } = await usersApi.user();
      const {
        data: { results: cart },
      } = await usersApi.cart();
      const {
        data: { results: fav },
      } = await usersApi.favs(1);
      const {
        data: { results: purchase },
      } = await usersApi.purchasedList(1);
      const {
        data: { results: exchange },
      } = await usersApi.exchangedList(1);
      const {
        data: { results: refund },
      } = await usersApi.refundedList(1);
      setMyPageData({
        user,
        cart,
        fav,
        purchase,
        exchange,
        refund,
        loading: false,
      });
    } catch {
      history.push('/');
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MyPagePresenter {...myPageData} initialSection={initialSection} />;
};

export default MyPageContainer;
