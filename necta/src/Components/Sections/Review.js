import React from 'react';
import styled from 'styled-components';
import ReviewSection from 'Components/Sections/ReviewSection';
import { AiTwotoneStar } from 'react-icons/ai';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100%;
  padding-bottom: 50px;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.columnCenter};
  background-color: #fafafa;
  width: 100%;
  padding: 50px 0;
`;

const Text = styled.div`
  font-size: 32px;
  padding: 10px 0;
  :first-child {
    font-weight: 100;
  }
`;

const NumSection = styled.div`
  ${(props) => props.theme.flexCenter};
  font-size: 30px;
  padding-top: 40px;
`;

const Num = styled.div`
  ${(props) => props.theme.flexCenter};
  padding: 0 5px;
`;

const SectionContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.flexCenter};
  flex-wrap: wrap;
  width: 80%;
  padding: ${(props) => props.theme.SectionPadding};
`;

const Btn = styled.div`
  ${(props) => props.theme.flexCenter};
  background-color: #0069d9;
  padding: 20px 60px;
  color: #fafafa;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const Review = () => {
  const sectionList = [
    {
      id: 1,
      name: 'tngks****',
      product: '디톡스 오렌지',
      content:
        '양이 많아서 생각날 때마다 꺼내먹기 좋았어요! 맛도 훌륭해서 만족 100% 입니다 ^^',
    },
    {
      id: 2,
      name: 'alsdk****',
      product: '디톡스 오렌지',
      content:
        '확실히 생과일 맛이 그대로 나는 느낌이에요! 배송도 빨라서 신선한 상태 그대로 먹을 수 있는 것 같네요! 3개월째 구독 중인데 계속 할 생각입니다~',
    },
    {
      id: 3,
      name: 'dkfvl****',
      product: '디톡스 토마토',
      content:
        '디톡스 주스를 만들어 먹으려고 이것저것 해봤는데 역시 믿고 주문하는 것이 편한거 같네요 ㅎㅎㅎ 아이들도 잘먹고 남편도 좋아해서 너무 만족하고 있습니다!',
    },
    {
      id: 4,
      name: 'rhakf****',
      product: '디톡스 자몽',
      content:
        '너무 달지 않아서 좋은 것 같아요! 쓴 맛도 적어서 아이들 먹이기에도 좋을 것 같고 아침에 한 잔 먹고 시작하니 몸이 개운해지는 느낌이네요 ^^',
    },
    {
      id: 5,
      name: 'dongd****',
      product: '디톡스 오렌지',
      content:
        '디톡스 음료라는 것이 처음인데 생각보다 맛도 있고 확실히 아침에 얼굴 붓는게 줄어든 느낌??이에요 ㅎㅎ 코로나 시국에 집에서 먹기 좋은 음료인 것 같아 추천드립니다~~',
    },
    {
      id: 6,
      name: 'justf****',
      product: '디톡스 자몽',
      content:
        '다른 곳에서 주문했을 때 너무 달아서 오래 못먹었는데 확실히 다르네요! 생과일 주스 느낌이 나서 부담 없이 먹기에 좋은 것 같아요! 다른 종류도 구독 할 생각입니다~~',
    },
    {
      id: 7,
      name: 'tnseo****',
      product: '디톡스 토마토',
      content:
        '어제 아침에 주문했는데 다음날 바로 왔네요! 배송도 빠르고 그만큼 신선하게 느껴져서 기분이 좋아요! 포장도 이뻐서 진열만 해놔도 기분 좋네요 ^^',
    },
    {
      id: 8,
      name: 'qnfrh****',
      product: '디톡스 자몽',
      content:
        '쌉싸름한 맛을 좋아하시는 분이라면 자몽 강추!! 쓴맛 싫어하는 아이들에게는 물 조금만 타서 주면 잘먹을거에요!! 다른 맛도 구독할 생각입니다! 번창하세요ㅠㅠ',
    },
  ];

  return (
    <Container>
      <TextContainer>
        <Text>먹어본 사람들이 남긴</Text>
        <Text>SNS 통합 리뷰!</Text>
        <NumSection>
          <Num style={{ fontSize: '36px', color: '#0069d9' }}>
            <AiTwotoneStar color={'#FFCA28'} style={{ marginRight: '10px' }} />
            4.85
          </Num>
          <Num>/</Num>
          <Num>5.0</Num>
        </NumSection>
      </TextContainer>
      <SectionContainer>
        {sectionList.map((s) => (
          <ReviewSection
            id={s.id}
            key={s.id}
            product={s.product}
            content={s.content}
            name={s.name}
          />
        ))}
      </SectionContainer>
      <Btn>더보기</Btn>
    </Container>
  );
};

export default Review;
