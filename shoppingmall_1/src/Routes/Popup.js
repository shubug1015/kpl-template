import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Text = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100vw;
  height: 20vh;
  font-size: 28px;
  opacity: 0.8;
`;

const Btn = styled.div`
  font-size: 13px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 80%;
`;

const Popup = () => {
  const handdlePopup = () => {
    localStorage.setItem('hidePopup', 'true');
    window.close();
  };

  const closePopup = () => {
    window.close();
  };

  return (
    <Container>
      <Text>이 페이지는 WEBPETTO의 예시 페이지입니다.</Text>
      <BtnContainer>
        <Btn onClick={handdlePopup}>다시 보지 않기</Btn>
        <Btn onClick={closePopup}>닫기</Btn>
      </BtnContainer>
    </Container>
  );
};

export default Popup;
