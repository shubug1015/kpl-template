import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { productsApi } from 'api';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
`;

const Content = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
  border-radius: 4px;
  width: 40vw;
  margin-bottom: 30px;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter};
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 100%;
  padding: 30px 0;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

const EnterBox = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
`;

const EnterForm = styled.form`
  width: 100%;
`;

const EnterList = styled.div`
  ${(props) => props.theme.flexStartCenter}
  padding: 30px;
`;

const FormTitle = styled.div`
  width: 20%;
  font-size: 12px;
  font-weight: 600;
`;

const QnAImage = styled.div`
  width: 80%;
`;

const ImageInput = styled.input`
  border: 1px solid gray;
  border-radius: 3px;
  width: 100%;
  height: 50px;
  font-size: 12px;
  outline: none;
`;

const TitleText = styled.textarea`
  width: 80%;
  height: 30px;
  padding-top: 5px;
  padding-left: 10px;
  font-size: 13px;
  overflow: auto;
  outline: none;
`;

const QnAText = styled.textarea`
  border-radius: 4px;
  width: 80%;
  height: 200px;
  padding: 5px 10px;
  font-size: 13px;
  overflow: auto;
  outline: none;
`;

const SecretContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  font-size: 12px;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  padding-top: 10px;
  font-size: 12px;
`;

const SubmitBox = styled.input`
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.whiteColor};
  margin-bottom: 20px;
  width: 100px;
  height: 40px;
  outline: none;
  cursor: pointer;
`;

const FixedContent = styled.div`
  font-size: 12px;
`;

const PwBox = styled.input`
  visibility: ${(props) => (props.show ? '' : 'hidden')};
  border-radius: 4px;
  padding-left: 5px;
  margin-left: 10px;
  width: 200px;
  height: 20px;
  font-size: 12px;
  outline: none;
`;

const QnA = (props) => {
  const itemName = props.location.state.name;
  const id = props.location.state.id;

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title.length < 1) {
      alert('제목을 입력해 주세요.');
    } else if (content.length < 1) {
      alert('내용을 입력해 주세요.');
    } else if (secret === true && pw.length < 1) {
      alert('비밀번호를 입력해 주세요.');
    } else if (secret === true && (pw.length < 4 || pw.length > 12)) {
      alert('비밀번호는 4 ~ 12자리로 입력해 주세요.');
    } else {
      const data = new FormData();
      data.append('image', qnaImage);
      data.append('id', props.location.state.id);
      data.append('title', title);
      data.append('content', content);
      data.append('secret', secret);
      data.append('pw', pw);
      const productId = props.location.state.id;
      try {
        await productsApi.addQnA(data, productId);
        alert('제출 되었습니다.');
        history.push(`/products/${id}`);
      } catch {
        alert('error');
      }
    }
  };

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const updateTitle = (event) => {
    const {
      target: { value },
    } = event;
    setTitle(value);
  };

  const updateText = (event) => {
    const {
      target: { value },
    } = event;
    setContent(value);
  };

  const [qnaImage, setQnAImage] = useState(null);
  const handleImage = (event) => {
    setQnAImage(event.target.files[0]);
  };

  const [secret, setSecret] = useState(false);
  const secretCheck = () => {
    setSecret(!secret);
    setPw('');
  };

  const [pw, setPw] = useState('');
  function handlePw(event) {
    const {
      target: { value },
    } = event;
    setPw(value);
  }

  return (
    <Container>
      <Content>
        <Title>
          <Text>QUESTION</Text>
        </Title>
        <EnterBox>
          <EnterForm onSubmit={handleSubmit}>
            <EnterList>
              <FormTitle>NAME</FormTitle>
              <FixedContent>{itemName}</FixedContent>
            </EnterList>
            <EnterList>
              <FormTitle>TITLE</FormTitle>
              <TitleText
                type='text'
                placeholder='제목을 입력해 주세요.'
                onChange={updateTitle}
              />
            </EnterList>
            <EnterList>
              <FormTitle>IMAGE</FormTitle>
              <QnAImage>
                <ImageInput type='file' name='image' onChange={handleImage} />
              </QnAImage>
            </EnterList>
            <EnterList>
              <FormTitle>QUESTION</FormTitle>
              <QnAText
                type='text'
                placeholder='문의하실 내용을 입력해 주세요.'
                onChange={updateText}
              />
            </EnterList>
            <EnterList>
              <FormTitle>SECRET</FormTitle>
              <SecretContainer>
                <CheckBox type='checkbox' onClick={secretCheck} />
                비밀글로 설정
                <PwBox
                  onChange={handlePw}
                  type='password'
                  placeholder='비밀번호를 입력하세요.(4~ 12자리)'
                  show={secret}
                />
              </SecretContainer>
            </EnterList>
            <BtnContainer>
              <SubmitBox type='submit' value='제출하기' />
            </BtnContainer>
          </EnterForm>
        </EnterBox>
      </Content>
    </Container>
  );
};

export default QnA;
