import React from 'react';
import styled from 'styled-components';
import { BsCheck, BsQuestionCircle } from 'react-icons/bs';

const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
  ${(props) => props.theme.flexCenter};
  width: 100%;
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

const Fourth = () => {
  return (
    <Container>
      <TextContainer>
        <NumBtn>2.공사비 안전장치</NumBtn>
        <Title>처음에 계약한 공사비가</Title>
        <Title>나중에 오르지 않도록 관리합니다.</Title>
        <ContentContainer>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            공사 대금을 시공사에게 직접 지급하여 공사비가 새지 않도록
            관리합니다.
          </Content>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            모든 공정, 자재별로 각각 계약을 하므로 중간에 공사비가 오르지
            않습니다.
          </Content>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            시공사가 일한만큼 검사한 후 대금을 지급합니다.
          </Content>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            내 공사비가 어디에 쓰였는지 투명하게 확인할 수 있습니다.
          </Content>
        </ContentContainer>
        <Question>
          <BsQuestionCircle size={16} style={{ marginRight: '4px' }} />
          어떻게 공사비가 오르지 않나요?
        </Question>
      </TextContainer>
      <Image bgUrl={require('Components/assets/Work/fourth.png')} />
    </Container>
  );
};

export default Fourth;
