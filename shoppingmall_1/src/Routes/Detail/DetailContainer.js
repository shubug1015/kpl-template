import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DetailPresenter from './DetailPresenter';
import { connect } from 'react-redux';
import { saveProduct, deleteProduct } from 'store';
import { productsApi, usersApi } from 'api';
import ga from 'ga';

const DetailContainer = ({ logged, redux_saveProduct }) => {
  const [detailData, setDetailData] = useState({
    detail: '',
    check_favs: '',
    reviews: [],
    qnas: [],
    purchase: [],
    loading: true,
  });

  const { id: productId } = useParams();

  const history = useHistory();

  const getProductData = async () => {
    const { data: detail } = await productsApi.showDetail(productId);
    console.log(detail);
    const { data: check_favs } = await usersApi.checkfavs(detail.id);
    const {
      data: { results: reviews },
    } = await productsApi.reviews(productId);
    const {
      data: { results: qnas },
    } = await productsApi.qnas(productId);
    const {
      data: { results: purchase },
    } = logged ? await usersApi.purchasedList(1) : { data: { results: [] } };
    redux_saveProduct(detail, detail);
    setDetailData({
      detail,
      check_favs,
      reviews,
      qnas,
      purchase,
      loading: false,
    });
  };

  const getData = async () => {
    try {
      getProductData();
    } catch {
      history.push('/');
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return <DetailPresenter {...detailData} />;
};

const mapStateToProps = (state) => {
  return {
    logged: state.user.logged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    redux_saveProduct: (saveId, deleteId) => {
      dispatch(deleteProduct(deleteId));
      dispatch(saveProduct(saveId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
