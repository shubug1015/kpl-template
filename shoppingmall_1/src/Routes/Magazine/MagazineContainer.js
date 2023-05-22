import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MagazinePresenter from './MagazinePresenter';
// import { productsApi } from 'api';
import { connect } from 'react-redux';

const MagazineContainer = ({ page, filter }) => {
  const [magazineData, setMagazineData] = useState({
    items: null,
    loading: true,
  });

  const location = useLocation();
  const history = useHistory();

  const getItems = async (page, filter) => {
    // const {
    //   data: { count: itemNum, results: items },
    // } = await productsApi.apiProducts(page, filter);
    setMagazineData({
      items: [
        { id: 0, main_image: 'lookbook_1.jpg', name: '2020 S/S' },
        { id: 1, main_image: 'lookbook_2.jpg', name: '2020 S/S' },
        { id: 2, main_image: 'lookbook_3.jpg', name: '2020 S/S' },
        { id: 3, main_image: 'lookbook_4.jpg', name: '2019 S/S' },
        { id: 4, main_image: 'lookbook_5.jpg', name: '2019 S/S' },
        { id: 5, main_image: 'lookbook_6.jpg', name: '2019 S/S' },
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

  return <MagazinePresenter {...magazineData} />;
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, null)(MagazineContainer);
