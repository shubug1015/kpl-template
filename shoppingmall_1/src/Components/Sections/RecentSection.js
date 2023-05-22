import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled(Link)`
  width: 200px;
  margin: 0 30px;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Image = styled.div`
  ${(props) => props.theme.flexCenter}
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 200px;
  height: 250px;
`;

const Name = styled.div`
  margin-top: 7px;
  font-size: 11px;
`;

const Price = styled.div`
  margin-top: 10px;
  font-size: 12px;
  opacity: 0.8;
`;

const RecentSection = ({ id, imageUrl, name, price }) => (
  <Container to={`/products/${id}`}>
    <Image bgUrl={imageUrl} />
    <Name>{name}</Name>
    <Price>₩ {price}</Price>
  </Container>
);

RecentSection.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
};

export default RecentSection;
