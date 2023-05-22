import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  display: flex;
  width: 100%;
  height: 50vh;
`;

const Section = styled.div`
  @media only screen and (max-width: 900px) {
    width: 50%;
    height: 50%;
  }
  ${(props) => props.theme.flexCenter}
  width: 33.33%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
`;

const TextContainer = styled.div`
  width: 70%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;

const Text = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 40%;
`;

const Option = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 40%;
  font-size: 24px;
`;

const GoToShop = styled(Link)`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 20%;
  font-size: 13px;
`;

const BottomHome = () => (
  <Container>
    <Section bgUrl={require('Components/assets/homeImg_4.jpg')}>
      <TextContainer>
        <Text>촉촉한 피부</Text>
        <Option>LOTION</Option>
        <GoToShop to='/shop'>SHOP {'>'}</GoToShop>
      </TextContainer>
    </Section>
    <Section bgUrl={require('Components/assets/homeImg_5.jpg')}>
      <TextContainer>
        <Text>피부를 탄력있게</Text>
        <Option>TONER</Option>
        <GoToShop to='/shop'>SHOP {'>'}</GoToShop>
      </TextContainer>
    </Section>
    <Section bgUrl={require('Components/assets/homeImg_6.jpg')}>
      <TextContainer>
        <Text>각종 기능성 화장품</Text>
        <Option>WHITENING</Option>
        <GoToShop to='/shop'>SHOP {'>'}</GoToShop>
      </TextContainer>
    </Section>
  </Container>
);

export default BottomHome;
