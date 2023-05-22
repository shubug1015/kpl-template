import React from 'react';
import styled from 'styled-components';
import RefundSection from 'Components/Sections/RefundSection';

const Container = styled.div`
  margin-top: 50px;
`;

const Btn = styled.div`
  cursor: pointer;
`;

const RefundPresenter = ({ item, handleSubmit }) => (
  <Container>
    <RefundSection
      id={item.id}
      main_image={item.main_image}
      name={item.name}
      option={item.option}
      qty={item.qty}
      price={item.price}
      date={item.date}
    />
    <Btn onClick={handleSubmit}>환불하기</Btn>
  </Container>
);

export default RefundPresenter;
