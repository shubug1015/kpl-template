import React, { useState } from 'react';
import styled from 'styled-components';
import { productsApi } from 'api';
import Rating from '@material-ui/lab/Rating';
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

const ReviewStar = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 8%;
  margin: 0 1%;
`;

const ReviewDelete = styled.div`
  visibility: ${(props) => (props.userCheck ? '' : 'hidden')};
  ${(props) => props.theme.flexCenter}
  width: 5%;
  font-size: 8px;
  opacity: 0.5;
`;

const ReviewDeleteBtn = styled.div`
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

const ContentText = styled.div`
  line-height: 150%;
  border: ${(props) => props.theme.mainBorder};
  border-radius: 4px;
  width: 95%;
  margin: 20px 0;
  padding: 30px 60px;
  font-size: 14px;
`;

const ReviewSection = ({
  ReviewId,
  ProductId,
  rating,
  title,
  content,
  name,
  date,
  num,
  user_pk,
  image,
}) => {
  const [view, setView] = useState(true);
  const [open, setOpen] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
    setOpenImage(false);
  };

  const userPk = store.getState()?.user.user_pk;
  const deleteReview = (event) => {
    event.preventDefault();
    productsApi.deleteReview(ReviewId, ProductId);
    alert('삭제되었습니다.');
    setView(false);
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
            <ReviewStar>
              <Rating
                name='star-rating'
                size='small'
                value={rating / 2}
                precision={0.5}
                readOnly={true}
              />
            </ReviewStar>
            <ReviewDelete userCheck={userPk === parseInt(user_pk)}>
              <ReviewDeleteBtn onClick={deleteReview}>삭제</ReviewDeleteBtn>
            </ReviewDelete>
          </Container>
          {open === true ? (
            <ContentContainer>
              {image !== null ? (
                <Image
                  bgUrl={`${image}`}
                  onClick={handleImage}
                  imageOpen={openImage}
                />
              ) : null}
              <ContentText>{content}</ContentText>
            </ContentContainer>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default ReviewSection;
