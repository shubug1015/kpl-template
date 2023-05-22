import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  color: #ffffff;
`;

const Backdrop = styled.div`
  @media only screen and (max-width: 900px) {
    height: 1300px;
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
    left: 0%;
    padding: 0 30px;
    top: 100px;
  }
  position: absolute;
  top: 150px;
  left: 8%;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 12px;
  }
  margin-bottom: 30px;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 900;
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
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnStartCenter};
    width: 90%;
    left: 5%;
  }
  ${(props) => props.theme.flexStartCenter}
  flex-wrap: wrap;
  position: absolute;
  top: 400px;
  left: 120px;
  width: 80%;
`;

const Section = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 48%;
  height: 180px;
  margin-right: 1%;
`;

const Icon = styled.div`
  margin-right: 30px;
  font-size: 100px;
  font-weight: 100;
  opacity: 0.5;
`;

const Item = styled.div``;

const Name = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 20px;
  }
  margin-bottom: 15px;
  font-size: 24px;
  word-break: keep-all;
  line-height: 30px;
`;

const Intro = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 13px;
  }
  font-size: 15px;
  line-height: 24px;
  word-break: keep-all;
`;

const Btn = styled.div`
  @media only screen and (max-width: 900px) {
    left: 50%;
    transform: translate(-50%, -50%);
    width: 210px;
    height: 50px;
    font-size: 17px;
    bottom: 100px;
  }
  ${(props) => props.theme.flexCenter}
  position: absolute;
  bottom: 150px;
  left: 120px;
  width: 270px;
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

const Thrid = ({ ref3 }) => {
  const list = [
    {
      id: 0,
      icon: '1',
      name: '브랜딩 커뮤니케이션',
      intro:
        '각광 받는 브랜드 스토리, 업계 트렌드 등을 공유하고 인사이트를 얻습니다.',
    },
    {
      id: 1,
      icon: '2',
      name: 'COOKING & TALKING',
      intro:
        '공유 주방에서 자신의 요리를 나누고 영화를 감상하거나 이야기를 나누며 여가를 즐깁니다.',
    },
    {
      id: 2,
      icon: '3',
      name: '누구나 학생, 누구나 선생',
      intro:
        '특정 분야의 전문가인 입주자를 선생님으로 모시고 새로운 분야의 지식을 쌓습니다.',
    },
    {
      id: 3,
      icon: '4',
      name: 'MUSIC OF THE NIGHT',
      intro:
        '탁 트인 루프톱에서 자신이 좋아하는 음악을 공유하고 감성을 나눕니다.',
    },
  ];

  return (
    <Container ref={ref3}>
      <Backdrop bgUrl={require('Components/assets/third.png')} />
      <Content>
        <Title>DREAMING COMMUNITY</Title>
        <Brand>꿈을 꾸는 사람들</Brand>
        <Text>커뮤니티 프로그램을 직접 기획하고 참여할 수 있습니다.</Text>
        <Text>
          이웃과 함께 꿈을 공유하고 응원하며 새로운 영감을 맞이하는 경험이
          기다립니다.
        </Text>
      </Content>
      <List>
        {list.map((l) => (
          <Section key={l.id}>
            <Icon>{l.icon}</Icon>
            <Item>
              <Name>{l.name}</Name>
              <Intro>{l.intro}</Intro>
            </Item>
          </Section>
        ))}
      </List>
      <Btn>상세 입주정보 보기 {'>'}</Btn>
    </Container>
  );
};

export default Thrid;
