import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 50px;
`;

const BigContainer = styled.div`
  ${(props) => props.theme.columnCenter};
  width: 100%;
  border: ${(props) => props.theme.mainBorder};
`;

const Contents = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnCenter};
    padding: 20px;
  }
  ${(props) => props.theme.flexCenter};

  width: 100%;
  font-size: 11px;
  padding: 50px;
`;

const Image = styled.img`
  @media only screen and (max-width: 900px) {
    width: 60%;
    margin-right: 0;
  }
  @media only screen and (max-width: 760px) {
    width: 80%;
  }
  width: 40%;
  height: 300px;
  margin-right: 5%;
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  ${(props) => props.theme.columnCenter};
  justify-content: space-around;
  width: 55%;
  height: 300px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
`;

const Letter = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 100px;
  font-size: 30px;
  font-weight: bolder;
  color: #383838;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 20px;
`;

const Text1 = styled.div`
  ${(props) => props.theme.flexStartCenter};
  height: 60%;
  font-size: 20px;
  font-weight: bold;
  color: #383838;
`;

const Text2 = styled.div`
  ${(props) => props.theme.flexStartCenter};
  height: 40%;
  font-size: 12px;
  opacity: 0.7;
`;

const StoryContainer = styled.div`
  ${(props) => props.theme.columnCenter};
  padding-bottom: 20px;
`;

const StoryTitle = styled.div`
  ${(props) => props.theme.flexCenter}
  font-size: 20px;
  padding: 10px 20px;
  border-bottom: 2px solid #9dfb9d;
  width: 100%;
  margin-bottom: 30px;
`;

const StoryText = styled.div`
  ${(props) => props.theme.flexCenter}
  margin: 5px 0;
  font-size: 12px;
`;

const BrandStory = () => {
  return (
    <Container>
      <Title>STORY</Title>
      <BigContainer>
        <Contents>
          <Image
            src={require('Components/assets/BrandStoreImg1.jpg')}
            alt='Brand_story image'
          />
          <ContentContainer>
            <Content>
              <Letter>B</Letter>
              <TextContainer>
                <Text1>Believe</Text1>
                <Text2>믿을 수 있는 제품을 만듭니다.</Text2>
              </TextContainer>
            </Content>
            <Content>
              <Letter>L</Letter>
              <TextContainer>
                <Text1>Learn</Text1>
                <Text2>모든 과정에서 배우고, 또 배웁니다.</Text2>
              </TextContainer>
            </Content>
            <Content>
              <Letter>I</Letter>
              <TextContainer>
                <Text1>Improve</Text1>
                <Text2>삶의 질을 개선시킵니다.</Text2>
              </TextContainer>
            </Content>
            <Content>
              <Letter>N</Letter>
              <TextContainer>
                <Text1>Need</Text1>
                <Text2>소비자가 필요한 제품을 만듭니다.</Text2>
              </TextContainer>
            </Content>
            <Content>
              <Letter>G</Letter>
              <TextContainer>
                <Text1>Grow</Text1>
                <Text2>멈추지 않고 성장합니다.</Text2>
              </TextContainer>
            </Content>
          </ContentContainer>
        </Contents>
        <StoryContainer>
          <StoryTitle>BLING</StoryTitle>
          <StoryText>
            BLING은 인공적인 원료보다는 자연에서 얻을 수 있는
          </StoryText>
          <StoryText>
            천연 재료들로 소비자에게 맞는, 소비자가 필요로 하는 제품을
          </StoryText>
          <StoryText>
            만든다는 원칙을 앞세워 성장하고 있는 이너뷰티 브랜드입니다.
          </StoryText>
        </StoryContainer>
      </BigContainer>
    </Container>
  );
};

export default BrandStory;
