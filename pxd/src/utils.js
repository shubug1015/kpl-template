import { useState, useEffect, useRef } from 'react';

export const useHomeRef = () => {
  const homeRef = {
    mainRef: useRef(null),
    ourWorkRef: useRef(null),
    ourStoryRef: useRef(null),
    ourServiceRef: useRef(null),
  };
  return homeRef;
};

// scroll y값 가져오는 함수
export const useScroll = () => {
  const [scroll, setScroll] = useState({
    y: null,
  });
  const onScroll = () => {
    setScroll({
      y: window.scrollY,
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
  return scroll;
};

// scroll direction 가져오는 함수
export const useScrollDir = () => {
  const [scrollDir, setScrollDir] = useState('top');
  const [flag, setFlag] = useState(0);
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let test = flag;
    const updateScrollDir = () => {
      if (test === 0) {
        setFlag(1);
      }
      const scrollY = window.pageYOffset;
      setScrollDir(
        window.scrollY === 0
          ? 'top'
          : scrollY > lastScrollY
          ? 'scroll down'
          : 'scroll up'
      );
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, [scrollDir]);
  return { scrollDir, flag };
};

// home 위치 가져오는 함수
export const useController = (homeRef, y) => {
  const { mainRef, ourWorkRef, ourStoryRef, ourServiceRef } = homeRef;

  const [controller, setController] = useState(null);

  const mainHeight = mainRef.current?.offsetHeight;

  const ourWorkHeight = mainHeight + ourWorkRef.current?.offsetHeight;

  const ourStoryHeight = ourWorkHeight + ourStoryRef.current?.offsetHeight;

  const ourServiceHeight = ourStoryHeight + ourServiceRef.current?.offsetHeight;

  const reachOurWork = mainHeight < y && y <= ourWorkHeight;
  const reachOurStory = ourWorkHeight < y && y <= ourStoryHeight;
  const reachService = ourStoryHeight < y && y <= ourServiceHeight;

  useEffect(() => {
    if (reachOurWork) {
      setController('OurWork');
    } else if (reachOurStory) {
      setController('OurStory');
    } else if (reachService) {
      setController('OurService');
    } else {
      setController(null);
    }
  }, [y]);

  return controller;
};
