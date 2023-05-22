import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.header`
  @media only screen and (max-width: 765px) {
    ${(props) => props.theme.columnStartCenter}
    justify-content:center;
    padding: 0 5%;
  }
  ${(props) => props.theme.flexBetweenCenter}
  position: ${(props) => (props.scroll ? 'fixed' : 'absolute')};
  top: ${(props) => (props.scroll ? 0 : '55px')};
  padding: 0 8%;
  background-color: ${(props) => (props.scroll ? '#FFFFFF' : 'transparent')};
  width: 100vw;
  max-width: 100%;
  height: ${(props) => props.theme.headerHeight};
  color: ${(props) => (props.scroll ? 'black' : '#FFFFFF')};
  font-size: 14px;
  font-weight: 700;
  z-index: 1;
`;

const LogoContainer = styled.div`
  @media only screen and (max-width: 765px) {
    width: 100%;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 800px;
`;

const Logo = styled.div`
  /* @media only screen and (max-width: 765px) {
    width: 40px;
    height: 40px;
  } */
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  /* width: ${(props) => (props.scroll ? '56px' : '81px')};
  height: ${(
    props
  ) => (props.scroll ? '45px' : '67px')}; */
  width: 150px;
  height: 60px;
`;

const List = styled.div`
  @media only screen and (max-width: 765px) {
    width: 100%;
    ${(props) => props.theme.flexBetweenCenter};
  }
  ${(props) => props.theme.flexCenter};
  font-family: 'Lato', sans-serif;
`;

const Item = styled.div`
  @media only screen and (max-width: 765px) {
    margin-right: 0px;
    padding-bottom: 5px;
  }
  border-bottom: ${(props) => (props.focus ? '3px solid black' : 'none')};
  margin-right: 34px;
  padding-bottom: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
  display: ${(props) => (props.hide ? 'none' : 'flex')};
`;

const Header = ({ ref1, ref2, ref3, ref4, ref5, ref6, ref7 }) => {
  const [scrollY, setScrollY] = useState({ y: 0 });
  const useScroll = () => {
    const onScroll = () => {
      setScrollY({ y: window.scrollY });
    };
    useEffect(() => {
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    });
    return scrollY;
  };

  const { y } = useScroll();

  // const [item, setItem] = useState(null);

  // const scrollToRef = (ref) => {
  //   if (ref.current.id === 'first') {
  //     window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop + 120 });
  //   } else if (ref.current.id === 'seventh') {
  //     window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop - 100 });
  //   } else {
  //     window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop - 60 });
  //   }
  // };

  // const clickFunc = {
  //   click1: (id) => {
  //     setItem(id);
  //     scrollToRef(ref1);
  //   },
  //   click2: (id) => {
  //     setItem(id);
  //     scrollToRef(ref2);
  //   },
  //   click3: (id) => {
  //     setItem(id);
  //     scrollToRef(ref3);
  //   },
  //   click4: (id) => {
  //     setItem(id);
  //     scrollToRef(ref4);
  //   },
  //   click5: (id) => {
  //     setItem(id);
  //     scrollToRef(ref5);
  //   },
  // };

  const scrollToRef = (ref) =>
    window.scrollTo({
      behavior: 'smooth',
      top: ref.current.offsetTop + 10,
    });

  const [header, setHeader] = useState(null);

  const HEADER_HEIGHT = 108;

  const homeHeight = ref1.current?.offsetHeight - 50 - HEADER_HEIGHT;
  const spaceHeight = homeHeight + ref2.current?.offsetHeight;
  const companyHeight = spaceHeight + ref3.current?.offsetHeight;
  const betweenHeight =
    companyHeight + ref4.current?.offsetHeight + ref5.current?.offsetHeight;
  const specialHeight = betweenHeight + ref6.current?.offsetHeight;
  const applyHeight = specialHeight + ref7.current?.offsetHeight;

  // const reachSecond = homeHeight < y && y <= spaceHeight;
  // const reachThird = spaceHeight < y && y <= companyHeight;
  // const reachFourth = companyHeight < y && y <= specialHeight;
  // const reachFifth = specialHeight < y && y <= applyHeight;
  // const reachEnd = applyHeight < y;

  const reachHome = 0 < y && y <= homeHeight;
  const reachSpace = homeHeight < y && y <= spaceHeight;
  const reachCompany = spaceHeight < y && y <= companyHeight;
  const reachSpecial = companyHeight < y && y <= specialHeight;
  const reachApply = specialHeight < y && y <= applyHeight;

  useEffect(() => {
    if (reachHome) {
      setHeader('home');
    } else if (reachSpace) {
      setHeader('space');
    } else if (reachCompany) {
      setHeader('company');
    } else if (reachSpecial) {
      setHeader('special');
    } else if (reachApply) {
      setHeader('apply');
    } else {
      setHeader(null);
    }
  }, [y]);

  // const { click1, click2, click3, click4, click5 } = clickFunc;

  const list = [
    {
      id: 0,
      name: 'HOME',
      ref: ref1,
      // func: click1,
      focus: header === 'home',
    },
    {
      id: 1,
      name: 'SPACE',
      ref: ref2,
      // func: click2,
      focus: header === 'space',
    },
    {
      id: 2,
      name: 'COMPANY',
      ref: ref3,
      // func: click3,
      focus: header === 'company',
    },
    {
      id: 3,
      name: '',
      ref: ref4,
      // func: click3,
      focus: header === '',
    },
    {
      id: 4,
      name: '',
      ref: ref5,
      // func: click3,
      focus: header === '',
    },
    {
      id: 5,
      name: 'SPECIAL',
      ref: ref6,
      // func: click4,
      focus: header === 'special',
    },
    {
      id: 6,
      name: 'APPLY',
      ref: ref7,
      // func: click5,
      focus: header === 'apply',
    },
  ];

  return (
    <Container scroll={y > 50}>
      <LogoContainer>
        <Logo
          scroll={y > 50}
          bgUrl={require(`Components/assets/${
            y > 50 ? 'logo_1.png' : 'logo_3.png'
          }`)}
        />
      </LogoContainer>
      <List>
        {list.map((l) => (
          <Item
            key={l.id}
            id={l.id}
            // onClick={() => l.func(l.id)}
            onClick={() => scrollToRef(l.ref)}
            focus={l.focus}
            hide={(l.id === 3) | (l.id === 4)}
          >
            {l.name}
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Header;
