import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PurchasePresenter from './PurchasePresenter';
import { usersApi } from 'api';

const PurchaseContainer = () => {
  const { checkedCart } = useLocation().state;

  const [purchaseData, setPurchaseData] = useState({
    product: {
      // id: null,
      // productName: null,
      // option: null,
      // qty: null,
      // price: null,
      // main_image: null,
      checkedCart,
    },
    user: {
      name: '',
      email: '',
      phone_number: '',
      mainAddress: '',
      detailAddress: '',
      postcode: '',
      message: '',
    },
    open: false,
    loading: true,
  });

  const history = useHistory();

  const purchaseFunc = {
    handleName: (e) => {
      const {
        target: { value: name },
      } = e;
      setPurchaseData({
        ...purchaseData,
        user: { ...purchaseData.user, name },
      });
    },
    handleEmail: (e) => {
      const {
        target: { value: email },
      } = e;
      setPurchaseData({
        ...purchaseData,
        user: { ...purchaseData.user, email },
      });
    },
    handlePhoneNum: (e) => {
      const {
        target: { value: phone_number },
      } = e;
      setPurchaseData({
        ...purchaseData,
        user: { ...purchaseData.user, phone_number },
      });
    },
    handleMainAddress: (e) => {
      const {
        target: { value: mainAddress },
      } = e;
      setPurchaseData({
        ...purchaseData,
        user: { ...purchaseData.user, mainAddress },
      });
    },
    handleDetailAddress: (e) => {
      const {
        target: { value: detailAddress },
      } = e;
      setPurchaseData({
        ...purchaseData,
        user: { ...purchaseData.user, detailAddress },
      });
    },
    handlePostcode: (e) => {
      const {
        target: { value: postcode },
      } = e;
      setPurchaseData({
        ...purchaseData,
        user: { ...purchaseData.user, postcode },
      });
    },
    handleMessage: (e) => {
      const {
        target: { value: message },
      } = e;
      setPurchaseData({
        ...purchaseData,
        user: { ...purchaseData.user, message },
      });
    },
    // Daum 주소 검색  함수
    openAddress: () => setPurchaseData({ ...purchaseData, open: true }),
    completeAddress: (data) => {
      let mainAddress = data.address;
      let extraAddress = '';
      const { zonecode: postcode } = data;
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress +=
            extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        mainAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }
      setPurchaseData({
        ...purchaseData,
        user: { ...purchaseData.user, mainAddress, postcode },
        open: false,
      });
    },
    initAddress: () =>
      setPurchaseData({
        ...purchaseData,
        user: { ...purchaseData.user, mainAddress: '', detailAddress: '' },
      }),
  };

  const getData = async () => {
    try {
      const {
        data: { name, email, phone_number },
      } = await usersApi.user();
      setPurchaseData({
        // product: { id, productName, option, qty, price, main_image },
        product: { checkedCart },
        user: { ...purchaseData.user, name, email, phone_number },
        loading: false,
      });
    } catch {
      history.push('/');
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PurchasePresenter {...purchaseData} purchaseFunc={purchaseFunc} />;
};

export default PurchaseContainer;
