import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { usersApi } from 'api';

const Btn = styled.div`
  ${(props) => props.theme.flexCenter}
  border: 2px solid black;
  width: 120px;
  height: 40px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const Iamport = ({
  name,
  email,
  phone_number,
  mainAddress,
  detailAddress,
  postcode,
  totalPrice,
  checkedCart,
}) => {
  const history = useHistory();

  const orderName = checkedCart.map((c) => `${c.product.name} ${c.option}`);

  const savePurchase = async () => {
    try {
      let data = [];
      let len = checkedCart.length;
      for (let i = 0; i < len; i++) {
        data.push({
          productId: checkedCart[i].product.id,
          basketObjectId: checkedCart[i].id,
          option: checkedCart[i].option,
          qty: checkedCart[i].qty,
        });
      }
      const receiverData = {
        name: 'name',
        firstAddress: 'firstAddress',
        detailAddress: 'detailAddress',
        phonenum: 'phonenum',
        email: 'email',
        message: 'message',
      };
      await usersApi.purchase(data, receiverData);
    } catch {
      return;
    }
  };

  const onClickPayment = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init('imp11095153');
    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: 'html5_inicis', // PG사
      pay_method: 'card', // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: totalPrice, // 결제금액
      name: orderName.toString(), // 주문명
      buyer_name: name, // 구매자 이름
      buyer_tel: phone_number, // 구매자 전화번호
      buyer_email: email, // 구매자 이메일
      buyer_addr: mainAddress + detailAddress, // 구매자 주소
      buyer_postcode: postcode, // 구매자 우편번호
    };
    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기 */
  const callback = (response) => {
    const { success, merchant_uid, error_msg } = response;
    console.log(response);
    if (success) {
      savePurchase();
      alert('결제 성공');
      history.push({ pathname: '/mypage', state: { init: 4 } });
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  return <Btn onClick={onClickPayment}>결제하기</Btn>;
};

export default Iamport;
