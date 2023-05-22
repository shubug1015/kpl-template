import React from 'react';
import { useLocation } from 'react-router-dom';
import ExchangePresenter from './ExchangePresenter';
import { usersApi } from 'api';

const ExchangeContainer = () => {
  const item = useLocation().state;

  const handleSubmit = async () => {
    try {
      await usersApi.exchange(item.id);
    } catch {
      alert('Error');
    }
  };

  return <ExchangePresenter item={item} handleSubmit={handleSubmit} />;
};

export default ExchangeContainer;
