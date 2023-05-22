import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  ${(props) => props.theme.flexCenter}
  padding-top: ${(props) => props.theme.headerHeight};
  width: 100vw;
`;

const ContactContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.flexCenter}
  justify-content:center;
  width: 70%;
  height: 800px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
`;

const ContactBox = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  ${(props) => props.theme.columnCenter}
  width: 70%;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ContactTitle = styled.div`
  ${(props) => props.theme.flexCenter}
  font-size: 25px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 30px;
  color: white;
`;

const ContactForm = styled.div`
  @media only screen and (max-width: 1100px) {
    width: 90%;
  }
  ${(props) => props.theme.columnCenter};
  justify-content: space-around;
  width: 70%;
  height: 600px;
  border: 2px solid white;
`;

const FormSection = styled.div`
  width: 80%;
`;

const FormTitle = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 100%;
  height: 30px;
  font-weight: bold;
  color: white;
`;

const FormInput = styled.input`
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  font-size: 18px;
  background: transparent;
  border: none;
  border-bottom: 2px solid white;
  :focus {
    outline: none;
  }
  color: white;
`;

const FormText = styled.textarea`
  width: 100%;
  height: 200px;
  background: transparent;
  border: none;
  border: 1px solid white;
  :focus {
    outline: none;
  }
  color: white;
  padding: 10px;
`;

const FormBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 70px;
  height: 40px;
  border: 2px solid white;
  border-radius: 4px;
  color: white;
  margin-top: 40px;
  cursor: pointer;
`;

const Contact = () => (
  <Container>
    <Helmet>
      <title>CONTACT</title>
    </Helmet>
    <ContactContainer bgUrl={require('Components/assets/AboutUsImg3.jpg')}>
      <ContactBox>
        <ContactTitle>Contact us</ContactTitle>
        <ContactForm>
          <FormSection>
            <FormTitle>Name</FormTitle>
            <FormInput></FormInput>
          </FormSection>
          <FormSection>
            <FormTitle>E-mail</FormTitle>
            <FormInput></FormInput>
          </FormSection>
          <FormSection>
            <FormTitle>Comments</FormTitle>
            <FormText></FormText>
          </FormSection>
          <FormBtn>Submit</FormBtn>
        </ContactForm>
      </ContactBox>
    </ContactContainer>
  </Container>
);

export default Contact;
