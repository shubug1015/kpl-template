import React, { useState } from 'react';
import styled from 'styled-components';
import OrderSection from 'Components/Sections/OrderSection';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  padding: 40px 20px;
`;

const Name = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
`;

const OptionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const OptionBtn = styled.div`
  border-bottom: ${(props) => (props.underline ? '1px solid black' : 'none')};
  cursor: pointer;
  font-size: 10px;
  padding: 5px 0;
  margin: 0 5px;
`;

const Contents = styled.div`
  ${(props) => props.theme.flexStartCenter}
  flex-wrap: wrap;
  width: 100%;
  padding: 40px 0px;
`;

const Orders = ({ purchase, exchange, refund }) => {
  const [orderOption, setOrderOption] = useState(purchase);
  const [orderNum, setOrderNum] = useState(0);

  const handdleOption = (event) => {
    if (event.target.id === '0') {
      setOrderOption(purchase);
      setOrderNum(0);
    } else if (event.target.id === '1') {
      setOrderOption(exchange);
      setOrderNum(1);
    } else {
      setOrderOption(refund);
      setOrderNum(2);
    }
  };

  return (
    <Container>
      <Name>ORDERS</Name>
      <OptionContainer>
        <OptionBtn
          id='0'
          onClick={handdleOption}
          underline={orderOption === purchase}
        >
          전체
        </OptionBtn>
        <OptionBtn
          id='1'
          onClick={handdleOption}
          underline={orderOption === exchange}
        >
          교환상품
        </OptionBtn>
        <OptionBtn
          id='2'
          onClick={handdleOption}
          underline={orderOption === refund}
        >
          환불상품
        </OptionBtn>
      </OptionContainer>
      <Contents>
        {orderOption &&
          orderOption.length > 0 &&
          orderOption.map((item) => (
            <OrderSection
              id={item.id}
              name={item.product.name}
              tmpDate={item.created}
              option={item.option}
              price={item.product.price}
              qty={item.qty}
              main_image={item.product.main_image}
              orderNum={orderNum}
            />
          ))}
      </Contents>
    </Container>
  );
};

export default Orders;
