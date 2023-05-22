import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 765px) {
    width: 50%;
    height: 25%;
  }
  ${(props) => props.theme.columnCenter};
  width: 25%;
  height: 50%;
  padding: 30px;
`;

const Type = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 10%;
  font-size: 20px;
  font-weight: bold;
  color: #ff3860;
`;

const Image = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 40%;
  :hover {
    transform: scale(1.2);
  }
`;

const Rate = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 20%;
  font-size: 17px;
`;

const CategoryBox = ({ type, image, rate }) => {
  return (
    <Container>
      <Type>{type}</Type>
      <Image>{image}</Image>
      <Rate>{rate}</Rate>
    </Container>
  );
};

export default CategoryBox;
