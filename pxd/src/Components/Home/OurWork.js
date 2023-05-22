import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${(props) => props.theme.pagePadding};
  width: 85%;
`;

const TitleContainer = styled.div`
  position: ${(props) => (props.controllerProp ? 'fixed' : 'static')};
  top: ${(props) => props.controllerProp && props.theme.headerHeight};
  width: 35%;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 40px;
  ::selection {
    ${(props) => props.theme.textSelection}
  }
`;

const More = styled.div`
  margin-top: 16px;
  line-height: 24px;
  opacity: 0.7;
  ::selection {
    ${(props) => props.theme.textSelection}
  }
`;

const ContentContainer = styled.div`
  ${(props) => props.theme.columnStartCenter}
  width: 65%;
  margin-left: ${(props) => props.controllerProp && '35%'};
`;

const Content = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 36px;
  letter-spacing: -0.2px;
  word-break: keep-all;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 150px;
`;

const Section = styled.div`
  display: ${(props) => (props.lastProp ? 'flex' : 'column')};
  justify-content: ${(props) => (props.lastProp ? 'space-between' : '')};
  align-items: ${(props) => (props.lastProp ? 'center' : '')};
  width: ${(props) => props.widthProp};
  height: ${(props) => props.heightProp};
  word-break: keep-all;
`;

const SectionImg = styled.div`
  background-color: #dbdbdb;
  width: ${(props) => (props.lastProp ? '54%' : '100%')};
  height: ${(props) => (props.lastProp ? '100%' : '50%')};
`;

const SectionContent = styled.div`
  width: ${(props) => (props.lastProp ? '35%' : '100%')};
  margin-top: 28px;
  font-weight: 500;
`;

const SectionTitle = styled.div`
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -1.2px;
  line-height: 52px;
  ::selection {
    ${(props) => props.theme.textSelection}
  }
`;

const SectionCompany = styled.div`
  margin-top: 16px;
  line-height: 26px;
  opacity: 0.7;
  ::selection {
    ${(props) => props.theme.textSelection}
  }
`;

const OurWork = ({ ourWorkRef, controller }) => {
  const list = [
    {
      id: 0,
      img: '',
      width: '18vw',
      height: '36vw',
      title: '모이는 순간 독서가 된다. Just Show Up',
      company: '지앤엠글로벌문화재단',
    },
    {
      id: 1,
      img: '',
      width: '26vw',
      height: '52vw',
      title: '올바른 투자습관을 길러주는 주식 투자 스타터, STEPS',
      company: 'Hanwha Investment & Securities Co',
    },
    {
      id: 2,
      img: '',
      width: '100%',
      height: '30vw',
      title: '고깃집 사장님의 미트 큐레이터, 미트박스',
      company: '(주)글로벌네트웍스',
    },
  ];

  return (
    <Container ref={ourWorkRef}>
      <TitleContainer controllerProp={controller === 'OurWork'}>
        <Title>Our work</Title>
        <More>More</More>
      </TitleContainer>
      <ContentContainer controllerProp={controller === 'OurWork'}>
        <Content>
          비즈니스와 기술에 대한 통찰력 있는 이해로부터 해법을 만듭니다.
        </Content>
        <SectionContainer>
          {list &&
            list.length > 0 &&
            list.map((l) => (
              <Section
                key={l.id}
                lastProp={l.id === 2}
                widthProp={l.width}
                heightProp={l.height}
              >
                <SectionImg
                  // imgUrl={require(l.img)}
                  lastProp={l.id === 2}
                />
                <SectionContent lastProp={l.id === 2}>
                  <SectionTitle>{l.title}</SectionTitle>
                  <SectionCompany>{l.company}</SectionCompany>
                </SectionContent>
              </Section>
            ))}
        </SectionContainer>
      </ContentContainer>
    </Container>
  );
};

export default OurWork;
