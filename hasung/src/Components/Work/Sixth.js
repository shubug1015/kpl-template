import React from 'react';
import styled from 'styled-components';
import { BsCheck } from 'react-icons/bs';

const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
  ${(props) => props.theme.flexCenter};
  width: 100%;
  padding: 100px 0;
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
  ${(props) => props.theme.columnStartCenter};
  width: 50%;
  /* background-color: pink; */
`;

const NumBtn = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 120px;
  height: 40px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  background-color: #ebf5f6;
  color: ${(props) => props.theme.mainColor};
  margin-bottom: 20px;
`;

const Title = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 23px;
    padding-left: 10px;
  }
  font-size: 28px;
  font-weight: 700;
  line-height: 50px;
  word-break: keep-all;
`;

const ContentContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 70px;
`;

const Content = styled.div`
  @media only screen and (max-width: 765px) {
    font-size: 15px;
    line-height: 20px;
  }
  ${(props) => props.theme.flexStartCenter};
  font-size: 18px;
  line-height: 70px;
  opacity: 0.7;
  word-break: keep-all;
`;

const Question = styled.div`
  ${(props) => props.theme.flexStartCenter};
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`;

const Image = styled.div`
  width: 400px;
  height: 400px;
  background-image: url(${(props) => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const Sixth = () => {
  return (
    <Container>
      <TextContainer>
        <NumBtn>4.준공후 유지관리</NumBtn>
        <Title>끝났다고 끝난게 아닙니다.</Title>
        <Title>준공 후에도 책임지는 유지관리 서비스</Title>
        <ContentContainer>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            하자보수 기간동안 언제든지 보수요청을 하실 수 있습니다.
          </Content>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            준공 후에 문제가 있다면 건설사가 책임지게 해드립니다.
          </Content>
          <Content>
            <BsCheck
              color={'#7579E7'}
              size={25}
              style={{ marginRight: '10px' }}
            />
            건설사의 유지관리 책임이 처음부터 탄탄한 공사를 만듭니다.
          </Content>
        </ContentContainer>
      </TextContainer>
      <Image bgUrl={require('Components/assets/Work/sixth.png')} />
    </Container>
  );
};

export default Sixth;
