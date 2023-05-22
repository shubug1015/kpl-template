import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutPresenter from './AboutPresenter';
import { productsApi } from 'api';
import store from 'store';

const AboutContainer = () => {
  const [aboutData, setAboutData] = useState({
    items: null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const getItems = async (pageNum, filterOption) => {
    var {
      data: { results: item },
    } = await productsApi.apiProducts(pageNum, filterOption);
    if (aboutData.items !== item) {
      setAboutData({
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

  return <AboutPresenter {...aboutData} error={error} loading={loading} />;
};

export default AboutContainer;
