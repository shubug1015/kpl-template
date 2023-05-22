import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100vw;
  background: linear-gradient(to bottom, #3b565f, #74939e);
  padding-bottom: 100px;
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    flex-direction: column-reverse;
    padding: 70px 0;
    width: 90%;
  }
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    width: 100%;
  }
  ${(props) => props.theme.flexStartCenter};
  width: 40%;
`;

const TextSection = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
  }
`;

const Text = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 27px;
  }
  font-size: 40px;
  padding: 10px 0;
  color: #fafafa;
  :first-child {
    font-weight: 100;
  }
`;

const Btn = styled(Link)`
  display: inline-block;
  text-align: center;
  background-color: ${(props) => props.theme.mainColor};
  padding: 20px 60px;
  color: #fafafa;
  border-radius: 5px;
  letter-spacing: 1px;
  margin-top: 70px;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Backdrop = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 400px;
    margin-right: -20%;
  }
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 55%;
  height: 700px;
`;

const Section6 = () => {
  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <TextSection>
            <Text>부담 없이 시작하세요</Text>
            <Text>정기구독 시 </Text>
            <Text>최대 20% 할인 </Text>
            <Btn to='/subscribe'>시작하기</Btn>
          </TextSection>
        </TextContainer>
        <Backdrop bgUrl={require('Components/assets/section6.png')} />
      </ContentContainer>
    </Container>
  );
};

export default Section6;
