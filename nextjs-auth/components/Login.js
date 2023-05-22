import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100vw;
  height: calc(100vh - 70px);
  font-size: 24px;
`;

const Section = styled.div`
  width: 380px;
  height: 400px;
  border: solid 1px #333333;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 80px;
  border-bottom: solid 1px #333333;
  font-size: 18px;
`;

const Content = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  padding: 40px 0;
`;

const Form = styled.form``;

const InputSection = styled.div`
  ${(props) => props.theme.columnStartCenter};
  margin-bottom: 30px;
`;

const InputName = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #333333;
  outline: none;
  font-size: 14px;
  opacity: 0.5;
`;

const LoginBtn = styled.input`
  ${(props) => props.theme.flexCenter};
  border: none;
  width: 300px;
  height: 40px;
  background-color: #333333;
  font-size: 14px;
  color: #ffffff;
  margin: 10px 0 20px 0;
  cursor: pointer;
`;

const Login = ({ id, pw, handleId, handlePw, handleSubmit }) => (
  <Container>
    <Section>
      <Title>로그인</Title>
      <Content>
        <Form onSubmit={handleSubmit}>
          <InputSection>
            <InputName>이메일</InputName>
            <Input
              type='text'
              placeholder='이메일을 입력하세요.'
              value={id}
              onChange={handleId}
            />
          </InputSection>
          <InputSection>
            <InputName>비밀번호</InputName>
            <Input
              type='password'
              placeholder='비밀번호를 입력하세요.'
              value={pw}
              onChange={handlePw}
            />
          </InputSection>
          <LoginBtn type='submit' value='로그인' />
        </Form>
      </Content>
    </Section>
  </Container>
);

export default Login;
