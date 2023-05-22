import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLock } from 'react-icons/fa';
import { productsApi } from 'api';
import store from 'store';

const Container = styled.div`
  border-bottom: ${(props) =>
    props.sectionOpen ? 'none' : '1px solid #dbdbdb'};
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  display: flex;
  width: 80%;
  height: 70px;
  font-size: 12px;
`;

const Num = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 5%;
  margin: 0 1%;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 36%;
  margin: 0 1%;
  cursor: pointer;
`;

const Writer = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 18%;
  margin: 0 1%;
`;

const Date = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 16%;
  margin: 0 1%;
`;

const QnALock = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 8%;
  margin: 0 1%;
`;

const QnADelete = styled.div`
  visibility: ${(props) => (props.userCheck ? '' : 'hidden')};
  ${(props) => props.theme.flexCenter}
  width: 5%;
  font-size: 8px;
  opacity: 0.5;
`;

const QnADeleteBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  font-size: 10px;
  font-weight: 800;
  background-color: lightgrey;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
`;

const Image = styled.div`
  width: ${(props) => (props.imageOpen ? '700px' : '150px')};
  height: ${(props) => (props.imageOpen ? '700px' : '150px')};
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  cursor: pointer;
`;

const QnAText = styled.div`
  line-height: 150%;
  border: ${(props) => props.theme.mainBorder};
  border-radius: 4px;
  width: 95%;
  margin: 20px 0;
  padding: 30px 60px;
  font-size: 14px;
`;

// const ReplyText = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   font-size: 14px;
//   font-weight: 750;
//   line-height: 150%;
//   width: 100%;
//   padding: 30px 60px;
//   background-color: #f3f3f3;
// `;

const PwInput = styled.input`
  border: ${(props) => props.theme.mainBorder};
  border-radius: 4px;
  padding-left: 10px;
  width: 250px;
  height: 40px;
  outline: none;
`;

const PwCheckBtn = styled.input`
  width: 40px;
  height: 25px;
  margin-left: 10px;
  background-color: skyblue;
  border: ${(props) => props.theme.mainBorder};
  font-size: 10px;
  font-weight: 700;
`;

const QnASection = ({
  QnAId,
  ProductId,
  title,
  content,
  // name,
  date,
  num,
  secret,
  password,
  user_pk,
  image,
  // replied,
  // qna_reply,
}) => {
  const [view, setView] = useState(true);
  const [open, setOpen] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
    setOpenImage(false);
  };

  const userPk = store.getState()?.user.user_pk;
  const deleteQnA = (event) => {
    event.preventDefault();
    productsApi.deleteQnA(QnAId, ProductId);
    alert('삭제되었습니다.');
    setView(false);
  };
  const [pw, setPw] = useState('');
  const [secretCheck, setSecretCheck] = useState(secret);
  function handlePw(event) {
    const {
      target: { value },
    } = event;
    setPw(value);
  }

  const pwCheck = () => {
    if (password === pw) {
      setSecretCheck(false);
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleImage = () => {
    setOpenImage(!openImage);
  };

  return (
    <>
      {view === true ? (
        <>
          <Container sectionOpen={open}>
            <Num>{num}</Num>
            <Title onClick={toggleOpen}>{title}</Title>
            <Writer>name</Writer>
            <Date>{date.slice(0, 10)}</Date>
            <QnALock>
              {secretCheck === true ? (
                <FaLock style={{ fontSize: '12px' }} />
              ) : (
                ''
              )}
            </QnALock>
            <QnADelete userCheck={userPk === parseInt(user_pk)}>
              <QnADeleteBtn onClick={deleteQnA}>삭제</QnADeleteBtn>
            </QnADelete>
          </Container>
          {open === true ? (
            <ContentContainer>
              {secretCheck === true ? (
                <QnAText>
                  <PwInput
                    onChange={handlePw}
                    type='password'
                    placeholder='비밀번호를 입력하세요.'
                  />
                  <PwCheckBtn type='button' value='확인' onClick={pwCheck} />
                </QnAText>
              ) : (
                <>
                  {image !== null ? (
                    <Image
                      bgUrl={`${image}`}
                      onClick={handleImage}
                      imageOpen={openImage}
                    />
                  ) : null}
                  <QnAText>{content}</QnAText>
                  {/* {qna_reply.content !== undefined ? (
                    <ReplyText>{qna_reply.content}</ReplyText>
                  ) : (
                    ''
                  )} */}
                </>
              )}
            </ContentContainer>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default QnASection;
