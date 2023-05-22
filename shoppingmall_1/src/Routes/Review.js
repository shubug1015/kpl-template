import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
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

const ReviewImage = styled.div`
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

const ReviewText = styled.textarea`
  border-radius: 4px;
  width: 80%;
  height: 200px;
  padding: 5px 10px;
  font-size: 13px;
  overflow: auto;
  outline: none;
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexCenter}
  padding-top: 10px;
  font-size: 12px;
`;

const SubmitBtn = styled.input`
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.whiteColor};
  margin-bottom: 20px;
  width: 100px;
  height: 40px;
  outline: none;
`;

const FixedContent = styled.div`
  font-size: 12px;
`;

const Review = (props) => {
  const itemName = props.location.state.name;
  const id = props.location.state.id;

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (star < 0.5) {
      alert('별점을 입력해 주세요.');
    } else if (title.length < 1) {
      alert('제목을 입력해 주세요.');
    } else if (content.length < 1) {
      alert('내용을 입력해 주세요.');
    } else {
      const data = new FormData();
      data.append('image', reviewImage);
      data.append('id', props.location.state.id);
      data.append('rating', star * 2);
      data.append('title', title);
      data.append('content', content);

      const productId = props.location.state.id;

      try {
        await productsApi.addReview(data, productId);
        alert('제출 되었습니다.');
        history.push(`/products/${id}`);
      } catch {
        return;
      }
    }
  };

  const [star, setStar] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [reviewImage, setReviewImage] = useState(null);
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

  const handleImage = (event) => {
    setReviewImage(event.target.files[0]);
  };

  return (
    <Container>
      <Content>
        <Title>
          <Text>REVIEW</Text>
        </Title>
        <EnterBox>
          <EnterForm onSubmit={handleSubmit}>
            <EnterList>
              <FormTitle>NAME</FormTitle>
              <FixedContent>{itemName}</FixedContent>
            </EnterList>
            <EnterList>
              <FormTitle>RATING</FormTitle>
              <Rating
                name='star-rating'
                size='large'
                value={star}
                precision={0.5}
                onChange={(event, newValue) => {
                  setStar(newValue);
                }}
              />
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
              <ReviewImage>
                <ImageInput type='file' name='image' onChange={handleImage} />
              </ReviewImage>
            </EnterList>
            <EnterList>
              <FormTitle>REVIEW</FormTitle>
              <ReviewText
                type='text'
                placeholder='구매평을 입력해 주세요.'
                onChange={updateText}
              />
            </EnterList>
            <BtnContainer>
              <SubmitBtn type='submit' value='제출하기' />
            </BtnContainer>
          </EnterForm>
        </EnterBox>
      </Content>
    </Container>
  );
};

export default Review;
