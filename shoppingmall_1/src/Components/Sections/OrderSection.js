import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  @media screen and (max-width: 760px) {
    width: 90%;
  }
  width: 46%;
  height: 200px;
  margin: 15px 2%;
  box-shadow: 1px 1px 4px black;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 20%;
`;

const ProductName = styled.div`
  ${(props) => props.theme.flexCenter};
  justify-content: flex-start;
  width: 100%;
  height: 70%;
  padding-left: 5px;
  font-size: 12px;
`;

const BuyDate = styled.div`
  ${(props) => props.theme.flexCenter};
  justify-content: flex-end;
  width: 100%;
  height: 30%;
  padding-right: 5px;
  font-size: 9px;
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
  width: 40%;
`;

const DetailContainer = styled.div`
  ${(props) => props.theme.columnStartCenter};
  position: relative;
  height: 100%;
  width: 60%;
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

const BtnContainer = styled.div`
  ${(props) => props.theme.flexAroundCenter};
  width: 100%;
  visibility: ${(props) => (props.show === 0 ? '' : 'hidden')};
`;

const Btn = styled(Link)`
  font-size: 10px;
  padding: 5px;
  border-bottom: 1px solid #666666;
  cursor: pointer;
`;

const confirmBtn = styled.div`
  font-size: 10px;
  padding: 5px;
  border-bottom: 1px solid #666666;
  cursor: pointer;
`;

const OrderSection = ({
  id,
  name,
  tmpDate,
  option,
  price,
  main_image,
  qty,
  orderNum,
}) => {
  const date = tmpDate.substring(0, 10);

  return (
    <Container>
      <TopContainer>
        <ProductName>{name}</ProductName>
        <BuyDate>{date}</BuyDate>
      </TopContainer>
      <BottomContainer>
        <Image bgUrl={main_image} />
        <DetailContainer>
          <Detail>
            <DetailTitle>옵션</DetailTitle>
            <DetailText>{option}</DetailText>
          </Detail>
          <Detail>
            <DetailTitle>수량</DetailTitle>
            <DetailText>{qty}</DetailText>
          </Detail>
          <Detail>
            <DetailTitle>₩</DetailTitle>
            <DetailText>{price}</DetailText>
          </Detail>
          <BtnContainer show={orderNum}>
            <confirmBtn>구매확정</confirmBtn>
            <Btn
              to={{
                pathname: '/exchange',
                state: { id, name, date, option, price, main_image, qty },
              }}
            >
              교환
            </Btn>
            <Btn
              to={{
                pathname: '/refund',
                state: { id, name, date, option, price, main_image, qty },
              }}
            >
              환불
            </Btn>
          </BtnContainer>
        </DetailContainer>
      </BottomContainer>
    </Container>
  );
};

export default OrderSection;
