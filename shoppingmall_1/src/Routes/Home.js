import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { pageNum, filterOption, searchTerm } from 'store';
import Meta from 'Components/Meta';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
`;

const Image = styled.div`
  @media only screen and (max-width: 760px) {
    width: 90vw;
  }
  width: 80vw;
  height: 100vh;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  ${(props) => props.theme.flexCenter};
  flex-wrap: wrap;
  width: 100vw;
  height: 160vh;
`;

const Section = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100vw;
  height: 150px;
  font-size: 24px;
  font-weight: 100;
`;

const Item = styled.div`
  @media only screen and (max-width: 900px) {
    width: 50%;
    height: 33.33%;
    border-right: none;
    :nth-child(2n) {
      border-left: 3px solid ${(props) => props.theme.mainColor};
    }
    :nth-child(-n + 4) {
      border-bottom: 3px solid ${(props) => props.theme.mainColor};
    }
  }
  border-right: 3px solid ${(props) => props.theme.mainColor};
  :nth-child(3n) {
    border-right: none;
  }
  :nth-child(-n + 3) {
    border-bottom: 3px solid ${(props) => props.theme.mainColor};
  }
  width: 33.33%;
  height: 50%;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.8;
  :hover {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
`;

const Content2 = styled.div`
  ${(props) => props.theme.flexAroundCenter}
  width: 95vw;
  height: 100vh;
  margin-bottom: 50px;
`;

const Product = styled(Link)`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: ${(props) => (props.hover ? 'brightness(20%)' : 'brightness(100%)')};
  transition: filter 0.3s ease-in-out;
`;

const Text = styled(Link)`
  position: absolute;
  visibility: ${(props) => (props.hover ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.hover ? 1 : 0)};
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  color: white;
  font-size: 24px;
`;

const Home = ({ redux_initPageInfo }) => {
  const [hover, setHover] = useState(false);

  const trueHover = () => setHover(true);
  const falseHover = () => setHover(false);

  const list = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];

  const openPopup = () => {
    const check = localStorage.getItem('hidePopup');
    if (check === false || check === null) {
      window.open(
        '/popup',
        '_blank',
        'toolbar=yes,scrollbars=yes,resizable=0,top=50,left=500,width=600,height=600'
      );
    }
  };

  useEffect(() => {
    openPopup();
    redux_initPageInfo(1, 'new', '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const metaData = {
    title: '트렌드 리더의 쇼핑몰 | Hipster',
    description:
      '트렌드를 이끌어 나가는 Hipster와 함께 당신의 옷장을 트렌디하게!',
  };

  return (
    <Container>
      <Meta data={metaData} />
      <Image bgUrl={require('Components/assets/main_1.jpg')} />
      <Section>Hipster</Section>
      <Content>
        {list &&
          list.length > 0 &&
          list.map((l) => (
            <Item
              key={l.id}
              bgUrl={require(`Components/assets/lookbook_${l.id + 1}.jpg`)}
            ></Item>
          ))}
      </Content>
      <Section>Collaboration</Section>
      <Content2>
        <Product
          bgUrl={require('Components/assets/collabo_1.jpg')}
          hover={hover}
          onMouseEnter={trueHover}
          onMouseLeave={falseHover}
          to='/shop/?page=1&filter=new'
        />
        <Text
          hover={hover}
          onMouseEnter={trueHover}
          to='/shop/?page=1&filter=new'
        >
          [Hipster X Magnif]
        </Text>
      </Content2>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    redux_initPageInfo: (page, filter, search) => {
      dispatch(pageNum(page));
      dispatch(filterOption(filter));
      dispatch(searchTerm(search));
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
