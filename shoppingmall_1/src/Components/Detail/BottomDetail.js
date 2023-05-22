import React, { useRef } from 'react';
import styled from 'styled-components';
import QnATitle from 'Components/Detail/QnATitle';
import QnAContent from 'Components/Detail/QnAContent';
import ReviewContent from 'Components/Detail/ReviewContent';
import ReviewTitle from 'Components/Detail/ReviewTitle';
import RecentProduct from 'Components/Detail/RecentProduct';
import { RiArrowDropDownFill } from 'react-icons/ri';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  margin-bottom: 100px;
`;

const Navigator = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 75%;
  height: 80px;
  margin: 10px 0px;
`;

const NavBtn = styled.div`
  ${(props) => props.theme.flexCenter}
  /* width: 100px; */
  height: 50px;
  font-size: 12px;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 1%;
  }
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
  /* background-color: red; */
`;

const Content = styled.div`
  width: 75%;
`;

const NavTitle = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 60px;
  font-size: 12px;
  font-weight: 700;
  margin-top: ${(props) => (props.getMargin ? '60px' : '0')};
`;

const DetailInfo = styled.div`
  ${(props) => props.theme.columnCenter}
  width: 100%;
  height: 100%;
`;

const Image = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  height: 100vh;
  background-color: #efefef;
  margin-bottom: 10px;
  opacity: 0.8;
`;

const BottomDetail = ({ products, reviews, qnas, purchase, detail }) => {
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
          Product Detail <RiArrowDropDownFill />
        </NavBtn>
        <NavBtn onClick={handleClick2}>
          Purchase Info <RiArrowDropDownFill />
        </NavBtn>
        <NavBtn onClick={handleClick3}>
          Review <RiArrowDropDownFill />
        </NavBtn>
        <NavBtn onClick={handleClick4}>
          QnA <RiArrowDropDownFill />
        </NavBtn>
      </Navigator>
      <Content>
        <NavTitle ref={ref1}>Product Detail</NavTitle>
        <DetailInfo>
          <Image>Detail Image</Image>
          <Image>Detail Image</Image>
          <Image>Detail Image</Image>
        </DetailInfo>
        <NavTitle ref={ref2}>Purchase Info</NavTitle>
        <DetailInfo>
          <Image>Detail Image</Image>
          <Image>Detail Image</Image>
        </DetailInfo>
        <NavTitle ref={ref3} getMargin={true}>
          Review
        </NavTitle>
        <DetailInfo>
          <ReviewTitle />
          <ReviewContent
            reviews={reviews}
            purchase={purchase}
            detail={detail}
          />
        </DetailInfo>
        <NavTitle ref={ref4} getMargin={true}>
          QnA
        </NavTitle>
        <DetailInfo>
          <QnATitle />
          <QnAContent qnas={qnas} detail={detail} />
        </DetailInfo>
      </Content>
      <RecentProduct />
    </Container>
  );
};

// BottomDetail.propTypes = {
//   name: PropTypes.string,
//   price: PropTypes.number,
// };

export default BottomDetail;
