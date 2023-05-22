import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100%;
  padding: 100px 0;
  background-color: #f9fafb;
`;

const TitleContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  ${(props) => props.theme.flexBetweenCenter};
  width: 75%;
`;

const TitleText = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnStartCenter};
    font-size: 25px;
  }
  display: flex;
  font-size: 30px;
  color: #444444;
  line-height: 35px;
`;

const Btn = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`;

const Text = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
    font-size: 16px;
  }
  width: 75%;
  padding: 30px 0;
  font-size: 19px;
  font-weight: 700;
  opacity: 0.6;
`;

const SectionContainer = styled.div`
  ${(props) => props.theme.flexBetweenCenter};
  flex-wrap: wrap;
  width: 75%;
  margin: 50px 0;
`;

const Section = styled.div`
  width: 30%;
  padding-bottom: 20px;
  cursor: pointer;
  background-color: white;
`;

const SectionImg = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: ${(props) => (props.focus ? '100%' : 0)};
  height: 220px;
  transition: width 0.3s ease-in-out;
  cursor: pointer;
`;

const SectionName = styled.div`
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 700;
  opacity: 0.8;
`;

const Content = styled.div`
  ${(props) => props.theme.flexBetweenCenter};
  padding: 10px 20px;
`;

const ContentName = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const ContentValue = styled.div`
  font-size: 14px;
  font-weight: 700;
  opacity: 0.8;
`;

const Eighth = () => {
  const list = [
    {
      id: 0,
      name: '경기 고양시 주택',
      rate: '-3.1%',
      price: '1,432,000,000원',
    },
    { id: 1, name: '김해시 상가', rate: '-4.7%', price: '1,074,800,000원' },
    {
      id: 2,
      name: '서울시 서초구 주택',
      rate: '-6.3%',
      price: '925,800,000원',
    },
  ];

  return (
    <Container>
      <TitleContainer>
        <TitleText>
          하성에서 건축한
          <p style={{ color: 'black', margin: '0 5px' }}>300건 이상의 현장</p>
          확인하기
        </TitleText>
        <Btn>더보기 {'>'}</Btn>
      </TitleContainer>
      <Text>준공된 현장은 물론 현재 진행 중인 현장도 확인해보세요.</Text>
      <SectionContainer>
        {list.map((l) => (
          <Section key={l.id}>
            <SectionImg
              bgUrl={require(`Components/assets/Work/eighth-${l.id + 1}.png`)}
            />
            <Cover />
            <SectionName>{l.name}</SectionName>
            <Content>
              <ContentName>공사비 증감률</ContentName>
              <ContentValue>{l.rate}</ContentValue>
            </Content>
            <Content>
              <ContentName>공사비</ContentName>
              <ContentValue>{l.price}</ContentValue>
            </Content>
          </Section>
        ))}
      </SectionContainer>
    </Container>
  );
};

export default Eighth;
