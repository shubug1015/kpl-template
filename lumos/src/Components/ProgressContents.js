import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100%;
  padding: 30px 0;
`;

const Icon = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Title = styled.div`
  color: ${(props) => props.theme.mainColor};
  font-size: 25px;
  font-weight: 700;
  padding: 30px 0;
`;

const Text = styled.div`
  font-size: 17px;
  font-weight: 700;
  padding: 5px 0;
  opacity: 0.8;
`;

const ProgressContents = ({ page }) => {
  return (
    <>
      {page === 1 ? (
        <Container>
          <Icon bgUrl={require('Components/assets/Progress/consulting.png')} />
          <Title>1:1 상담 및 컨설팅 계약</Title>
          <Text>전문가와의 1:1 상담을 통해</Text>
          <Text>브랜드에 맞는 마케팅 컨설팅을 안내해드립니다.</Text>
        </Container>
      ) : page === 2 ? (
        <Container>
          <Icon bgUrl={require('Components/assets/Progress/target.png')} />
          <Title>브랜드 맞춤 타겟 설정</Title>
          <Text>최신 트렌드, 소비경향 등을 파악해</Text>
          <Text>브랜드에 알맞는 타겟을 선정합니다.</Text>
        </Container>
      ) : page === 3 ? (
        <Container>
          <Icon bgUrl={require('Components/assets/Progress/channel.png')} />
          <Title>타겟 맞춤 채널 설정</Title>
          <Text>선정된 타겟을 분석하여</Text>
          <Text>가장 효과적인 유통 채널을 설정합니다.</Text>
        </Container>
      ) : (
        <Container>
          <Icon bgUrl={require('Components/assets/Progress/act.png')} />
          <Title>컨텐츠 기획 및 컨설팅 진행</Title>
          <Text>앞서 설정한 타겟과 채널을 바탕으로</Text>
          <Text>대표 이미지 & 로고 제작, 브랜드 컨셉 기획 등</Text>
          <Text>100% 브랜드 맞춤형 컨텐츠를 기획 & 디자인합니다.</Text>
        </Container>
      )}
    </>
  );
};

export default ProgressContents;
