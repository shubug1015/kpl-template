import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  background-color: #eff3f7;
  width: 100%;
  padding: 100px 0;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  margin-bottom: 70px;
`;

const Title = styled.div`
  margin-bottom: 25px;
  font-size: 30px;
  font-weight: 700;
`;

const Content = styled.div`
  :not(:last-child) {
    margin-bottom: 7px;
  }
  opacity: 0.5;
`;

const Btn = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  /* @media only screen and (max-width: 765px) {
    top: ${(props) =>
    props.prev ? '315px' : ''};
    right: ${(props) =>
    props.prev ? '180px' : ''};
    bottom: ${(props) =>
    props.prev ? '' : '315px'};
    left: ${(props) =>
    props.prev ? '' : '180px'};
  } */
  ${(props) => props.theme.flexCenter}
  background-color: #ffffff;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.mainColor};
  font-size: 30px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
  position: relative;
  top: ${(props) => (props.prev ? '200px' : '')};
  right: ${(props) => (props.prev ? '35%' : '')};
  bottom: ${(props) => (props.prev ? '' : '200px')};
  left: ${(props) => (props.prev ? '' : '35%')};
  z-index: 1;
`;

const Btn2 = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color: #ffffff;
  border-radius: 5px;
  width: 36px;
  height: 36px;
  color: ${(props) => props.theme.mainColor};
  font-size: 27px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
  margin: 0 50px;
`;

const BoxContainer = styled.div`
  ${(props) => props.theme.flexStartCenter}
  position: relative;
  left: 76%;
`;

const Box = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    height: 550px;
  }
  ${(props) => props.theme.flexCenter}
  background-color: #ffffff;
  border-radius: 10px;
  width: 50vw;
  height: 350px;
  opacity: ${(props) => (props.slide ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const LeftBox = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 250px;
  }
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 50%;
  height: 100%;
`;

const RightBox = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 30px 5%;
  }
  ${(props) => props.theme.columnStartCenter}
  justify-content: center;
  width: 50%;
  padding-left: 5%;
`;

const Name = styled.div`
  margin-bottom: 35px;
  font-weight: 700;
`;

const TypeParking = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 12px;
  }
  ${(props) => props.theme.flexStartCenter}
  margin-bottom: 60px;
  font-size: 14px;
  font-weight: 900;
  width: 100%;
  word-break: keep-all;
`;

const TypeContainer = styled.div`
  width: 50%;
`;

const TypeTitle = styled.div`
  margin-bottom: 10px;
  opacity: 0.7;
`;

const Type = styled.div``;

const ParkingContainer = styled.div`
  /* margin-left: 50px; */
  width: 50%;
`;

const ParkingTitle = styled.div`
  margin-bottom: 10px;
  opacity: 0.7;
`;

const Parking = styled.div``;

const ConceptContainer = styled.div``;

const ConceptTitle = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 900;
  opacity: 0.7;
`;

const Concept = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 12px;
  }
  :not(:last-child) {
    margin-bottom: 15px;
  }
  font-size: 14px;
  opacity: 0.5;
`;

const PageContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  margin-top: 50px;
`;

const Page = styled.div`
  :not(:last-child) {
    margin-right: 20px;
  }
  font-size: ${(props) => (props.slide ? '19px' : '18px')};
  font-weight: ${(props) => (props.slide ? 900 : 400)};
  color: ${(props) => (props.slide ? props.theme.mainColor : 'black')};
  opacity: ${(props) => (props.slide ? 1 : 0.5)};
  cursor: pointer;
`;

const Seventh = () => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => slide > 0 && setSlide(slide - 1);

  const nextSlide = () => slide < 3 && setSlide(slide + 1);

  const pageSlide = (id) => setSlide(id);

  const list = [
    {
      id: 0,
      name: '파주시 주택',
      type: '주택 4호',
      parking: '지상 4대',
      concept_1: '직선미를 강조한 깔끔한 디자인',
      concept_2: '복합적이고 역동적인 층 별 공간 구성',
      concept_3: '층 별 야외 휴게 공간 배치',
    },
    {
      id: 1,
      name: '서울 서초구 주택',
      type: '주택 2호',
      parking: '지상4대',
      concept_1: '다양한 형태의 매스를 활용한 리듬감 있는 디자인',
      concept_2: '베란다, 테라스를 활용하여 다양한 야외 공간 구성',
      concept_3: '옥상 정원으로 공간 효율과 임대 경쟁력 확보',
    },
    {
      id: 2,
      name: '김해시 상가',
      type: '상가 3호, 사무실 3호',
      parking: '지하 20대',
      concept_1: '독특한 외장재를 활용하여 구성한 야외 테라스',
      concept_2: '효율을 생각한 20대의 넉넉한 주차공간',
      concept_3: '',
    },

    {
      id: 3,
      name: '경기 고양시 주택',
      type: '상가 2호, 사무실 3호',
      parking: '지상 7대',
      concept_1: '흰 벽돌을 활용한 깨끗한 감성의 공간',
      concept_2: '직각을 이용한 넓은 공간감 확보',
      concept_3: '오픈월을 이용한 채광 효과와 탁 트인 시야',
    },
  ];

  const slideRef = useRef(null);

  const isMount = useRef(true);

  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;
    } else {
      slideRef.current.style.transition = 'all 0.3s ease-in-out';
      slideRef.current.style.transform = `translateX(-${slide * 25}%)`;
    }
  }, [slide]);

  return (
    <Container>
      <TitleContainer>
        <Title>기획설계 샘플 확인하기</Title>
        <Content>하성을 통해 컨택한 건축사의 기획설계입니다.</Content>
        <Content>
          세대 구성과 주자 공간, 설계 컨셉까지 모두 확인할 수 있습니다.
        </Content>
      </TitleContainer>
      <Btn onClick={prevSlide} prev={true}>
        <IoIosArrowBack />
      </Btn>
      <BoxContainer ref={slideRef}>
        {list.map((l) => (
          <Box key={l.id} slide={slide === l.id}>
            <LeftBox
              bgUrl={require(`Components/assets/seventh-${l.id + 1}.png`)}
            />
            <RightBox>
              <Name>{l.name}</Name>
              <TypeParking>
                <TypeContainer>
                  <TypeTitle>세대 구성</TypeTitle>
                  <Type>{l.type}</Type>
                </TypeContainer>
                <ParkingContainer>
                  <ParkingTitle>주차 대수</ParkingTitle>
                  <Parking>{l.parking}</Parking>
                </ParkingContainer>
              </TypeParking>
              <ConceptContainer>
                <ConceptTitle>설계 컨셉</ConceptTitle>
                <Concept>{l.concept_1}</Concept>
                <Concept>{l.concept_2}</Concept>
                <Concept>{l.concept_3}</Concept>
              </ConceptContainer>
            </RightBox>
          </Box>
        ))}
      </BoxContainer>
      <Btn onClick={nextSlide}>
        <IoIosArrowForward />
      </Btn>
      <PageContainer>
        <Btn2 onClick={prevSlide} prev={true}>
          <IoIosArrowBack />
        </Btn2>
        {list.map((l) => (
          <Page
            key={l.id}
            slide={slide === l.id}
            onClick={() => pageSlide(l.id)}
          >
            {l.id + 1}
          </Page>
        ))}
        <Btn2 onClick={nextSlide}>
          <IoIosArrowForward />
        </Btn2>
      </PageContainer>
    </Container>
  );
};

export default Seventh;
