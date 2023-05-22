import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ShopPresenter from './ShopPresenter';
import { productsApi } from 'api';
import store from 'store';

const ShopContainer = () => {
  const [shopData, setShopData] = useState({
    items: null,
    itemNum: null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const getItems = async (pageNum, filterOption) => {
    var {
      data: { count: itemNum, results: item },
    } = await productsApi.apiProducts(pageNum, filterOption);
    if (shopData.items !== item) {
      setShopData({
        items: item,
        itemNum: itemNum,
      });
    }
  };

  const getData = (pageNum, filterOption) => {
    try {
      getItems(pageNum, filterOption);
    } catch {
      setError('Error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const pageNum = store.getState().page;
    const filterOption = store.getState().filter;
    getData(pageNum, filterOption);
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <ShopPresenter {...shopData} error={error} loading={loading} />;
};

export default ShopContainer;
