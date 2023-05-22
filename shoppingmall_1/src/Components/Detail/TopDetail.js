import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { usersApi } from 'api';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
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
  ${(props) => props.theme.flexStartCenter}
  width: 85%;
  height: 30px;
`;

const MaterialContainer = styled.div`
  ${(props) => props.theme.columnStartCenter}
  justify-content: center;
  width: 85%;
  height: 30px;
`;

const Material = styled.div`
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Select = styled.div`
  ${(props) => props.theme.flexStartCenter}
  flex-wrap: wrap;
  width: 85%;
  height: 100%;
`;

const Option = styled.div`
  ${(props) => props.theme.flexCenter}
  border: ${(props) =>
    props.selected ? '1px solid black' : '1px solid #dbdbdb'};
  width: 43px;
  height: 40px;
  margin-right: 5%;
  cursor: pointer;
`;

const QtyNum = styled.div`
  ${(props) => props.theme.flexStartCenter}
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
  ${(props) => props.theme.flexStartCenter}
  height: 100px;
`;

const PurchaseBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  border: 2px solid black;
  width: 120px;
  height: 40px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const CartBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color: black;
  width: 120px;
  height: 40px;
  margin-right: 10px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`;

const FavBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  border: 1px solid black;
  width: 45px;
  height: 40px;
  cursor: pointer;
  background-color: ${(props) => (props.favCheck ? '#ff595c' : '#ffffff')};
  color: ${(props) => (props.favCheck ? '#ffffff' : 'black')};
`;

const CheckContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  margin-top: 40px;
  margin-left: 70px;
  width: 300px;
  height: 100px;
  padding-top: 20px;
  box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.2);
  visibility: ${(props) => (props.show ? '' : 'hidden')};
`;

const CheckText = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 300px;
  height: 30px;
  font-size: 15px;
`;

const CheckBtnContainer = styled.div`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const CheckCartBtn = styled(Link)`
  ${(props) => props.theme.flexCenter}
  border-radius: 2px;
  background-color: ${(props) => props.theme.pinkColor};
  width: 100px;
  height: 20px;
  font-size: 13px;
  cursor: pointer;
`;

const KeepBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  border-radius: 2px;
  background-color: ${(props) => props.theme.pinkColor};
  width: 100px;
  height: 20px;
  font-size: 13px;
  cursor: pointer;
`;

const TopDetail = ({ id, main_image, name, price, check_favs, logged }) => {
  const [option, setOptions] = useState(null);
  const [qty, setQty] = useState(1);
  const [favs, setFavs] = useState(check_favs);
  const [cartClick, setCartClick] = useState(false);

  const cartBtnClick = () => setCartClick(true);

  const keepShopping = () => setCartClick(false);

  const getOption = (option) => setOptions(option);

  const plusQty = () => setQty(qty + 1);
  const minusQty = () => qty > 1 && setQty(qty - 1);

  const history = useHistory();

  const ID = 'id';
  const OPT = 'option';
  const QTY = 'qty';

  const cartSubmit = async () => {
    const item = { [ID]: id, [OPT]: option, [QTY]: qty };
    if (item.option !== null) {
      if (logged) {
        try {
          await usersApi.addToCart(item);
          cartBtnClick();
        } catch {
          return;
        }
      } else {
        history.push('/login');
      }
    } else {
      alert('옵션을 선택해주세요');
    }
  };

  const addFav = async () => {
    if (logged) {
      try {
        await usersApi.addFavs(id);
      } catch {
        return;
      }
    } else {
      history.push('/login');
    }
  };

  const deleteFav = async () => {
    if (logged) {
      try {
        await usersApi.deleteFavs(id);
      } catch {
        return;
      }
    } else {
      history.push('/login');
    }
  };

  const checkFavs = () => {
    if (favs === 'fav') {
      deleteFav();
      setFavs('not fav');
    } else {
      addFav();
      setFavs('fav');
    }
  };

  const purchaseSubmit = () => {
    if (option !== null) {
      if (logged) {
        history.push({
          pathname: '/purchase',
          state: {
            checkedCart: [
              {
                id,
                product: { name, main_image, price },
                option,
                qty,
              },
            ],
          },
        });
      } else {
        history.push('/login');
      }
    } else {
      alert('옵션을 선택해주세요');
    }
  };

  const options = [
    { id: 0, name: 'XS' },
    { id: 1, name: 'S' },
    { id: 2, name: 'M' },
    { id: 3, name: 'L' },
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
              options.map((opt) => (
                <Option
                  key={opt.id}
                  value={opt.name}
                  onClick={() => getOption(opt.name)}
                  selected={option === opt.name}
                >
                  {opt.name}
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
          <PurchaseBtn onClick={purchaseSubmit}>구매하기</PurchaseBtn>
          <CartBtn onClick={cartSubmit}>장바구니</CartBtn>
          <FavBtn onClick={checkFavs} favCheck={favs === 'fav'}>
            <IoIosHeartEmpty size='22' />
          </FavBtn>
        </BtnContainer>
        <CheckContainer show={cartClick}>
          <CheckText>상품이 장바구니에 담겼습니다.</CheckText>
          <CheckBtnContainer>
            <KeepBtn onClick={keepShopping}>계속 쇼핑하기</KeepBtn>
            <CheckCartBtn to={{ pathname: '/mypage', state: { init: 2 } }}>
              확인하기
            </CheckCartBtn>
          </CheckBtnContainer>
        </CheckContainer>
      </ItemContainer>
    </Container>
  );
};

TopDetail.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    logged: state.user.logged,
  };
};

export default connect(mapStateToProps, null)(TopDetail);
