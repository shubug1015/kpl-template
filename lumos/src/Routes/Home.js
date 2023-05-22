import React, { useRef } from 'react';
import styled from 'styled-components';
import MainSection from 'Components/Sections/MainSection';
import IconSection from 'Components/Sections/IconSection';
import TipSection from 'Components/Sections/TipSection';
import PerfomanceSection from 'Components/Sections/PerfomanceSection';
import AnalysisSection from 'Components/Sections/AnalysisSection';
import ProgressSection from 'Components/Sections/ProgressSection';
import FormSection from 'Components/Sections/FormSection';
import AppSection from 'Components/Sections/AppSection';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  ${(props) => props.theme.columnCenter};
  overflow-x: hidden;
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color: ${(props) => props.theme.mainColor};
  width: 120px;
  height: 60px;
  border-radius: 50px;
  color: #fafafa;
  font-weight: 800;
  margin-bottom: 50px;
  cursor: pointer;
`;

const Home = () => {
  const ref1 = useRef(null);

  const scrollToRef = (ref) => {
    console.log(ref.current);
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop - 60 });
  };

  const handleClick = () => scrollToRef(ref1);

  return (
    <Container>
      <Helmet>
        <title>LUMOS</title>
      </Helmet>
      <MainSection />
      <BtnContainer onClick={handleClick}>문의하기</BtnContainer>
      <TipSection />
      <IconSection />
      <PerfomanceSection />
      <AnalysisSection />
      <ProgressSection />
      <div ref={ref1}></div>
      <FormSection />
      <AppSection />
    </Container>
  );
};

export default Home;
