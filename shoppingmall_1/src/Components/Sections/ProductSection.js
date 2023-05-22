import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled(Link)`
  @media screen and (max-width: 900px) {
    width: 48%;
  }
  width: 31.33%;
  margin: 1%;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s linear;
  }
`;

const Image = styled.div`
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 40vw;
  }
  ${(props) => props.theme.flexCenter}
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 25vw;
`;

const Name = styled.div`
  width: 100%;
  margin-top: 7px;
  font-size: 11px;
`;

const Price = styled.div`
  margin-top: 10px;
  font-size: 12px;
  opacity: 0.8;
`;

const ProductSection = ({ id, imageUrl, name, price }) => (
  <Container to={`/products/${id}`}>
    <Image bgUrl={imageUrl} />
    <Name>{name}</Name>
    <Price>₩ {price}</Price>
  </Container>
);

ProductSection.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductSection;
