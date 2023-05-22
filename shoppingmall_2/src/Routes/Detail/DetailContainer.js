import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailPresenter from './DetailPresenter';
import { connect } from 'react-redux';
import { saveProduct, deleteProduct } from 'store';
import { productsApi } from 'api';

const DetailContainer = ({ redux_saveProduct, redux_removeProduct }) => {
  const [detailData, setDetailData] = useState({
    detail: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id: productId } = useParams();

  const getProductData = async () => {
    const { data: detail } = await productsApi.showDetail(productId);
    redux_removeProduct(detail);
    redux_saveProduct(detail);
    setDetailData({ detail });
  };

  const getData = async () => {
    try {
      getProductData();
    } catch {
      setError("Can't find anything.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [productId]);

  return <DetailPresenter {...detailData} error={error} loading={loading} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    redux_saveProduct: (data) => dispatch(saveProduct(data)),
    redux_removeProduct: (data) => dispatch(deleteProduct(data)),
  };
};

export default connect(null, mapDispatchToProps)(DetailContainer);
