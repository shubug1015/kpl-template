import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import LookBookPresenter from './LookBookPresenter';
// import { productsApi } from 'api';
import { connect } from 'react-redux';

const LookBookContainer = ({ page, filter }) => {
  const [lookBookData, setLookBookData] = useState({
    items: null,
    loading: true,
  });

  const location = useLocation();
  const history = useHistory();

  const getItems = async (page, filter) => {
    // const {
    //   data: { count: itemNum, results: items },
    // } = await productsApi.apiProducts(page, filter);
    setLookBookData({
      items: [
        { id: 0, main_image: 'lookbook_1.jpg' },
        { id: 1, main_image: 'lookbook_2.jpg' },
        { id: 2, main_image: 'lookbook_3.jpg' },
        { id: 3, main_image: 'lookbook_4.jpg' },
        { id: 4, main_image: 'lookbook_5.jpg' },
        { id: 5, main_image: 'lookbook_6.jpg' },
      ],
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

  return <LookBookPresenter {...lookBookData} />;
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, null)(LookBookContainer);
