import React from 'react';
import styled from 'styled-components';
import { BsCheck, BsQuestionCircle } from 'react-icons/bs';

const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
  ${(props) => props.theme.flexBetweenCenter};
  width: 75%;
  padding: 100px 0;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
  ${(props) => props.theme.columnStartCenter};
  width: 50%;
  /* background-color: pink; */
`;

const NumBtn = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 120px;
  height: 40px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  background-color: #ebf5f6;
  color: ${(props) => props.theme.mainColor};
  margin-bottom: 20px;
`;

const Title = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 23px;
    padding-left: 10px;
  }
  font-size: 28px;
  font-weight: 700;
  line-height: 50px;
  word-break: keep-all;
`;

const ContentContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 70px;
`;

const Content = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 15px;
    line-height: 20px;
  }
  ${(props) => props.theme.flexStartCenter};
  font-size: 18px;
  line-height: 70px;
  opacity: 0.7;
  word-break: keep-all;
`;

const Question = styled.div`
  ${(props) => props.theme.flexStartCenter};
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`;

const Image = styled.div`
  width: 400px;
  height: 700px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const Third = () => {
  return (
    <Container>
      <TextContainer>
        <NumBtn>1.건설사 찾기</NumBtn>
        <Title>직접 찾지 않아도</Title>
        <Title>2000개 이상의 건설사가 찾아옵니다.</Title>
        <ContentContainer>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            모든 건설사들이 내가 제시한 조건에 맞춰 견적을 제시합니다.
          </Content>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            견적을 제시한 건설사의 모든 정보를 확인 & 비교할 수 있습니다.
          </Content>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            수년간 쌓아온 데이터를 기반으로 신뢰를 드립니다.
          </Content>
        </ContentContainer>
        <Question>
          <BsQuestionCircle size={16} style={{ marginRight: '4px' }} />
          건설사 찾기는 어떻게 진행되나요?
        </Question>
      </TextContainer>
      <Image bgUrl={require('Components/assets/Work/third.png')} />
    </Container>
  );
};

export default Third;
