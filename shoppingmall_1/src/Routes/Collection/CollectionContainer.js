import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import CollectionPresenter from './CollectionPresenter';
import { productsApi } from 'api';
import { connect } from 'react-redux';

const CollectionContainer = ({ page, filter }) => {
  const [collectionData, setCollectionData] = useState({
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
    setCollectionData({
      items,
      itemNum,
      loading: false,
    });
  };

  const getData = (page, filter) => {
    try {
      getItems(page, filter);
    } catch {
      history.pushState('/');
    }
  };

  useEffect(() => {
    getData(page, filter);
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <CollectionPresenter {...collectionData} />;
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, null)(CollectionContainer);
