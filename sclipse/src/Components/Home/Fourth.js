import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import { BiMessageAltCheck } from 'react-icons/bi';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.flexCenter}
  background-color: #ececec;
  width: 100%;
  padding: 50px 0;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    padding-left: 0;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 500px;
  padding-left: 100px;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 36px;
  }
  :not(:first-child) {
    margin-top: 20px;
  }
  font-size: 45px;
  font-weight: 900;
  opacity: 0.8;
`;

const OptionContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
  ${(props) => props.theme.columnStartCenter}
`;

const Option = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 15px;
  }
  ${(props) => props.theme.flexCenter}
  margin-top: 50px;
  font-size: 14px;
  font-weight: 700;
`;

const BigImage = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 28%;
  height: 28vw;
`;

const SmallImage = styled.div`
  @media only screen and (max-width: 900px) {
    background-image: url(${(props) => props.bgUrl});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 60%;
    height: 60vw;
    margin-top: 50px;
  }
`;

const Fourth = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <BigImage bgUrl={require('Components/assets/fourth.png')} />
      <Content data-aos='fade-up' data-aos-duration='1500'>
        <Title>신속하고 정확한</Title>
        <Title>영상 자막 번역</Title>
        <SmallImage bgUrl={require('Components/assets/fourth.png')} />
        <OptionContainer>
          <Option>
            <BiMessageAltCheck
              style={{ color: '#1187CF', marginRight: '10px' }}
            />
            스크립스만의 철저한 테스트를 거쳐 엄선한 영상 번역가
          </Option>
          <Option>
            <BiMessageAltCheck
              style={{ color: '#1187CF', marginRight: '10px' }}
            />
            타임 코딩부터 검수까지 전문 번역가 직접 삽입
          </Option>
          <Option>
            <BiMessageAltCheck
              style={{ color: '#1187CF', marginRight: '10px' }}
            />
            컨텐츠에 맞는 분야별 전문 번역가 직접 선택
          </Option>
        </OptionContainer>
      </Content>
    </Container>
  );
};

export default Fourth;
