import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 23%;
  @media screen and (max-width: 768px) {
    width: 48%;
  }
  margin: 20px 1%;
`;

const Item = styled.div`
  width: 100%;
  &:focus,
  &:hover {
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 0.3s linear;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
`;

const Name = styled.div`
  margin-top: 15px;
  font-size: 11px;
`;

const Price = styled.div`
  margin-top: 10px;
  font-size: 12px;
  opacity: 0.8;
`;

const SLink = styled(Link)`
  &:hover,
  &:focus {
    text-decoration: none;
    color: black;
    opacity: 0.8;
  }
  margin: 10px;
`;

const ShopSection = ({ id, imageUrl, name, brand, price }) => {
  return (
    <Container>
      <SLink to={`/products/${id}`}>
        <Item>
          <Image src={imageUrl} alt={`${name} Image`}></Image>
          <Name>{name}</Name>
          <Price>₩ {price}</Price>
        </Item>
      </SLink>
    </Container>
  );
};

ShopSection.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
};

export default ShopSection;
