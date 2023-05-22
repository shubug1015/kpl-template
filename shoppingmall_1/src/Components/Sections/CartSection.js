import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s linear;
  }
  cursor: pointer;
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
  height: 15vw;
`;

const Name = styled.div`
  display: flex;
  width: 100%;
  padding-top: 7px;
  font-size: 11px;
`;

const Price = styled.div`
  padding-top: 10px;
  font-size: 12px;
  opacity: 0.8;
`;

const Option = styled.div`
  padding-top: 10px;
  font-size: 12px;
`;

const CartSection = ({
  id,
  imageUrl,
  name,
  price,
  option,
  check,
  checkingId,
}) => (
  <Container onClick={check} id={checkingId}>
    <Image bgUrl={imageUrl} />
    <Name>{name}</Name>
    <Option>{option}</Option>
    <Price>₩{price}</Price>
  </Container>
);

CartSection.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default CartSection;
