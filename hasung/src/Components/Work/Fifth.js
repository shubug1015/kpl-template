import React from 'react';
import styled from 'styled-components';
import { BsCheck } from 'react-icons/bs';

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

const Fifth = () => {
  return (
    <Container>
      <TextContainer>
        <NumBtn>3.공사관리</NumBtn>
        <Title>공사 현장에서 분쟁이 일어나지</Title>
        <Title>않게 지켜드립니다.</Title>
        <ContentContainer>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            공사현장에 가지 않아도 매일 공사현황을 받아보실 수 있습니다.
          </Content>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            국내 최고의 건축가이드가 모든 공사 과정을 건축주와 함께합니다.
          </Content>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            일을 제대로 하지 않았다면 공사비를 주지 않아도 됩니다.
          </Content>
        </ContentContainer>
      </TextContainer>
      <Image bgUrl={require('Components/assets/Work/fifth.png')} />
    </Container>
  );
};

export default Fifth;
