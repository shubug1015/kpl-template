import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BsEye } from 'react-icons/bs';
import {
  AiOutlineCodeSandbox,
  AiOutlineDeploymentUnit,
  AiOutlineBlock,
} from 'react-icons/ai';
import { HiOutlineArrowDown } from 'react-icons/hi';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 85%;
  padding-bottom: ${(props) => props.theme.pagePadding};
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 30px;
    line-height: 40px;
    letter-spacing: -0.6px;
    padding: 40px 0;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 100%;
  font-size: 68px;
  line-height: 84px;
  font-weight: 700;
  letter-spacing: -1.4px;
  padding: 100px 0;
`;

const Text = styled.div`
  max-width: 1000px;
  ::selection {
    ${(props) => props.theme.textSelection}
  }
`;

const SectionContainer = styled.div`
  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
  padding: 50px 0;
`;

const Section = styled.div`
  @media only screen and (max-width: 900px) {
    width: 48%;
    margin: 0 1%;
    margin-bottom: 30px;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 25%;
`;

const SectionIcon = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 60px;
  }
  color: ${(props) => props.theme.mainColor};
  font-size: 70px;
`;

const SectionTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 16px;
    line-height: 24px;
  }

  font-weight: 700;
  font-size: 24px;
  /* line-height: 36px; */
  margin-top: 10px;
  margin-bottom: 15px;
  letter-spacing: -0.1px;
  ::selection {
    ${(props) => props.theme.textSelection}
  }
`;

const SectionText = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 13px;
    line-height: 20px;
    word-break: keep-all;
  }
  max-width: 240px;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #333;
  word-break: keep-all;
  ::selection {
    ${(props) => props.theme.textSelection}
  }
`;

const bounce = keyframes`
  0% {
    transform: translate(0, -30px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Arrow = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  ${(props) => props.theme.flexCenter}
  position: absolute;
  top: 832px;
  right: 92px;
  z-index: 100;
  width: 40px;
  height: 40px;
  animation: ${bounce} 1.5s infinite;
  font-size: 25px;
`;

const Main = ({ mainRef }) => {
  const sectionList = [
    {
      id: 0,
      icon: (
        <SectionIcon>
          <BsEye />
        </SectionIcon>
      ),
      title: 'Service',
      text: '사람에 대한 이해와 공감으로부터 문제를 발견합니다.',
    },
    {
      id: 1,
      icon: (
        <SectionIcon>
          <AiOutlineCodeSandbox />
        </SectionIcon>
      ),
      title: 'Work',
      text: '비즈니스와 기술에 대한 통찰력 있는 이해로부터 해법을 만듭니다.',
    },
    {
      id: 2,
      icon: (
        <SectionIcon>
          <AiOutlineDeploymentUnit />
        </SectionIcon>
      ),
      title: 'Story',
      text: '실패로부터 배우고 지식을 공유하여 모두의 경험을 확장합니다.',
    },
    {
      id: 3,
      icon: (
        <SectionIcon>
          <AiOutlineBlock />
        </SectionIcon>
      ),
      title: 'People',
      text: '좋은 사람들과 함께하는 우리의 시간을 소개합니다.',
    },
  ];

  return (
    <Container ref={mainRef}>
      <TextContainer>
        <Text>pxd is an innovative design consulting group.</Text>
        <Text>We connect people and design with a happy experience.</Text>
      </TextContainer>
      <SectionContainer>
        {sectionList.map((s) => (
          <Section key={s.id}>
            {s.icon}
            <SectionTitle>{s.title}</SectionTitle>
            <SectionText>{s.text}</SectionText>
          </Section>
        ))}
        <Arrow>
          <HiOutlineArrowDown />
        </Arrow>
      </SectionContainer>
    </Container>
  );
};

export default Main;
