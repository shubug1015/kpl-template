import React from 'react';
import styled from 'styled-components';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Container = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  padding: 150px 0;
`;

const Content = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 80%;
`;

const List = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    margin-bottom: 50px;
  }
  ${(props) => props.theme.flexBetweenCenter};
  flex-direction: ${(props) => (props.even ? 'row-reverse' : 'row')};
  width: 100%;
  :not(:last-child) {
    margin-bottom: 80px;
  }
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    width: 70%;
    height: 70vw;
  }
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 40%;
  height: 25vw;
`;

const Item = styled.div`
  @media only screen and (max-width: 900px) {
    width: 80%;
    padding-left: 0;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 40%;
  font-size: 80px;
`;

const Icon = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 70px;
  height: 70px;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 25px;
  }
  margin-top: 15px;
  margin-bottom: 20px;
  padding-left: 15px;
  font-size: 38px;
  font-weight: 400;
`;

const Function = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
  margin-top: 15px;
  padding-left: 15px;
  font-size: 22px;
  font-weight: 400;
  line-height: 35px;
  word-break: keep-all;
  opacity: 0.8;
`;

const More = styled.div`
  color: ${(props) => props.theme.mainColor};
  margin-top: 15px;
  padding-left: 15px;
  font-size: 16px;
`;

const FeatureSection = () => (
  <Container>
    <Content>
      <List even={true}>
        <Image bgUrl={require('Components/assets/titan/func1.png')} />
        <Item>
          <Icon bgUrl={require('Components/assets/titan/icon1.png')} />
          <Title>앱 통합 기능</Title>
          <Function>
            여러 앱에서 콘텐츠를 공유하세요. Titan's Note는 이미 사용하고 계신
            생산성 도구들과 연동되므로, 원하는 방식으로 작업할 수 있습니다.
          </Function>
          <More>
            자세히 알아보기{' '}
            <HiArrowNarrowRight style={{ transform: 'translate(0, 2px)' }} />
          </More>
        </Item>
      </List>
      <List even={false}>
        <Image bgUrl={require('Components/assets/titan/func2.png')} />
        <Item>
          <Icon bgUrl={require('Components/assets/titan/icon2.png')} />
          <Title>문서 스캔</Title>
          <Function>
            종이는 없애고 정보만 보관하세요. 사용하시는 모든 장치에 중요한
            문서를 백업하세요.
          </Function>
          <More>
            자세히 알아보기{' '}
            <HiArrowNarrowRight style={{ transform: 'translate(0, 2px)' }} />
          </More>
        </Item>
      </List>
      <List even={true}>
        <Image bgUrl={require('Components/assets/titan/func3.png')} />
        <Item>
          <Icon bgUrl={require('Components/assets/titan/icon3.png')} />
          <Title>문서 검색</Title>
          <Function>
            때에 따라 검색 기능을 사용해 시간을 절약하세요. 원하는 문서나 작업이
            표시됩니다.
          </Function>
          <More>
            자세히 알아보기{' '}
            <HiArrowNarrowRight style={{ transform: 'translate(0, 2px)' }} />
          </More>
        </Item>
      </List>
      <List even={false}>
        <Image bgUrl={require('Components/assets/titan/func4.png')} />
        <Item>
          <Icon bgUrl={require('Components/assets/titan/icon4.png')} />
          <Title>문서 검색</Title>
          <Function>
            때에 따라 검색 기능을 사용해 시간을 절약하세요. 원하는 문서나 작업이
            표시됩니다.
          </Function>
          <More>
            자세히 알아보기{' '}
            <HiArrowNarrowRight style={{ transform: 'translate(0, 2px)' }} />
          </More>
        </Item>
      </List>
    </Content>
  </Container>
);

export default FeatureSection;
