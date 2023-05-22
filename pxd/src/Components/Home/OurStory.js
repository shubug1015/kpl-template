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
  ::selection {
    ${(props) => props.theme.textSelection}
  }
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
  margin-top: ${(props) => (props.lastProp ? 0 : '28px')};
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

const OurStory = ({ ourStoryRef, controller }) => {
  const list = [
    {
      id: 0,
      img: '',
      width: '22vw',
      height: '22vw',
      title: '디자인 시스템 1편 - 디자인 가이드/디자인 시스템은 왜 필요한가',
      company: 'UI 가벼운 이야기・Sep 9, 2019',
    },
    {
      id: 1,
      img: '',
      width: '26vw',
      height: '35vw',
      title: '3D 지도의 내비게이션 제스쳐',
      company: 'UI 가벼운 이야기・May 13, 2019',
    },
    {
      id: 2,
      img: '',
      width: '100%',
      height: '16vw',
      title: 'UX의 미래는 여기있다',
      company: 'UI 가벼운 이야기・Oct 23, 2017',
    },
  ];

  return (
    <Container ref={ourStoryRef}>
      <TitleContainer controllerProp={controller === 'OurStory'}>
        <Title>Our story</Title>
        <More>More</More>
      </TitleContainer>
      <ContentContainer controllerProp={controller === 'OurStory'}>
        <Content>
          실패로부터 배우고 지식을 공유하여 모두의 경험을 확장합니다.
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

export default OurStory;
