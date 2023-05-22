import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import store, { pageNum } from 'store';
import {
  CgChevronDoubleLeft,
  CgChevronLeft,
  CgChevronRight,
  CgChevronDoubleRight,
} from 'react-icons/cg';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 250px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  font-size: 10px;
`;

const PageNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  width: 22px;
  font-size: 12px;
  cursor: pointer;
`;

const PageBar = ({ itemNum, redux_savePageNum }) => {
  const items_in_page = 12;

  const maxPage =
    itemNum !== -1
      ? itemNum % items_in_page > 0
        ? Math.floor(itemNum / items_in_page) + 1
        : Math.floor(itemNum / items_in_page)
      : -1;

  const [pages, setPages] = useState(
    maxPage <= 5
      ? [...Array(maxPage)].map((_, index) => index + 1)
      : [...Array(5)].map((_, index) => index + 1)
  );

  const pathurl = useLocation().pathname;
  const searchUrl = useLocation().search;
  const history = useHistory();

  const nowPage = store.getState().page;
  const search = store.getState().search;
  const filter = store.getState().filter;

  const checkSearch = (pageNum) => {
    if (searchUrl.includes('search')) {
      history.push(
        `${pathurl}?search=${search}&filter=${filter}&page=${pageNum}`
      );
    } else {
      history.push(`${pathurl}?filter=${filter}&page=${pageNum}`);
    }
  };

  const getPage = (pageNum) => {
    redux_savePageNum(pageNum);
    checkSearch(pageNum);
  };

  const nextPage = () => {
    if (pages[pages.length - 1] >= maxPage) {
      setPages(pages);
    } else {
      var tmp = pages.map((page) => page + 5);
      maxPage <= 5
        ? setPages(pages)
        : setPages(tmp.filter((page) => page <= maxPage));
    }
  };

  const prevPage = () => {
    var tmp = pages[0] - 5;
    if (pages[0] === 1) {
      setPages(pages);
    } else {
      setPages([...Array(5)].map((_, index) => index + tmp));
    }
  };

  const firstPage = () => {
    redux_savePageNum(1);
    checkSearch(1);
  };

  const lastPage = () => {
    redux_savePageNum(maxPage);
    checkSearch(maxPage);
  };

  useEffect(() => {
    setPages(
      maxPage <= 5
        ? [...Array(maxPage)].map((_, index) => index + 1)
        : [...Array(5)].map((_, index) => index + 1)
    );
  }, [maxPage]);

  return (
    <Container>
      <Icon onClick={firstPage}>
        <CgChevronDoubleLeft />
      </Icon>
      <Icon onClick={prevPage}>
        <CgChevronLeft />
      </Icon>
      {pages.map((page) => (
        <PageNum
          key={page}
          onClick={() => getPage(page)}
          style={{
            borderBottom: page === nowPage && '2px solid black',
            opacity: page === nowPage ? 1 : 0.5,
          }}
        >
          {page}
        </PageNum>
      ))}
      <Icon onClick={nextPage}>
        <CgChevronRight />
      </Icon>
      <Icon onClick={lastPage}>
        <CgChevronDoubleRight />
      </Icon>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    redux_savePageNum: (data) => dispatch(pageNum(data)),
  };
};

export default connect(null, mapDispatchToProps)(PageBar);
