import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100vw;
  padding-bottom: 120px;
`;

// const Text = styled.div`
//   @media only screen and (max-width: 900px) {
//     font-size: 18px;
//     padding: 50px 0px;
//   }
//   ${(props) => props.theme.flexCenter}
//   background-color:${(props) => props.theme.mainColor};
//   width: 100%;
//   padding: 70px 0;
//   font-size: 27px;
//   font-weight: 700;
//   color: #fafafa;
// `;

const ProductContainer = styled.div`
  ${(props) => props.theme.flexAroundCenter};
  flex-wrap: wrap;
  width: 80%;
  padding-top: 120px;
`;

const Product = styled.div`
  ${(props) => props.theme.columnCenter};
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  width: 300px;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 300px;
  height: 300px;
  margin-bottom: 30px;
`;

const Name = styled.div``;

const Size = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 14px;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Btn = styled(Link)`
  text-align: center;
  width: 150px;
  background-color: #0069d9;
  padding: 20px 20px;
  margin-top: 70px;
  font-size: 16px;
  color: #fafafa;
  border-radius: 5px;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Section3 = () => {
  const list = [
    { id: 1, name: '디톡스 오렌지', size: '500ml', price: '3,200' },
    { id: 2, name: '디톡스 자몽', size: '500ml', price: '3,200' },
    { id: 3, name: '디톡스 토마토', size: '700ml', price: '3,900' },
  ];

  return (
    <Container>
      {/* <Text>신선한 생과일로 만든 수제 디톡스 주스</Text> */}
      <ProductContainer>
        {list.map((l) => (
          <Product key={l.id}>
            <Image
              bgUrl={require(`Components/assets/Product/product${l.id}.png`)}
            />
            <Name>{l.name}</Name>
            <Size>{l.size}</Size>
            <Price>{l.price}원</Price>
          </Product>
        ))}
      </ProductContainer>
      <Btn to='/subscribe'>자세히보기</Btn>
    </Container>
  );
};

export default Section3;
