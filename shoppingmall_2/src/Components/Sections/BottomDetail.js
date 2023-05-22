import React, { useRef } from 'react';
import styled from 'styled-components';
import RecentSection from 'Components/RecentSection';
import store from 'store';
import { RiArrowDropDownFill } from 'react-icons/ri';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 90%;
  margin: 100px 5%;
  padding: 15px;
`;

const Navigator = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 75%;
  height: 80px;
  margin: 10px 0px;
`;

const NavBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 90px;
  height: 40px;
  font-size: 12px;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 1%;
  }
  :hover {
    opacity: 0.7;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const NavTitle = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 40px;
  font-size: 12px;
  font-weight: 700;
`;

const DetailInfo = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const Image = styled.div`
  width: 100%;
  height: 500px;
  background-color: #dbdbdb;
  margin-bottom: 10px;
`;

const List = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  font-size: 12px;
`;

const Num = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 5%;
  margin-right: 1%;
`;

const Title = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 40%;
  margin-right: 1%;
`;

const Writer = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 20%;
  margin-right: 1%;
`;

const Date = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 20%;
  margin-right: 1%;
`;

const Star = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 10%;
`;

const DeleteReview = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 5%;
`;

const QnALock = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 10%;
`;

const DeleteQnA = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 5%;
`;

const ReviewContent = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 80%;
  height: 200px;
  font-size: 11px;
  opacity: 0.7;
`;

const QnAContent = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 80%;
  height: 200px;
  font-size: 11px;
  opacity: 0.7;
`;

const RecentContainer = styled.div`
  width: 100%;
  height: 350px;
  margin-top: 50px;
`;

const Recent = styled.div`
  ${(props) => props.theme.flexStartCenter}
  border-top: ${(props) => props.theme.blackBorder};
  border-bottom: ${(props) => props.theme.blackBorder};
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const BottomDetail = () => {
  const products = store.getState().product;

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const scrollToRef = (ref) =>
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop - 50 });

  const handleClick1 = () => scrollToRef(ref1);
  const handleClick2 = () => scrollToRef(ref2);
  const handleClick3 = () => scrollToRef(ref3);
  const handleClick4 = () => scrollToRef(ref4);

  return (
    <Container>
      <Navigator>
        <NavBtn onClick={handleClick1}>
          제품 상세 <RiArrowDropDownFill />
        </NavBtn>
        <NavBtn onClick={handleClick2}>
          구매정보 <RiArrowDropDownFill />
        </NavBtn>
        <NavBtn onClick={handleClick3}>
          리뷰 <RiArrowDropDownFill />
        </NavBtn>
        <NavBtn onClick={handleClick4}>
          문의 <RiArrowDropDownFill />
        </NavBtn>
      </Navigator>
      <Content>
        <NavTitle ref={ref1}>제품 상세</NavTitle>
        <DetailInfo>
          <Image />
          <Image />
          <Image />
        </DetailInfo>
        <NavTitle ref={ref2}>구매정보</NavTitle>
        <DetailInfo>
          <Image />
          <Image />
        </DetailInfo>
        <NavTitle ref={ref3}>리뷰</NavTitle>
        <DetailInfo>
          <List>
            <Num>NO.</Num>
            <Title>제목</Title>
            <Writer>작성자</Writer>
            <Date>작성일</Date>
            <Star>별점</Star>
            <DeleteReview></DeleteReview>
          </List>
          <ReviewContent>등록된 리뷰가 없습니다.</ReviewContent>
        </DetailInfo>
        <NavTitle ref={ref4}>문의</NavTitle>
        <DetailInfo>
          <List>
            <Num>NO.</Num>
            <Title>제목</Title>
            <Writer>작성자</Writer>
            <Date>작성일</Date>
            <QnALock>비밀답변</QnALock>
            <DeleteQnA></DeleteQnA>
          </List>
          <QnAContent>등록된 문의사항이 없습니다.</QnAContent>
        </DetailInfo>
      </Content>
      <RecentContainer>
        <NavTitle>최근 본 상품</NavTitle>
        <Recent>
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <RecentSection
                key={product.id}
                id={product.id}
                imageUrl={product.product_image}
                name={product.name}
                brand={product.brand}
                price={product.price}
              />
            ))}
        </Recent>
      </RecentContainer>
    </Container>
  );
};

// BottomDetail.propTypes = {
//   name: PropTypes.string,
//   price: PropTypes.number,
// };

export default BottomDetail;
