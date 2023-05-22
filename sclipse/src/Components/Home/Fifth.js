import React from 'react';
import styled from 'styled-components';
import { BsFillChatDotsFill, BsCalendar } from 'react-icons/bs';
import { MdSecurity } from 'react-icons/md';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  background-color: #ececec;
  width: 100%;
  padding: 100px 0;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 30px;
    width: 80%;
  }
  width: 50%;
  :not(:first-child) {
    margin-top: 10px;
  }
  text-align: center;
  font-size: 50px;
  font-weight: 900;
  opacity: 0.8;
  word-break: keep-all;
  line-height: 1.33;
`;

const BoxContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.flexCenter}
  margin-top: 80px;
`;

const Box = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 300px;
  padding: 45px;
  :not(:first-child) {
    margin-left: 50px;
  }
  @media only screen and (max-width: 900px) {
    width: 400px;
    :not(:first-child) {
      margin-top: 20px;
      margin-left: 0;
    }
  }
`;

const BoxTitle = styled.div`
  :not(:first-child) {
    margin-top: 5px;
  }
  font-size: 24px;
`;

const BoxContent = styled.div`
  :first-child {
    margin-top: 15px;
  }
  :not(:first-child) {
    margin-top: 5px;
  }
  opacity: 0.8;
`;

const Icon = styled.div`
  position: absolute;
  right: 45px;
  bottom: 30px;
  color: ${(props) => props.theme.mainColor};
  font-size: 33px;
`;

const Fifth = () => {
  const list = [
    {
      id: 0,
      title1: '번역가와',
      title2: '실시간 1:1 채팅',
      content1: '실시간 채팅으로 번역 퀄리티를 한층 높일',
      content2: '수 있습니다.',
      icon: <BsFillChatDotsFill />,
    },
    {
      id: 1,
      title1: '직접 정하는 마감일',
      content1: '번역가들은 요청 날짜에 맞춰서 번역을',
      content2: '제공합니다.',
      icon: <BsCalendar />,
    },
    {
      id: 2,
      title1: '간편하고',
      title2: '안전한 시스템',
      content1: '의뢰, 결제, 번역 자막 납품까지',
      content2: '스크립스에서 안전하게 진행하세요.',
      icon: <MdSecurity />,
    },
  ];

  return (
    <Container>
      <Title>크리에이터를 위한 스크립스만의 영상 맞춤 자막 번역 서비스</Title>
      <BoxContainer>
        {list.map((l) => (
          <Box key={l.id}>
            <BoxTitle>{l.title1}</BoxTitle>
            <BoxTitle>{l.title2}</BoxTitle>
            <BoxContent style={{ marginTop: '30px' }}>{l.content1}</BoxContent>
            <BoxContent>{l.content2}</BoxContent>
            <Icon>{l.icon}</Icon>
          </Box>
        ))}
      </BoxContainer>
    </Container>
  );
};

export default Fifth;
