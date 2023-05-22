import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LookBookPresenter from './LookBookPresenter';
import { productsApi } from 'api';
import store from 'store';

const LookBookContainer = () => {
  const [lookBookData, setLookBookData] = useState({
    items: null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const getItems = async (pageNum, filterOption) => {
    var {
      data: { results: item },
    } = await productsApi.apiProducts(pageNum, filterOption);
    if (lookBookData.items !== item) {
      setLookBookData({
        items: item,
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

  return (
    <LookBookPresenter {...lookBookData} error={error} loading={loading} />
  );
};

export default LookBookContainer;
