import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  @media screen and (max-width: 768px) {
    width: 48%;
  }
  margin: 0 30px;
`;

const Item = styled.div`
  &:focus,
  &:hover {
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 0.3s linear;
  }
`;

const Image = styled.div`
  /* background-image: url(${(props) =>
    props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center; */
  ${(props) => props.theme.flexCenter}
  background-color: #dbdbdb;
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

const SLink = styled(Link)`
  &:hover,
  &:focus {
    text-decoration: none;
    color: black;
    opacity: 0.8;
  }
`;

const RecentSection = ({ id, imageUrl, name, brand, price }) => {
  return (
    <Container>
      <SLink to={`/products/${id}`}>
        <Item>
          <Image
          // bgUrl={`${imageUrl}`}
          >
            예시 사진
          </Image>
          <Name>{name}</Name>
          <Price>₩ {price}</Price>
        </Item>
      </SLink>
    </Container>
  );
};

RecentSection.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
};

export default RecentSection;
