import React, { useState } from 'react';
import styled from 'styled-components';
import Orange from 'Components/ProductInfo/Orange';
import Grapefruit from 'Components/ProductInfo/Grapefruit';
import Tomato from 'Components/ProductInfo/Tomato';
import Section4 from 'Components/Sections/Section4';
import Section6 from 'Components/Sections/Section6';
import Post from 'Components/Sections/Post';
import Review from 'Components/Sections/Review';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100vw;

  max-width: 100%;
  overflow: hidden;
`;

const ProductContainer = styled.div`
  ${(props) => props.theme.flexBetweenCenter};
  background-color: #fafafa;
  flex-wrap: wrap;
  width: 80%;
  padding: 20px 0;
`;

const Product = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 150px;
  margin: 0 100px;
  padding-bottom: 10px;
  cursor: pointer;
  opacity: ${(props) => (props.choose ? '1' : '0.4')};
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 150px;
  height: 150px;
`;

const Name = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Size = styled.div`
  font-size: 14px;
`;

const ProductInfo = styled.div`
  width: 100%;
`;

const Subscribe = () => {
  const list = [
    { id: 1, name: '디톡스 오렌지', size: '500ml' },
    { id: 2, name: '디톡스 자몽', size: '500ml' },
    { id: 3, name: '디톡스 토마토', size: '700ml' },
  ];

  const [item, setItem] = useState(1);

  return (
    <Container>
      <Helmet>
        <title>NECTA | 구독하기</title>
      </Helmet>
      <ProductContainer>
        {list.map((l) => (
          <Product
            onClick={() => setItem(l.id)}
            choose={item === l.id}
            key={l.id}
          >
            <Image
              bgUrl={require(`Components/assets/Product/product${l.id}.png`)}
            />
            <Name>{l.name}</Name>
            <Size>{l.size}</Size>
          </Product>
        ))}
      </ProductContainer>
      <ProductInfo>
        {parseInt(item) === 1 ? (
          <Orange />
        ) : parseInt(item) === 2 ? (
          <Grapefruit />
        ) : (
          <Tomato />
        )}
      </ProductInfo>
      <Section4 />
      <Section6 />
      <Post />
      <Review />
    </Container>
  );
};

export default Subscribe;
