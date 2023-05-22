import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartSection from 'Components/Sections/CartSection';
import { usersApi } from 'api';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  padding: 40px 20px;
`;

const Title = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
`;

const Contents = styled.div`
  ${(props) => props.theme.flexStartCenter}
  flex-wrap: wrap;
  width: 100%;
  padding: 40px 0px;
`;

const SectionContainer = styled.div`
  @media screen and (max-width: 900px) {
    width: 48%;
  }
  width: 31.33%;
  margin: 20px 1%;
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 60%;
  margin-top: 30px;
`;

const DeleteBtn = styled.div`
  ${(props) => props.theme.flexCenter};
  border: none;
  border-radius: 4px;
  border: 1px solid black;
  width: 30px;
  height: 30px;
  margin-right: 20px;
  font-size: 10px;
  cursor: pointer;
`;

const PurchaseBtn = styled(Link)`
  ${(props) => props.theme.flexCenter};
  border: none;
  border-radius: 4px;
  background-color: black;
  color: white;
  width: 80px;
  height: 30px;
  font-size: 12px;
  cursor: pointer;
`;

const PurchaseCheckBtn = styled.div``;

const Black = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${(props) => (props.isChecked ? '#a3a3a3' : '#fafafa')};
`;

const Cart = ({ cart }) => {
  const [checkList, setCheckList] = useState([]);
  const [updatedCart, setUpdatedCart] = useState(cart);
  const [checkedCart, setCheckedCart] = useState([]);

  const check = (event) => {
    const checkId = parseInt(event.target.parentNode.id);

    if (checkList.includes(checkId)) {
      setCheckList(
        checkList.filter((checked) => {
          return checked !== checkId;
        })
      );
    } else {
      setCheckList(checkList.concat(checkId));
    }
  };

  const deleteList = async () => {
    setUpdatedCart(cart.filter((l) => !checkList.includes(l.id)));
    try {
      await usersApi.deleteCart(checkList);
    } catch {
      return;
    }
  };

  useEffect(() => {
    setCheckedCart(cart.filter((i) => checkList.includes(i.id)));
  }, [checkList, cart]);

  return (
    <Container>
      <Title>CART</Title>
      <Contents>
        {updatedCart &&
          updatedCart.length > 0 &&
          updatedCart.map((item) => (
            <SectionContainer key={item.id}>
              <Black isChecked={checkList.includes(item.id)} />
              <CartSection
                check={check}
                id={item.product.id}
                imageUrl={item.product.main_image}
                name={item.product.name}
                price={item.product.price}
                option={item.option}
                checkingId={item.id}
              />
            </SectionContainer>
          ))}
      </Contents>
      <BtnContainer>
        <DeleteBtn onClick={deleteList}>삭제</DeleteBtn>
        <PurchaseBtn to={{ pathname: '/purchase', state: { checkedCart } }}>
          구매하기
        </PurchaseBtn>
      </BtnContainer>
    </Container>
  );
};

export default Cart;
