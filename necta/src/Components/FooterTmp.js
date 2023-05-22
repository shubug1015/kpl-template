import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnStartCenter};
  }
  ${(props) => props.theme.flexBetweenCenter};
  width: 100%;
  padding: 50px 10%;
  color: #fafafa;
  background-color: #3b565f;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.columnStartCenter};
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

const IconContainer = styled.div`
  @media only screen and (max-width: 900px) {
    margin-top: 30px;
  }
  ${(props) => props.theme.flexCenter};
  font-size: 30px;
`;

const Footer = () => (
  <Container>
    <TextContainer>
      <Title>Nectar</Title>
      <Text>대표자: 홍길동 | 사업자 등록번호: 000-00-00000</Text>
      <Text>통신판매업신고번호: 제 2020-서울00동-00000호</Text>
      <Text>서울시 서대문구 세검정로 61</Text>
      <Text>Email: help@webpetto.com</Text>
      <Text>TEL: 02-0000-0000</Text>
      <Text>Copyright @2020 All rights</Text>
    </TextContainer>
    <IconContainer>
      <AiOutlineInstagram style={{ margin: '0 5px', cursor: 'pointer' }} />
      <AiFillFacebook style={{ margin: '0 5px', cursor: 'pointer' }} />
    </IconContainer>
  </Container>
);

export default Footer;
