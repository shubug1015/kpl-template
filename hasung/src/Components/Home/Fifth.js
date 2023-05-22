import React from 'react';
import styled from 'styled-components';
import { IoIosPeople, IoIosFiling, IoIosPhonePortrait } from 'react-icons/io';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  background-color: #eff3f7;
  width: 100%;
  padding: 70px 0;
  margin-top: 100px;
`;

const TopContainer = styled.div`
  width: 75%;
  margin-bottom: 50px;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  @media only screen and (max-width: 765px) {
    font-size: 25px;
  }
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  opacity: 0.7;
`;

const BottomContainer = styled.div`
  ${(props) => props.theme.flexBetweenCenter};
  flex-wrap: wrap;
  width: 75%;
`;

const Box = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  width: 30%;
  margin-bottom: 50px;
`;

const BoxIcon = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color: #c6c8ef;
  border-radius: 50px;
  width: 70px;
  height: 70px;
  color: ${(props) => props.theme.mainColor};
  font-size: 36px;
  margin-bottom: 40px;
`;

const BoxTitle = styled.div`
  margin-bottom: 20px;
`;

const BoxContent = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 14px;
  }
  font-size: 15px;
  line-height: 22px;
  opacity: 0.7;
  word-break: keep-all;
`;

const Fifth = () => {
  const list = [
    {
      id: 0,
      icon: <IoIosPeople />,
      title: '건축사와 건설사가 찾아옵니다.',
      content:
        '직접 찾지 않아도, 공고만 올리면 건축사와 건설사가 포트폴리오와 견적을 들고 찾아옵니다.',
    },
    {
      id: 1,
      icon: <IoIosFiling />,
      title: '모든 건축 과정을 온라인으로 관리합니다.',
      content:
        '설계 도면 관리, 공사 현장 관리 모두 하성 온라인으로 간편하게 관리합니다.',
    },
    {
      id: 2,
      icon: <IoIosPhonePortrait />,
      title: '개인 비서처럼 가이드 합니다.',
      content:
        '복잡한 건축 과정, 개인 비서처럼 필요한 시기에 해야 할 일을 문자 알림으로 꼼꼼하게 챙겨드립니다.',
    },
  ];

  return (
    <Container>
      <TopContainer>
        <Title>하성 건축 관리</Title>
        <Title>언제 어디서든 쉽고 간편합니다.</Title>
      </TopContainer>
      <BottomContainer>
        {list.map((l) => (
          <Box key={l.id}>
            <BoxIcon>{l.icon}</BoxIcon>
            <BoxTitle>{l.title}</BoxTitle>
            <BoxContent>{l.content}</BoxContent>
          </Box>
        ))}
      </BottomContainer>
    </Container>
  );
};

export default Fifth;
