import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  ${(props) => props.theme.columnCenter};
  background-color: ${(props) => props.theme.mainColor};
  /* background-color: #e0e2f9; */
  width: 100%;
  padding: 100px 0;
  color: #ffffff;
  position: ${(props) => (props.scroll ? 'relative' : 'static')};
  margin-top: 100px;
`;

const LeftContainer = styled.div`
  position: ${(props) => (props.scroll ? 'fixed' : 'static')};
  top: 175px;
  left: 12.5%;
  width: 75%;
`;

const SubTitle = styled.div`
  font-size: 20px;
  opacity: 0.8;
  margin-bottom: 25px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.scroll ? 'flex-end' : 'flex-start')};
  width: 75%;
`;

const Image = styled.div`
  background-color: #ffffff;
  box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 35vw;
  height: 25vw;
  margin-top: 50px;
  position: ${(props) => (props.scroll ? 'fixed' : 'static')};
  top: 250px;
  left: 12.5%;
  ${(props) => props.theme.flexCenter}
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
`;

// const Image = styled.div`
//   background-image: url(${(props) => props.imgUrl});
//   background-position: center center;
//   background-size: cover;
// `;

const RightContainer = styled.div`
  width: 50%;
  margin-left: ${(props) => (props.scroll ? '60%' : '0')};
  margin-top: 70px;
  padding-top: 100px;
  padding-bottom: 70px;
  /* background-color: red; */
`;

const Box = styled.div`
  :not(:last-child) {
    margin-bottom: 200px;
  }
  opacity: ${(props) => (props.focus ? 1 : 0.2)};
  transition: opacity 0.3s ease-in-out;
  height: 450px;
`;

const BoxType = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color: #ffffff;
  border-radius: 20px;
  width: 140px;
  height: 30px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.mainColor};
  font-size: 13px;
  font-weight: 700;
`;

const BoxTitleContainer = styled.div`
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
`;

const BoxTitle = styled.div`
  word-break: keep-all;
`;

const BoxContentContainer = styled.div`
  line-height: 25px;
  opacity: 0.9;
`;

const BoxContent = styled.div`
  :not(:last-child) {
    margin-bottom: 15px;
  }
  word-break: keep-all;
`;

const Fourth = () => {
  const [scrollY, setScrollY] = useState({ y: 0 });
  const useScroll = () => {
    const onScroll = () => {
      setScrollY({ y: window.scrollY });
    };
    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    });
    return scrollY;
  };

  const { y } = useScroll();

  const list = [
    {
      id: 0,
      type: '전문가와 사업성 검토',
      title_1: '지금 건축하면 손해일까,',
      title_2: '혼자 고민할 필요 없습니다.',
      content_1:
        '하성과 설계하는 건축주라면, 건축 준비 단계부터 건축 가이드가 함께합니다.',
      content_2:
        '토지 분석, 법규 검토, 세무 상담, 공사 예산, 현장 관리 등 건축에 대한 모든 궁금한 점을 분야별 전문가에게 직접 물어보세요.',
      focus: y < 1700,
    },
    {
      id: 1,
      type: '편리한 건축사 찾기',
      title_1: '직접 찾지 않아도',
      title_2: '건축사가 직접 찾아옵니다.',
      content_1:
        '어려운 건축사사무소 컨택, 더 이상 직접 찾지마세요. 건축 목표를 공고하면 건축사가 설계 의견과 단가,포트폴리오를 들고 설계에 지원합니다.',
      content_2:
        '마음에 드는 건축사를 선정하여 협의 미팅을 가집니다. 미팅에선 건축 목표와 설계 방향을 논의합니다.',
      focus: 1700 < y && y < 2300,
    },
    {
      id: 2,
      type: '합리적인 설계 계약',
      title_1: '다양한 기획설계를 비교하고',
      title_2: '최적의 건축사를 선택합니다.',
      content_1:
        '설계에 지원한 건축사들은 투시도, 입면도, 단면도, 층별 배치도까지 수준 높은 도면으로 기획설계를 제안합니다.',
      content_2:
        '혼자 결정하기 어렵다면 하성 1:1 전담 가이드에게 각 설계안에 대한 조언을 받아볼 수 있습니다.',
      focus: 2300 < y && y < 2900,
    },
    {
      id: 3,
      type: '똑똑한 설계 관리',
      title_1: '궁금한 공사비,',
      title_2: '설계 단계별 공사비를 알려드립니다.',
      content_1:
        '기획설계 도면을 기반으로 공사비가 예측되어 예산까지 비교하고 건축사를 선택할 수 있습니다.',
      content_2:
        '또한 설계 단계별 공사비예측리포트를 제공하여 예산에 맞는 설계가 나올 수 있도록 인도합니다.',
      focus: 2900 < y && y < 3500,
    },
    {
      id: 4,
      type: '꼼꼼한 도면 검토',
      title_1: '설계 도면 잘 몰라도 괜찮아요.',
      title_2: '하성 전문가가 검토해드립니다.',
      content_1:
        '착공 준비 단계에선 하성 설계 전문가가 엄격한 기준으로 꼼꼼하게 도면을 검토하여 건축 목표를 이룰 수 있도록 인도합니다.',
      content_2: '',
      focus: 3500 < y,
    },
  ];

  return (
    <Container scroll={1300 < y && y < 4200}>
      <BottomContainer scroll={4199 < y}>
        <LeftContainer scroll={1300 < y && y < 4200}>
          <SubTitle>사업성 분석부터 도면 검토까지</SubTitle>
          <Title>하성 설계 관리 하나면 끝</Title>
          <Image
            scroll={1300 < y && y < 4200}
            imgUrl={
              y < 1700
                ? require('Components/assets/fourth-1.png')
                : y < 2300
                ? require('Components/assets/fourth-2.png')
                : y < 2900
                ? require('Components/assets/fourth-3.png')
                : y < 3500
                ? require('Components/assets/fourth-4.png')
                : require('Components/assets/sixth_2.png')
            }
          />
        </LeftContainer>
        <RightContainer scroll={1300 < y && y < 4200}>
          {list.map((l) => (
            <Box key={l.id} focus={l.focus}>
              <BoxType>{l.type}</BoxType>
              <BoxTitleContainer>
                <BoxTitle>{l.title_1}</BoxTitle>
                <BoxTitle>{l.title_2}</BoxTitle>
              </BoxTitleContainer>
              <BoxContentContainer>
                <BoxContent>{l.content_1}</BoxContent>
                <BoxContent>{l.content_2}</BoxContent>
              </BoxContentContainer>
            </Box>
          ))}
        </RightContainer>
      </BottomContainer>
    </Container>
  );
};

export default Fourth;
