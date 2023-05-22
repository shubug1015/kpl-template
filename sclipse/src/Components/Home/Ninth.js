import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
  padding: 150px 0;
  overflow: hidden;
`;

const LeftContent = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    width: 100%;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 500px;
  margin-bottom: 80px;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
    font-size: 36px;
  }
  :not(:first-child) {
    margin-top: 20px;
  }
  font-size: 45px;
  font-weight: 900;
  opacity: 0.8;
`;

const RightContent = styled.div`
  @media only screen and (max-width: 900px) {
    width: 400px;
  }
  ${(props) => props.theme.columnStartCenter}
  width: 600px;
  margin-bottom: 80px;
`;

const QuestionTitle = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 16px;
  }
  ${(props) => props.theme.flexBetweenCenter}
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  height: 80px;
  font-size: 20px;
  font-weight: 700;
  background-color: ${(props) => props.focus && '#dbd2c9'};
  border-radius: 5px;
  padding: 0 15px;
  color: ${(props) => props.focus && props.theme.mainColor};
  opacity: ${(props) => (props.focus ? 1 : 0.7)};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  word-break: keep-all;
  line-height: 1.33;
`;

const QuestionText = styled.div`
  word-break: keep-all;
  line-height: 1.8;
  padding: ${(props) => (props.focus ? '20px' : '0 20px')};
  height: ${(props) => (props.focus ? '150px' : '0px')};
  overflow: hidden;
  transition: height 0.3s ease-in-out, padding 0.3s ease-in-out;
`;

const Ninth = () => {
  const [question, setQuestion] = useState({
    question1: false,
    question2: false,
    question3: false,
  });

  const getQuestion = (id) => {
    if (id === 0) {
      setQuestion({
        question1: !question.question1,
        question2: false,
        question3: false,
      });
    } else if (id === 1) {
      setQuestion({
        question1: false,
        question2: !question.question2,
        question3: false,
      });
    } else if (id === 2) {
      setQuestion({
        question1: false,
        question2: false,
        question3: !question.question3,
      });
    }
  };

  const list = [
    {
      id: 0,
      type: question.question1,
      title: 'Q. 스크립스의 유튜브 자막번역 비용은 왜 저렴한가요?',
      content:
        '스크립스는 기존 자막 번역 교청을 위한 복잡한 단계를 간소화함으로써 스타 크리에이터, MCN 제휴 등으로 높아진 업계 평균 비용을 낮추었습니다.',
    },
    {
      id: 1,
      type: question.question2,
      title: 'Q. 어떻게 자막 번역을 의뢰하나요?',
      content: '유튜브에 업로드 된 영상 링크만 있으면 가능합니다.',
    },
    {
      id: 2,
      type: question.question3,
      title: 'Q. 유튜브 다국어 자막의 장점은 무엇인가요?',
      content:
        '해외 시청자를 유입시켜 구독자 수, 조회수를 늘릴 수 있습니다. 유튜브 cc 자막 삽입 시 자막 텍스트가 검색 엔진에 활용됩니다. 유튜브 알고리즘 최적화, 유튜브 및 구글 검색 엔진 최적화에 도움이 됩니다. 해외 광고 노출로 인한 광고 수익이 상승합니다.',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <LeftContent data-aos='fade-up' data-aos-duration='1500'>
        <Title>어떤 점이</Title>
        <Title>궁금하신가요?</Title>
      </LeftContent>
      <RightContent>
        {list.map((l) => (
          <Fragment key={l.id}>
            <QuestionTitle onClick={() => getQuestion(l.id)} focus={l.type}>
              {l.title}
              {l.type ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </QuestionTitle>
            {/* {l.id === 0 && l.type && <QuestionText>{l.content}</QuestionText>}
            {l.id === 1 && l.type && <QuestionText>{l.content}</QuestionText>}
            {l.id === 2 && l.type && <QuestionText>{l.content}</QuestionText>} */}
            <QuestionText focus={l.type}>{l.content}</QuestionText>
          </Fragment>
        ))}
      </RightContent>
    </Container>
  );
};

export default Ninth;
