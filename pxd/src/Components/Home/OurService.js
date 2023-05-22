import React from 'react';
import styled from 'styled-components';
import { AiOutlineBlock } from 'react-icons/ai';

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
  width: 47%;
  height: 30vw;
  word-break: keep-all;
`;

const SectionIcon = styled.div`
  font-size: 100px;
`;

const SectionContent = styled.div`
  margin-top: 28px;
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

const OurService = ({ ourServiceRef, controller }) => {
  const list = [
    {
      id: 0,
      icon: <AiOutlineBlock />,
      title: 'UX / CX / SX Consulting',
      company:
        'User / Customer / Service Experience 고객과 사용자의 근본적인 문제에서 출발하여 서비스와 제품이 나아갈 방향을 탐색합니다.',
    },
    {
      id: 1,
      icon: <AiOutlineBlock />,
      title: 'Data Driven UXD Process',
      company:
        '데이터로 고객과 서비스를 이해하고 성과를 측정하여 근거에 기반한 디자인을 합니다.',
    },
    {
      id: 2,
      icon: <AiOutlineBlock />,
      title: 'UX Tech Lab',
      company:
        '빠른 MVP 프로토타이핑으로 실패로부터 문제를 해결하고 새로운 UI와 인터랙션을 디자인하는 UX Tech Lab의 이상하고 재미있는 실험을 소개합니다.',
    },
    {
      id: 3,
      icon: <AiOutlineBlock />,
      title: 'Rapid UX Design Process',
      company:
        '급변하는 서비스 환경에 대응하기 위해 pxd 컨설팅 방법론의 핵심을 축약하여 정립된 프로세스입니다. 연간 업무단위 유형의 과제에 최적화 되어 있습니다.',
    },
    {
      id: 4,
      icon: <AiOutlineBlock />,
      title: '경험 개발그룹 (Front-end Dev Group)',
      company:
        'pxd 경험 개발그룹은 사용자가 직접 경험하는 Front-end의 아키텍쳐 설계 및 개발을 합니다.',
    },
  ];

  return (
    <Container ref={ourServiceRef}>
      <TitleContainer controllerProp={controller === 'OurService'}>
        <Title>Our service</Title>
        <More>More</More>
      </TitleContainer>
      <ContentContainer controllerProp={controller === 'OurService'}>
        <Content>사람에 대한 이해와 공감으로부터 문제를 발견합니다.</Content>
        <SectionContainer>
          {list &&
            list.length > 0 &&
            list.map((l) => (
              <Section key={l.id}>
                <SectionIcon>{l.icon}</SectionIcon>
                <SectionContent>
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

export default OurService;
