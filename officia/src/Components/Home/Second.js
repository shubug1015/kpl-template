import React from 'react';
import styled from 'styled-components';
import { GiBarbecue } from 'react-icons/gi';
import { IoHomeOutline, IoCafeOutline } from 'react-icons/io5';
import { BsPencil } from 'react-icons/bs';
import { AiOutlineVideoCamera } from 'react-icons/ai';

const Container = styled.div`
  position: relative;
  width: 100%;
  color: #ffffff;
`;

const Backdrop = styled.div`
  @media only screen and (max-width: 1400px) {
    height: 1100px;
  }
  @media only screen and (max-width: 1100px) {
    height: 1600px;
  }
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 1048px;
  filter: brightness(20%);
`;

const Content = styled.div`
  @media only screen and (max-width: 765px) {
    padding: 0 30px;
    left: 0;
  }
  position: absolute;
  top: 150px;
  left: 8%;
`;

const Title = styled.div`
  margin-bottom: 30px;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
`;

const Brand = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 35px;
    line-height: 50px;
  }
  margin-bottom: 40px;
  font-size: 55px;
  font-weight: 900;
`;

const Text = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 15px;
  }
  font-size: 18px;
  line-height: 29px;
  font-weight: 500;
`;

const List = styled.div`
  @media only screen and (max-width: 1400px) {
    width: 100%;
    top: 400px;
    left: 0px;
  }
  @media only screen and (max-width: 1100px) {
    ${(props) => props.theme.columnCenter}
    width: 100%;
    top: 450px;
    left: 0px;
  }
  ${(props) => props.theme.flexBetweenCenter}
  flex-wrap: wrap;
  position: absolute;
  top: 250px;
  right: 50px;
  width: 1100px;
`;

const Section = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 80%;
  }
  @media only screen and (max-width: 765px) {
    width: 95%;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 510px;
  height: ${(props) => (props.show ? '0px' : '180px')};
`;

const Icon = styled.div`
  margin-right: 30px;
  font-size: 70px;
  opacity: 0.5;
`;

const Item = styled.div``;

const ListTitle = styled.div`
  ${(props) => props.theme.flexStartCenter}
  margin-bottom: 15px;
`;

const Floor = styled.div`
  @media only screen and (max-width: 1100px) {
    font-size: 18px;
  }
  margin-right: 30px;
  font-size: 24px;
  font-weight: 900;
`;

const Name = styled.div`
  @media only screen and (max-width: 1100px) {
    font-size: 18px;
  }
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 900;
`;

const Intro = styled.div`
  @media only screen and (max-width: 1100px) {
    font-size: 14px;
  }
  font-size: 15px;
  line-height: 24px;
  word-break: keep-all;
`;

const Btn = styled.div`
  @media only screen and (max-width: 1400px) {
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 150px;
    width: 180px;
    height: 55px;
    font-size: 16px;
  }
  ${(props) => props.theme.flexCenter}
  position: absolute;
  bottom: 150px;
  right: 100px;
  width: 234px;
  height: 63px;
  font-size: 20px;
  border-radius: 50px;
  border: 2px solid #ffffff;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Second = ({ ref2 }) => {
  const list = [
    {
      id: 0,
      icon: '',
      floor: '',
      name: '',
      intro: '',
    },
    {
      id: 1,
      icon: <GiBarbecue />,
      floor: 'RF',
      name: 'GARDEN',
      intro:
        '탁 트인 옥상정원은 일상 속에서 즐기는 여유와 해방감을 선사합니다.',
    },
    {
      id: 2,
      icon: <IoHomeOutline />,
      floor: '3-5F',
      name: 'ROOMS, LIVING & KITCHEN',
      intro:
        '입주자는 모두 1인실에 거주하며 프라이버시를 보호받습니다. 거실 및 주방은 넓고 쾌적하게 함께 사용합니다.',
    },
    {
      id: 3,
      icon: <BsPencil />,
      floor: '2F',
      name: 'LOUNGE & MEETING ROOM',
      intro:
        '아이디어 회의, 미니 클래스 등을 진행할 수 있는 라운지와 미팅룸이 마련되어 있습니다.',
    },
    {
      id: 4,
      icon: <IoCafeOutline />,
      floor: '1F',
      name: 'CAFE',
      intro: '입주자는 물론 지역민에게도 열려있는 오픈 커뮤니티 카페입니다.',
    },
    {
      id: 5,
      icon: <AiOutlineVideoCamera />,
      floor: 'B1F',
      name: 'LOFT',
      intro:
        '영상 및 사진 촬영과 편집 등이 가능한 입주 멤버십 전용 공간입니다.',
    },
  ];

  return (
    <Container ref={ref2}>
      <Backdrop bgUrl={require('Components/assets/second_1.png')} />
      <Content>
        <Title>CONCENTRATION SPACE</Title>
        <Brand>나만의 공간, 모두의 공간</Brand>
        <Text>혼자만의 공간에서 최고를 향해 달려가세요.</Text>
        <Text>함께하는 공간에서 소통과 영감의 순간을 경험하세요.</Text>
      </Content>
      <List>
        {list.map((l) => (
          <Section key={l.id} show={l.id === 0}>
            <Icon>{l.icon}</Icon>
            <Item>
              <ListTitle>
                <Floor>{l.floor}</Floor>
                <Name>{l.name}</Name>
              </ListTitle>
              <Intro>{l.intro}</Intro>
            </Item>
          </Section>
        ))}
      </List>
      <Btn>층별 사진 보기 {'>'}</Btn>
    </Container>
  );
};

export default Second;
