import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media screen and (max-width: 760px) {
    width: 90%;
  }
  width: 31.33%;
  height: 230px;
  margin: 15px 1%;
  box-shadow: 1px 1px 4px black;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 20%;
`;

const ProductName = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 100%;
  padding-left: 5px;
  font-size: 12px;
`;

const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 50%;
`;

const DetailContainer = styled.div`
  ${(props) => props.theme.columnStartCenter};
  position: relative;
  height: 100%;
  width: 50%;
  padding: 30px 20px;
`;

const Detail = styled.div`
  ${(props) => props.theme.flexStartCenter};
  margin-bottom: 20px;
`;

const DetailTitle = styled.div`
  width: 50px;
  font-size: 12px;
`;

const DetailText = styled.div`
  font-size: 12px;
`;

const PurchaseInfo = ({ name, main_image, option, price, qty }) => {
  return (
    <Container>
      <TopContainer>
        <ProductName>{name}</ProductName>
      </TopContainer>
      <BottomContainer>
        <Image bgUrl={main_image} />
        <DetailContainer>
          <Detail>
            <DetailTitle>옵션</DetailTitle>
            <DetailText>{option}</DetailText>
          </Detail>
          <Detail>
            <DetailTitle>가격</DetailTitle>
            <DetailText>₩{price}</DetailText>
          </Detail>
          <Detail>
            <DetailTitle>수량</DetailTitle>
            <DetailText>{qty}</DetailText>
          </Detail>
          <Detail>
            <DetailTitle>배송비</DetailTitle>
            <DetailText>₩0</DetailText>
          </Detail>
          <Detail>
            <DetailTitle>TOTAL</DetailTitle>
            <DetailText>₩{price * qty}</DetailText>
          </Detail>
        </DetailContainer>
      </BottomContainer>
    </Container>
  );
};

export default PurchaseInfo;
