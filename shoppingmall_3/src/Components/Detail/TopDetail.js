import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosHeartEmpty } from 'react-icons/io';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
`;

const Cover = styled.div`
  @media only screen and (max-width: 900px) {
    width: 75%;
    height: 90vw;
  }
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 35%;
  height: 550px;
`;

const ItemContainer = styled.div`
  @media only screen and (max-width: 900px) {
    border-top: ${(props) => props.theme.blackBorder};
    border-bottom: ${(props) => props.theme.blackBorder};
    width: 75%;
    margin-top: 30px;
    padding: 0;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 40%;
  padding-left: 80px;
`;

const Name = styled.div`
  padding: 20px 0px;
  font-size: 22px;
`;

const Item = styled.div`
  ${(props) => props.theme.flexBetweenCenter}
  width: 100%;
  height: 70px;
  margin: 5px 0;
  padding: 10px 0;
  font-size: 11px;
`;

const ItemTitle = styled.div`
  width: 15%;
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 85%;
  height: 30px;
`;

const MaterialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 85%;
  height: 30px;
`;

const Material = styled.div`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Select = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
  height: 100%;
`;

const Option = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 43px;
  height: 40px;
  margin-right: 5%;
  cursor: pointer;
  :hover {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }
`;

const QtyNum = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 30px;
  height: 30px;
`;

const QtyBtn = styled.div`
  text-align: center;
  line-height: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  color: black;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
`;

const PurchaseBtn = styled(Link)`
  ${(props) => props.theme.flexCenter}
  border: 2px solid ${(props) => props.theme.mainColor};
  width: 120px;
  height: 40px;
  margin-right: 10px;
  color: ${(props) => props.theme.mainColor};
  font-size: 12px;
  font-weight: 700;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const CartBtn = styled(Link)`
  ${(props) => props.theme.flexCenter}
  background-color: ${(props) => props.theme.mainColor};
  width: 120px;
  height: 40px;
  margin-right: 10px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const LikeBtn = styled(Link)`
  ${(props) => props.theme.flexCenter}
  border: 1px solid ${(props) => props.theme.mainColor};
  width: 45px;
  height: 40px;
  color: ${(props) => props.theme.mainColor};
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const TopDetail = ({ main_image, name, price }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [qty, setQty] = useState(1);

  const getOption = (option) => {
    setSelectedOption(option);
  };

  const plusQty = () => setQty(qty + 1);
  const minusQty = () => qty > 1 && setQty(qty - 1);

  const options = [
    { id: 0, name: 'S' },
    { id: 1, name: 'M' },
    { id: 2, name: 'L' },
    { id: 3, name: 'XL' },
    { id: 4, name: 'XXL' },
  ];

  return (
    <Container>
      <Cover bgUrl={main_image} />
      <ItemContainer>
        <Name>{name}</Name>
        <Item>
          <ItemTitle>소재</ItemTitle>
          <MaterialContainer>
            <Material>Shell: Nylon 100% (PERTEX QUANTUM)</Material>
            <Material>Lininig: Nylon 100%(PERTEX QUANTUM)</Material>
            <Material>Filling: Down 80% / Feather 20%</Material>
          </MaterialContainer>
        </Item>
        <Item>
          <ItemTitle>옵션</ItemTitle>
          <Select>
            {options &&
              options.length > 0 &&
              options.map((option) => (
                <Option
                  key={option.id}
                  value={option.name}
                  onClick={() => getOption(option.name)}
                  style={{
                    border:
                      selectedOption === option.name
                        ? '1px solid black'
                        : '1px solid #dbdbdb',
                  }}
                >
                  {option.name}
                </Option>
              ))}
          </Select>
        </Item>
        <Item>
          <ItemTitle>수량</ItemTitle>
          <ItemContent>
            <QtyBtn onClick={minusQty}>-</QtyBtn>
            <QtyNum>{qty}</QtyNum>
            <QtyBtn onClick={plusQty}>+</QtyBtn>
          </ItemContent>
        </Item>
        <Item>
          <ItemTitle>배송비</ItemTitle>
          <ItemContent>무료</ItemContent>
        </Item>
        <Item>
          <ItemTitle>total</ItemTitle>
          <ItemContent>₩ {price * qty}</ItemContent>
        </Item>
        <BtnContainer>
          <PurchaseBtn to='/login'>구매하기</PurchaseBtn>
          <CartBtn to='/login'>장바구니</CartBtn>
          <LikeBtn
            to='/login'
            // onClick={toggleFav}
            // style={style.favBtnStyle} 로그인 후 필요
          >
            <IoIosHeartEmpty size='22' />
          </LikeBtn>
        </BtnContainer>
      </ItemContainer>
    </Container>
  );
};

TopDetail.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

export default TopDetail;
