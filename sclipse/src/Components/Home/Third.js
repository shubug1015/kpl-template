import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.flexCenter}
  width: 100%;
  padding-top: 500px;
  background: linear-gradient(#ffffff, 50%, #ececec);
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter}
  }
  ${(props) => props.theme.columnStartCenter}
  width: 500px;
`;

const Title = styled.div`
  @media only screen and (max-width: 900px) {
    font-size: 36px;
  }
  :not(:first-child) {
    margin-top: 20px;
  }
  font-size: 45px;
  font-weight: 900;
  opacity: 0.8;
`;

const OptionContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  margin-top: 80px;
  margin-bottom: 30px;
`;

const Option = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) =>
    props.focus ? `3px solid ${props.theme.mainColor}` : 'none'};
  padding-bottom: 10px;
  margin-right: 30px;
  color: ${(props) => (props.focus ? props.theme.mainColor : 'black')};
  font-size: 20px;
  font-weight: 700;
  opacity: ${(props) => (props.focus ? 1 : 0.6)};
  cursor: pointer;
`;

const OptionText = styled.div`
  :not(:first-child) {
    margin-top: 10px;
  }
`;

const Image = styled.div`
  @media only screen and (max-width: 900px) {
    width: 60%;
    height: 60vw;
  }
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  width: 28%;
  height: 28vw;
`;

const Third = () => {
  const [option, setOption] = useState(1);

  const clickOption1 = () => {
    setOption(1);
  };

  const clickOption2 = () => {
    setOption(2);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Content data-aos='fade-up' data-aos-duration='1000'>
        <Title>업계 평균 대비 최대</Title>
        <Title>60% 낮은 비용</Title>
        <Title>경험하세요!</Title>
        <OptionContainer>
          <Option onClick={clickOption1} focus={option === 1}>
            견적 직접 선택
          </Option>
          <Option onClick={clickOption2} focus={option === 2}>
            추가비용 100% 무료
          </Option>
        </OptionContainer>
        {option === 1 ? (
          <>
            <OptionText>
              간편하게 영상 번역가를 둘러보고, 직접 선택으로
            </OptionText>
            <OptionText>'최소 비용' '최대 효율'을 경험하세요!</OptionText>
          </>
        ) : (
          <>
            <OptionText>
              영상 제목/설명 번역, 수정까지도 추가비용 없이 처음
            </OptionText>
            <OptionText>견적 그대로!</OptionText>
          </>
        )}
      </Content>
      <Image
        bgUrl={require(`Components/assets/${
          option === 1 ? 'third_1.png' : 'third_2.png'
        }`)}
      />
    </Container>
  );
};

export default Third;
