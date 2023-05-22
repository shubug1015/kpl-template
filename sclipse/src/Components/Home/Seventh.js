import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  padding: 150px 0;
  overflow: hidden;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    width: 500px;
  }
  ${(props) => props.theme.columnStartCenter}
  width: calc(500px + 35vw);
  margin-bottom: 80px;
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

const Text = styled.div`
  ${(props) => props.theme.flexCenter}
  border-radius: 4px;
  margin-top: 30px;
  font-size: 12px;
  opacity: 0.6;
`;

const BoxContainer = styled.div`
  @keyframes move-in-steps {
    0% {
      left: 100%;
    }
    100% {
      left: -100%;
    }
  }
  ${(props) => props.theme.flexCenter}
  position: relative;
  animation: move-in-steps 40s linear infinite;
`;

const ProfileBox = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 4px 12px 0 rgba(34, 34, 34, 0.08);
  width: 240px;
  height: 200px;
`;

const Name = styled.div``;

const Number = styled.div``;

const ContentBox = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  background-color: #ececec;
  border-radius: 5px;
  width: 320px;
  height: 200px;
  margin: 0 20px;
`;

const Link = styled.div``;

const Seventh = () => {
  const list = [
    {
      id: 0,
      name: '백종원',
      content: 'a',
    },
    {
      id: 1,
      name: 'CJ tvnD',
      content: 'b',
    },
    {
      id: 2,
      name: '떵게떵',
      content: 'c',
    },
    {
      id: 3,
      name: '떵게떵',
      content: 'd',
    },
    {
      id: 4,
      name: '떵게떵',
      content: 'e',
    },
    {
      id: 5,
      name: '떵게떵',
      content: 'f',
    },
    {
      id: 6,
      name: '떵게떵',
      content: '마지막',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Content data-aos='fade-up' data-aos-duration='1500'>
        <Title>스크립스는 다양한</Title>
        <Title>장르의 크리에이터와</Title>
        <Title>함께 합니다.</Title>
        <Text>2020년 6월 기준 자료입니다.</Text>
      </Content>
      <BoxContainer>
        {list.map((l) => (
          <Fragment key={l.id}>
            <ProfileBox>
              <Name>{l.name}</Name>
              <Number></Number>
              <Link>채널 바로가기</Link>
            </ProfileBox>
            <ContentBox>{l.content}</ContentBox>
          </Fragment>
        ))}
      </BoxContainer>
    </Container>
  );
};

export default Seventh;
