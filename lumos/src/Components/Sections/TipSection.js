import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import { FaQuestion } from 'react-icons/fa';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100vw;
  margin: 100px 0;
  /* background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed; */
`;

const TitleContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  background-color: #fafafa;
  padding-bottom: 50px;
`;

const Icon = styled.div`
  transform: rotate(-30deg);
`;

const Text1 = styled.div`
  border-bottom: 3px solid ${(props) => props.theme.mainColor};
  font-size: 28px;
  font-weight: 900;
  padding: 20px 5px 10px 5px;
`;

const Text2 = styled.div`
  font-size: 25px;
  /* opacity: 0.7; */
  padding: 30px 0px 10px 0px;
  font-weight: 700;
`;

const Text3 = styled.div`
  font-size: 20px;
  padding: 10px 0;
  font-weight: 700;
`;

const CompareContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
  ${(props) => props.theme.flexCenter}
  display: flex;
  /* flex-direction: column; */
  width: 90%;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 100px 0;
  padding: 40px 0;
`;

const CompareSection = styled.div`
  ${(props) => props.theme.columnCenter};
  position: relative;
  width: 40%;
`;

const Vs = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: red;
  padding: 50px 0;
`;

const OthersTitle = styled.div`
  background-color: #5b5b5b;
  padding: 10px 20px;
  border-radius: 20px;
  color: #fafafa;
  font-size: 20px;
`;

const OurTitle = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  padding: 10px 20px;
  border-radius: 20px;
  color: #fafafa;
  font-size: 22px;
`;

const OthersImg = styled.div`
  width: 400px;
  height: 250px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const OthersText1 = styled.div`
  font-size: 20px;
  font-weight: 800;
  padding: 5px 0;
  opacity: 0.6;
`;
const OthersText2 = styled.div`
  font-size: 17px;
  padding: 5px 0;
  opacity: 0.6;
`;

const OurText1 = styled.div`
  font-size: 22px;
  font-weight: 800;
  padding: 5px 0;
  color: ${(props) => props.theme.mainColor};
`;
const OurText2 = styled.div`
  font-size: 18px;
  font-weight: 800;
  padding: 5px 0;
`;

const OurImg = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const TipSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Container
    // bgUrl={require('Components/assets/Tip/tip_back.jpg')}
    >
      <TitleContainer>
        <Icon>
          <FaQuestion
            style={{
              fontSize: '50px',
              color: '#20639b',
            }}
          />
        </Icon>
        <Text1>좋은 마케팅 회사를 고르는 Tip!</Text1>
        <Text2>많고 많은 마케팅 회사</Text2>
        <Text3>어떤 회사에 맡겨야 할까요?</Text3>
      </TitleContainer>
      <CompareContainer data-aos='zoom-in' data-aos-duration='1000'>
        <CompareSection>
          <OthersTitle>타 회사</OthersTitle>
          <OthersImg bgUrl={require('Components/assets/Tip/othersImg.png')} />
          <OthersText1>명확한 타겟이 없는</OthersText1>
          <OthersText2>반복적인 업무</OthersText2>
        </CompareSection>
        <Vs>VS</Vs>
        <CompareSection>
          <OurTitle>LUMOS</OurTitle>
          <OurImg bgUrl={require('Components/assets/Tip/ourImg.png')} />
          <OurText1>100% 브랜드 맞춤형</OurText1>
          <OurText2>타겟 설정과 기획!</OurText2>
        </CompareSection>
      </CompareContainer>
    </Container>
  );
};

export default TipSection;
