import React from 'react';
import styled from 'styled-components';
import { signUpList as list } from 'Components/Lists';
import { Helmet } from 'react-helmet';
import ga from 'ga';

const Container = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100vw;
  margin-top: 100px;
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    width: 400px;
  }
  ${(props) => props.theme.columnCenter}
  border-radius: 4px;
  width: 400px;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  margin-bottom: 20px;
  padding-bottom: 5px;
  font-size: 12px;
  font-weight: 700;
`;

const SignUpContainer = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
`;

const Section = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 55%;
  height: 80px;
  :nth-child(2) {
    height: 120px;
  }
  margin-bottom: 20px;
`;

const SectionTitle = styled.div`
  width: 100%;
  padding: 5px;
  font-size: 11px;
  font-weight: 700;
`;

const Input = styled.input`
  border: ${(props) => props.theme.blackBorder};
  width: 100%;
  height: 30px;
  padding-left: 10px;
  margin: 5px 0px;
  font-size: 10px;
  outline: none;
`;

const Text = styled.div`
  margin-top: 5px;
  font-size: 10px;
  color: ${(props) => (props.usable ? 'blue' : 'red')};
`;

const SubmitBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  background-color: black;
  width: 30%;
  height: 30px;
  margin: 20px 0;
  color: white;
  font-size: 11px;
  cursor: pointer;
`;

const SignUpPresenter = ({
  // value props
  id,
  pw,
  pwCheck,
  name,
  email,
  phoneNum,
  // check value props
  idText,
  pwText,
  nameText,
  emailText,
  phoneNumText,
  // onChange Func
  handleId,
  handlePw,
  handlePwCheck,
  handleName,
  handleEmail,
  handlePhoneNum,
  // onBlur Func
  confirmId,
  confirmPw,
  confirmName,
  confirmEmail,
  confirmPhoneNum,
  // onSubmit Func
  handleSubmit,
}) => {
  const value = [id, pw, pwCheck, name, email, phoneNum];
  const checkValue = [idText, pwText, nameText, emailText, phoneNumText];
  const onChange = [
    handleId,
    handlePw,
    handlePwCheck,
    handleName,
    handleEmail,
    handlePhoneNum,
  ];
  const onBlur = [
    confirmId,
    confirmPw,
    confirmPw,
    confirmName,
    confirmEmail,
    confirmPhoneNum,
  ];

  const signUpEvent = () =>
    ga.sendEvent({
      category: '회원가입',
      action: '회원가입 버튼 클릭',
      label: '회원가입_회원가입 버튼 클릭',
    });

  return (
    <Container>
      <Helmet>
        <title>Hipster | SIGNUP </title>
      </Helmet>
      <Content>
        <Title>REGISTER</Title>
        <SignUpContainer>
          {list &&
            list.length > 0 &&
            list.map((l) => (
              <Section key={l.id} id={l.id}>
                <SectionTitle>{l.name}</SectionTitle>
                {l.input.map((i) => (
                  <Input
                    key={i.num}
                    type={i.type}
                    placeholder={i.placeholder}
                    value={value[i.num]}
                    onChange={onChange[i.num]}
                    onBlur={onBlur[i.num]}
                  />
                ))}
                {/* <Text usable={l.text[checkValue[l.id]].includes('사용 가능한')}>
                  {l.text[checkValue[l.id]]}
                </Text> */}
              </Section>
            ))}
          <SubmitBtn
            id='gtm_click_signup'
            // onClick={handleSubmit}
          >
            회원가입
          </SubmitBtn>
        </SignUpContainer>
      </Content>
    </Container>
  );
};

export default SignUpPresenter;
