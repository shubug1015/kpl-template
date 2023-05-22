import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import ShopPresenter from './ShopPresenter';
import { productsApi } from 'api';
import { connect } from 'react-redux';

const ShopContainer = ({ page, filter }) => {
  const [shopData, setShopData] = useState({
    items: null,
    itemNum: null,
    loading: true,
  });

  const location = useLocation();
  const history = useHistory();

  const getItems = async (page, filter) => {
    const {
      data: { count: itemNum, results: items },
    } = await productsApi.apiProducts(page, filter);
    setShopData({
      items,
      itemNum,
      loading: false,
    });
  };

  const getData = (page, filter) => {
    try {
      getItems(page, filter);
    } catch {
      history.push('/');
    }
  };

  useEffect(() => {
    getData(page, filter);
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <ShopPresenter {...shopData} />;
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, null)(ShopContainer);
