import React from 'react';
import { useLocation } from 'react-router-dom';
import RefundPresenter from './RefundPresenter';
import { usersApi } from 'api';

const RefundContainer = () => {
  const item = useLocation().state;

  const handleSubmit = async () => {
    try {
      await usersApi.refund(item.id);
    } catch {
      alert('Error');
    }
  };
  return <RefundPresenter item={item} handleSubmit={handleSubmit} />;
};

export default RefundContainer;
