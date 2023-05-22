import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

const Container = styled.div`
  ${(props) => props.theme.flexBetweenCenter};
  background-color: #191919;
  width: 100%;
  height: 166px;
`;

const LeftContent = styled.div`
  @media only screen and (max-width: 900px) {
    width: 50%;
  }
  ${(props) => props.theme.flexCenter};
  width: 40%;
  height: 100%;
`;

const Logo1 = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100px;
    height: 40px;
  }
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 150px;
  height: 60px;
`;

const MiddleContent = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 13px;
  }
  ${(props) => props.theme.columnStartCenter}
  justify-content: center;
  width: 50%;
  height: 100%;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
`;

const Text = styled.div`
  :not(:first-child) {
    margin-top: 10px;
  }
  :last-child {
    margin-top: 20px;
    font-size: 30px;
    color: #757575;
  }
`;

const Last = () => (
  <Container>
    <LeftContent>
      <Logo1 bgUrl={require('Components/assets/logo_3.png')} />
    </LeftContent>
    <MiddleContent>
      <Text>서울시 강남구 테헤란로 6길</Text>
      <Text>help@webpetto.com</Text>
      <Text>
        <AiOutlineInstagram style={{ marginRight: '10px' }} />
        <AiFillFacebook />
      </Text>
    </MiddleContent>
  </Container>
);

export default Last;
