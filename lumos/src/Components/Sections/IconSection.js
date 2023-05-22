import React from 'react';
import styled from 'styled-components';
import IconBox from 'Components/Sections/IconBox';

const Container = styled.div`
  @media only screen and (max-width: 765px) {
    height: 200vh;
  }
  width: 60%;
  height: 100vh;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`;

const Image = styled.div`
  width: 50%;
  height: 50%;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const IconSection = () => {
  const sections = [
    {
      id: 1,
      num: '01',
      image: (
        <Image bgUrl={require('Components/assets/Icon/conceptPlan.png')} />
      ),
      title: 'CONCEPT PLANNING',
      text1: '브랜드에 알맞은 컨셉을 기획합니다.',
    },
    {
      id: 2,
      num: '02',
      image: <Image bgUrl={require('Components/assets/Icon/target.png')} />,
      title: 'TARGET SETTING',
      text1: '최신 트렌드, 소비경향에 따른 알맞은 타겟을 설정합니다.',
    },
    {
      id: 3,
      num: '03',
      image: <Image bgUrl={require('Components/assets/Icon/design.png')} />,
      title: 'DESIGN PLANNING',
      text1: '브랜드를 보다 돋보이게 할 수 있는 디자인을 기획합니다.',
    },
    {
      id: 4,
      num: '04',
      image: <Image bgUrl={require('Components/assets/Icon/image.png')} />,
      title: 'IMAGE SETTING',
      text1:
        '브랜드 디자인을 기반으로 로고, 대표이미지 등을 기획 및 제작합니다.',
    },
    {
      id: 5,
      num: '05',
      image: <Image bgUrl={require('Components/assets/Icon/channel.png')} />,
      title: 'CHANNEL CONTACT',
      text1: '브랜드를 유통할 채널을 컨택합니다.',
    },
    {
      id: 6,
      num: '06',
      image: <Image bgUrl={require('Components/assets/Icon/management.png')} />,
      title: 'CONTENTS MANAGEMENT',
      text1: '기획된 디자인 및 채널에 알맞은 컨텐츠를 기획, 관리합니다.',
    },
    {
      id: 7,
      num: '07',
      image: <Image bgUrl={require('Components/assets/Icon/pr.png')} />,
      title: 'BRAND PR',
      text1:
        '브랜드가 다양한 미디어의 긍정적인 여론을 만들도록 해주며, 각종 포털사이트에 노출시킵니다.',
    },
    {
      id: 8,
      num: '08',
      image: <Image bgUrl={require('Components/assets/Icon/alaysis.png')} />,
      title: 'RESULT ANALYSIS',
      text1: '마케팅 결과를 성장부분과 보완부분으로 세분화하여 관리합니다.',
    },
  ];

  return (
    <Container>
      {sections.map((section) => (
        <IconBox
          key={section.id}
          id={section.id}
          num={section.num}
          image={section.image}
          title={section.title}
          text1={section.text1}
        />
      ))}
    </Container>
  );
};

export default IconSection;
