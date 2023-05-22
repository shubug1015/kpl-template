import React from 'react';
import styled from 'styled-components';
import ExchangeSection from 'Components/Sections/ExchangeSection';

const Container = styled.div`
  margin-top: 50px;
`;

const Btn = styled.div`
  cursor: pointer;
`;

const RefundPresenter = ({ item, handleSubmit }) => (
  <Container>
    <ExchangeSection
      id={item.id}
      main_image={item.main_image}
      name={item.name}
      option={item.option}
      qty={item.qty}
      price={item.price}
      date={item.date}
    />
    <Btn onClick={handleSubmit}>교환하기</Btn>
  </Container>
);

export default RefundPresenter;
