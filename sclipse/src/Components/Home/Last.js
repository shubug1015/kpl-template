import React from 'react';
import styled from 'styled-components';
import { BsDot } from 'react-icons/bs';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.flexCenter}
  border-top: 1px solid #dbdbdb;
  width: 100%;
  padding: 80px 0;
`;

const LeftContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 400px;
  }
  width: 500px;
  opacity: 0.6;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 900;
`;

const City = styled.div`
  margin-top: 5px;
`;

const RightContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 400px;
    margin-top: 50px;
  }
  ${(props) => props.theme.columnStartCenter}
  font-size: 13px;
  opacity: 0.6;
`;

const List = styled.div`
  ${(props) => props.theme.flexStartCenter}
`;

const Item = styled.div`
  :not(:last-child) {
    margin-right: 10px;
    font-weight: 700;
  }
`;

const Content = styled.div`
  ${(props) => props.theme.columnStartCenter}
  margin-top: 20px;
`;

const Text = styled.div`
  margin-top: 20px;
  word-break: keep-all;
  line-height: 1.33;
`;

const Last = () => (
  <Container>
    <LeftContainer>
      <Title>Sclipse</Title>
      <City>
        Seoul <BsDot /> Beijing <BsDot /> Tokyo
      </City>
    </LeftContainer>
    <RightContainer>
      <List>
        <Item>이용약관</Item>
        <Item>개인정보 처리방침</Item>
        <Item>개인정보관리책임자 고상현</Item>
      </List>
      <Content>
        <Text>
          주식회사 웹페토 <BsDot /> 대표자: 고상현 <BsDot /> 사업자등록번호:
          000-00-00000 <BsDot /> 통신판매업신고번호: 0000-서울강남-00000호
        </Text>
        {/* <Text>
          주소: (06141) 서울특별시 강남구 테헤란로211 9층 (역삼동 678-39)
          <BsDot /> 전화번호: 02-512-0142, 0162 (고객센터) / 070-4206-1731
          (기업번역 문의)
        </Text> */}
        <Text>Copyright ©2020 Sclipse Inc. All rights reserved.</Text>
      </Content>
    </RightContainer>
  </Container>
);

export default Last;
