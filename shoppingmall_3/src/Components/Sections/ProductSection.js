import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosCart, IoIosHeartEmpty } from 'react-icons/io';

const Container = styled(Link)`
  @media only screen and (max-width: 900px) {
    width: 48%;
    margin: 20px 1%;
  }
  width: 29.33%;
  margin: 2%;
`;

const Emogi = styled.div`
  ${(props) => props.theme.flexBetweenCenter}
  width: 11%;
  margin-bottom: 5px;
`;

const Cart = styled(Link)`
  opacity: 0.5;
  :hover {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;

const Fav = styled(Link)`
  opacity: 0.5;
  :hover {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
`;

const Image = styled.div`
  ${(props) => props.theme.flexCenter}
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 25vw;
`;

const Name = styled.div`
  margin-top: 10px;
  font-size: 11px;
`;

const Price = styled.div`
  margin-top: 10px;
  font-size: 11px;
`;

const ShopSection = ({ id, imageUrl, name, price }) => {
  const [hover, setHover] = useState(false);

  const onMouse = () => setHover(!hover);

  const style = {
    emogiStyle: {
      visibility: hover ? 'visible' : 'hidden',
    },
    imageStyle: {
      opacity: hover ? 0.7 : 1,
      transition: 'opacity 0.3s ease-in-out',
    },
    textStyle: {
      opacity: hover ? 1 : 0.5,
      transition: 'opacity 0.3s ease-in-out',
    },
  };

  return (
    <Container
      to={`/products/${id}`}
      onMouseEnter={onMouse}
      onMouseLeave={onMouse}
    >
      <Emogi style={style.emogiStyle}>
        <Cart to='/login'>
          <IoIosCart />
        </Cart>
        <Fav to='/login'>
          <IoIosHeartEmpty />
        </Fav>
      </Emogi>
      <Image bgUrl={imageUrl} style={style.imageStyle}></Image>
      <Name style={style.textStyle}>{name}</Name>
      <Price style={style.textStyle}>₩ {price}</Price>
    </Container>
  );
};

ShopSection.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ShopSection;
