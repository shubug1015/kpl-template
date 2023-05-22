import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    padding: 100px 0;
  }
  width: 100%;
  padding: 200px 0;
  background-color: #111111;
  color: #ffffff;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    padding-left: 30px;
  }
  padding-left: 118px;
  margin-bottom: 100px;
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

const TextContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnStartCenter};
  }
  ${(props) => props.theme.flexStartCenter};
`;

const Text = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 15px;
    line-height: 25px;
  }
  font-size: 18px;
  margin-right: 10px;
`;

const List = styled.div`
  ${(props) => props.theme.flexCenter}
  flex-wrap: wrap;
  width: 100%;
`;

const Item = styled.div`
  position: relative;
  width: 360px;
  height: 360px;
  margin: 20px 10px;
`;

const Backdrop = styled.div`
  position: absolute;
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  background-color: #dbdbdb;
  width: 360px;
  height: 360px;
  opacity: 0.3;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Box = styled.div`
  ${(props) => props.theme.flexCenter}
  position: absolute;
  top: 0;
  left: 0;
  width: 65px;
  height: 65px;
  background-color: ${(props) => (props.box ? '#92a2db' : '#d0b7d5')};
  color: #ffffff;
  font-size: 60px;
  font-weight: 100;
`;

const Name = styled.div`
  position: absolute;
  top: 60%;
  left: 30px;
  width: 240px;
  color: #ffffff;
  font-size: 26px;
  font-weight: 900;
  word-break: keep-all;
  line-height: 35px;
`;

const Sixth = ({ ref6 }) => {
  const list = [
    {
      id: 0,
      box: '1',
      image: require('Components/assets/sixth_1.png'),
      name: '오피시아 브랜딩 클래스 참여 기회',
    },
    {
      id: 1,
      box: '2',
      image: require('Components/assets/sixth_2.png'),
      name: '타이탄스쿨 이벤트 / 프로모션 참여 기회',
    },
    {
      id: 2,
      box: '3',
      image: require('Components/assets/sixth_3.png'),
      name: 'COMMUNITOWN 로컬 리소스 이용 기회',
    },
  ];

  return (
    <Container ref={ref6}>
      <Content>
        <Title>BRANDING OPPERTUNITIES</Title>
        <Brand>나 자신의 브랜드를 만드는 기회</Brand>
        <TextContainer>
          <Text>입주자가 자신만의 브랜드를 만들고 키워나갈 수 있도록</Text>
          <Text> 오피시아 강남만의 프로그램을 통해 지원합니다.</Text>
        </TextContainer>
      </Content>
      <List>
        {list.map((l) => (
          <Item key={l.id}>
            <Backdrop bgUrl={l.image} />
            <Box box={l.box === '1' || l.box === '3'}>{l.box}</Box>
            <Name>{l.name}</Name>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Sixth;
