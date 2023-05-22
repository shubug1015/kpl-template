import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
  ${(props) => props.theme.columnCenter}
  justify-content:center;
  width: 60vw;
  height: 800px;
  background-color: white;
  padding: 20px;
  /* background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed; */
`;

const FormContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  width: 70%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.65);
  border-radius: 20px;
  padding: 40px 0;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  font-size: 18px;
  color: #fafafa;
  margin-bottom: 20px;
`;

const FormBox = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.columnCenter}
  width: 90%;
`;

const FormTitle = styled.div`
  width: 80%;
  font-weight: bold;
  margin: 20px 0px;
  color: #fafafa;
`;

const FormInput = styled.input`
  width: 80%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fafafa;
  color: #fafafa;
  padding-left: 5px;
  padding-bottom: 5px;
  :focus {
    outline: none;
  }
`;

const FormText = styled.textarea`
  width: 80%;
  height: 120px;
  background: transparent;
  border: none;
  border: 1px solid #fafafa;
  padding: 10px;
  color: #fafafa;
  font-weight: bolder;
  :focus {
    outline: none;
  }
`;

const FormBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  border: 1px solid #fafafa;
  border-radius: 4px;
  font-size: 13px;
  padding: 5px 10px;
  color: #fafafa;
  margin: 20px 0;
  cursor: pointer;
`;

const FormSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container
    //  bgUrl={require('Components/assets/Form/backImg2.jpg')}
    >
      <FormContainer>
        <Title>컨설팅 문의</Title>
        <FormBox>
          <FormTitle>이름</FormTitle>
          <FormInput></FormInput>
          <FormTitle>E-mail</FormTitle>
          <FormInput></FormInput>
          <FormTitle>회사명</FormTitle>
          <FormInput></FormInput>
          <FormTitle>회사소개</FormTitle>
          <FormText></FormText>
          <FormBtn>제출하기</FormBtn>
        </FormBox>
      </FormContainer>
      {/* <RightContainer>
        <Title>WITH LUMOS</Title>
        <SectionContainer>
          {list &&
            list.map((l) => (
              <Section key={l.id} data-aos='flip-left' data-aos-duration='2500'>
                <SectionImg
                  src={require(`Components/assets/Main/${l.image}.jpg`)}
                  alt={`Success Ex image${l.id}`}
                />
                <SectionText>{l.text}</SectionText>
              </Section>
            ))}
        </SectionContainer>
        <BottomText>
          ※컨설팅 문의가 제출되면, 영업일 기준 2일 내 답을 받아보실 수 있습니다.
        </BottomText>
        <BottomText>
          ※제출된 내용은 상담 이외의 목적에 사용되지 않으며, 저장되지 않습니다.
        </BottomText>
      </RightContainer> */}
    </Container>
  );
};

export default FormSection;
