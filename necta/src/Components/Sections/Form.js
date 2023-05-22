import React from 'react';
import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  ${(props) => props.theme.columnCenter}
  width: 100%;
  background-color: #fafafa;
  padding: 50px 0;
`;

const TextContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  color: #333333;
`;

const Text1 = styled.div`
  font-size: 32px;
  padding: 10px 0;
`;
const Text2 = styled.div`
  font-size: 14px;
  padding: 15px 0;
`;

const BtnContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.flexAroundCenter};
  width: 40%;
  margin-top: 50px;
`;

const BtnSection = styled.div`
  ${(props) => props.theme.columnCenter};
`;

const BtnName = styled.div`
  ${(props) => props.theme.flexCenter};
  font-size: 18px;
  font-weight: 700;
`;

const BtnText = styled.div``;

// const FormContainer = styled.div`
//   ${(props) => props.theme.columnCenter}
//   width: 60%;
//   padding: 40px 0;
//   color: #333333;
// `;

// const Title = styled.div`
//   ${(props) => props.theme.flexCenter}
//   width: 100%;
//   font-size: 18px;
//   margin-bottom: 20px;
// `;

// const FormBox = styled.div`
//   @media only screen and (max-width: 900px) {
//     width: 100%;
//   }
//   ${(props) => props.theme.columnCenter}
//   width: 90%;
// `;

// const FormTitle = styled.div`
//   width: 80%;
//   font-weight: bold;
//   margin: 20px 0px;
// `;

// const FormInput = styled.input`
//   width: 80%;
//   background: transparent;
//   border: none;
//   border-bottom: 1px solid #333333;
//   padding-left: 5px;
//   padding-bottom: 5px;
//   :focus {
//     outline: none;
//   }
// `;

// const FormText = styled.textarea`
//   width: 80%;
//   height: 120px;
//   background: transparent;
//   border: none;
//   border: 1px solid #333333;
//   padding: 10px;
//   font-weight: bolder;
//   :focus {
//     outline: none;
//   }
// `;

// const FormBtn = styled.div`
//   ${(props) => props.theme.flexCenter}
//   border: 1px solid #333333;
//   border-radius: 4px;
//   font-size: 13px;
//   padding: 5px 10px;
//   margin: 20px 0;
//   cursor: pointer;
// `;

const Form = () => {
  return (
    <Container>
      <TextContainer>
        <Text1>도움이 필요하신가요?</Text1>
        <Text2>평일 오전 10시 ~ 오후 6시</Text2>
        <BtnContainer>
          <BtnSection>
            <BtnName>
              <MdCall size={25} style={{ marginRight: '15px' }} />
              <BtnText>전화 상담</BtnText>
            </BtnName>
            <BtnText style={{ fontSize: '12px', padding: '10px 0' }}>
              02-0000-0000
            </BtnText>
          </BtnSection>
          <BtnSection>
            <BtnName>
              <AiOutlineMail size={25} style={{ marginRight: '15px' }} />
              <BtnText>E-mail</BtnText>
            </BtnName>
            <BtnText style={{ fontSize: '12px', padding: '10px 0' }}>
              help@webpetto.com
            </BtnText>
          </BtnSection>
        </BtnContainer>
      </TextContainer>
      {/* <FormContainer>
        <Title>문의하기</Title>
        <FormBox>
          <FormTitle>이름</FormTitle>
          <FormInput></FormInput>
          <FormTitle>E-mail</FormTitle>
          <FormInput></FormInput>
          <FormTitle>문의 제목</FormTitle>
          <FormInput></FormInput>
          <FormTitle>문의 내용</FormTitle>
          <FormText></FormText>
          <FormBtn>제출하기</FormBtn>
        </FormBox>
      </FormContainer> */}
    </Container>
  );
};

export default Form;
