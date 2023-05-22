import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReviewSection from 'Components/Sections/ReviewSection';
import { connect } from 'react-redux';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  border-bottom: 1px solid #dbdbdb;
  width: 80%;
  margin-bottom: 100px;
  padding-bottom: 10px;
`;

const Text = styled.div`
  padding: 50px 0;
  font-size: 10px;
  opacity: 0.8;
`;

const WriteBtn = styled(Link)`
  ${(props) => props.theme.flexCenter};
  border: 1px solid black;
  border-radius: 3px;
  width: 60px;
  height: 20px;
  margin-left: 90%;
  font-size: 11px;
`;

const ReviewContent = ({ detail, reviews, purchase, logged }) => {
  const purchasedList = purchase.map((p) => p.product.id);
  return (
    <Container>
      {reviews && reviews.length > 0 ? (
        <React.Fragment key={detail.id}>
          {reviews.map((item) => (
            <ReviewSection
              key={item.id}
              ReviewId={item.id}
              ProductId={detail.id}
              num={item.num}
              rating={item.rating}
              title={item.title}
              content={item.content}
              name={item.user}
              date={item.created}
              user_pk={item.user_pk}
              image={item.image}
            />
          ))}
        </React.Fragment>
      ) : (
        <Text>작성된 리뷰가 없습니다.</Text>
      )}
      {purchasedList.includes(detail.id) && (
        <WriteBtn
          to={
            logged
              ? {
                  pathname: '/review',
                  state: {
                    id: detail.id,
                    name: detail.name,
                  },
                }
              : '/login'
          }
        >
          작성하기
        </WriteBtn>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    logged: state.user.logged,
  };
};

export default connect(mapStateToProps, null)(ReviewContent);
