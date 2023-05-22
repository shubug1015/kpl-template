import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (min-width: 900px) {
    display: none;
  }
  ${(props) => props.theme.columnCenter}
  background-color: ${(props) => props.theme.mainColor};
  width: 100%;
  padding-top: 100px;
  color: #ffffff;
`;

const ContentContainer = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 85%;
`;

const TopContainer = styled.div`
  position: ${(props) => (props.scroll ? 'fixed' : 'static')};
  top: 80px;
  ${(props) => props.theme.columnCenter}
  width: 100%;
  height: 320px;
  background-color: #7579e7;
  z-index: 2;
  padding-top: 20px;
`;

const SubTitle = styled.div`
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: 25px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

const Image = styled.div`
  background-color: #ffffff;
  box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 290px;
  height: 200px;
  margin-top: 20px;
  top: 250px;
  left: 12.5%;
  ${(props) => props.theme.flexCenter}
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
`;

const BottomContainer = styled.div`
  width: 85%;
  padding-top: 100px;
  padding-bottom: 70px;
`;

const Box = styled.div`
  ${(props) => props.theme.columnCenter};

  /* opacity: ${(props) => (props.focus ? 1 : 0.2)}; */
  transition: opacity 0.3s ease-in-out;
  height: 300px;
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
  ${(props) => props.theme.columnCenter};
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
  line-height: 40px;
`;

const BoxTitle = styled.div``;

const FourthSmall = () => {
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
    },
    {
      id: 1,
      type: '편리한 건축사 찾기',
      title_1: '직접 찾지 않아도',
      title_2: '건축사가 직접 찾아옵니다.',
    },
    {
      id: 2,
      type: '합리적인 설계 계약',
      title_1: '다양한 기획설계를 비교하고',
      title_2: '최적의 건축사를 선택합니다.',
    },
    {
      id: 3,
      type: '똑똑한 설계 관리',
      title_1: '궁금한 공사비,',
      title_2: '설계 단계별 공사비를 알려드립니다.',
    },
    {
      id: 4,
      type: '꼼꼼한 도면 검토',
      title_1: '설계 도면 잘 몰라도 괜찮아요.',
      title_2: '하성 전문가가 검토해드립니다.',
    },
  ];

  return (
    <Container>
      <ContentContainer>
        <TopContainer scroll={y > 1850 && y < 3700}>
          <SubTitle>사업성 분석부터 도면 검토까지</SubTitle>
          <Title>하성 설계 관리 하나면 끝</Title>
          <Image
            imgUrl={
              y < 2200
                ? require('Components/assets/fourth-1.png')
                : y < 2500
                ? require('Components/assets/fourth-2.png')
                : y < 2800
                ? require('Components/assets/fourth-3.png')
                : y < 3100
                ? require('Components/assets/fourth-4.png')
                : require('Components/assets/sixth_2.png')
            }
          />
        </TopContainer>
        <BottomContainer>
          {list.map((l) => (
            <Box key={l.id} focus={l.focus}>
              <BoxType>{l.type}</BoxType>
              <BoxTitleContainer>
                <BoxTitle>{l.title_1}</BoxTitle>
                <BoxTitle>{l.title_2}</BoxTitle>
              </BoxTitleContainer>
            </Box>
          ))}
        </BottomContainer>
      </ContentContainer>
    </Container>
  );
};

export default FourthSmall;
