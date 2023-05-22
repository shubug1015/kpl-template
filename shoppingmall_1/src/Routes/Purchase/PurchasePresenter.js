import React from 'react';
// import { Link } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PurchaseInfo from 'Components/Purchase/PurchaseInfo';
import BuyerInfo from 'Components/Purchase/BuyerInfo';
import Iamport from 'Components/Iamport';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
`;

const Title = styled.div`
  border-bottom: ${(props) => props.theme.pinkBorder};
  width: 85vw;
  padding: 30px;
  font-size: 25px;
`;

const ListTitle = styled.div`
  ${(props) => props.theme.flexCenter}
  border: ${(props) => props.theme.mainBorder};
  border-bottom: none;
  width: 100px;
  padding: 15px;
  margin-top: 30px;
  font-size: 12px;
  font-weight: 800;
`;

const ItemContainer = styled.div`
  ${(props) => props.theme.flexStartCenter}
  flex-wrap: wrap;
  border-top: ${(props) => props.theme.boldMainBorder};
  width: 85vw;
  margin-bottom: 30px;
`;

const TotalPrice = styled.div`
  text-align: right;
  width: 88vw;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 40px;
  margin-right: 60px;
`;

const Savings = styled.div`
  text-align: right;
  width: 88vw;
  height: 30px;
  font-size: 13px;
  font-weight: 600;
  margin-top: 10px;
  margin-right: 62px;
`;

const BtnConainer = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 85vw;
  padding: 20px;
`;

const PurchasePresenter = ({ product, user, open, purchaseFunc }) => {
  let totalPrice = product.checkedCart
    .map((item) => item.product.price * item.qty)
    .reduce((a, c) => {
      return a + c;
    });

  return (
    <Container>
      <Title>구매하기</Title>
      <ListTitle>주문 내역</ListTitle>
      <ItemContainer>
        {product.checkedCart &&
          product.checkedCart.length > 0 &&
          product.checkedCart.map((item) => (
            <PurchaseInfo
              key={item.id}
              name={item.product.name}
              main_image={item.product.main_image}
              option={item.option}
              price={item.product.price}
              qty={item.qty}
            />
          ))}
      </ItemContainer>
      <TotalPrice>총 주문금액 : {totalPrice}원</TotalPrice>
      <Savings>적립 예상금액 : {totalPrice / 10}원</Savings>
      <BuyerInfo user={user} open={open} {...purchaseFunc} />
      <BtnConainer>
        <Iamport {...product} {...user} totalPrice={totalPrice} />
      </BtnConainer>
    </Container>
  );
};

PurchasePresenter.propTypes = {
  user: PropTypes.object.isRequired,
  error: PropTypes.string,
};

export default PurchasePresenter;
