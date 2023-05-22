import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { pageNum } from 'store';
import {
  CgChevronDoubleLeft,
  CgChevronLeft,
  CgChevronRight,
  CgChevronDoubleRight,
} from 'react-icons/cg';

const Container = styled.div`
  ${(props) => props.theme.flexAroundCenter}
  width: 250px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Icon = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 20px;
  font-size: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

const PageNum = styled.div`
  ${(props) => props.theme.flexCenter}
  border-bottom: ${(props) =>
    props.selected ? '2px solid black' : ' 1px solid black'};
  width: 22px;
  font-size: 12px;
  opacity: ${(props) => (props.selected ? 1 : 0.5)};
  cursor: pointer;
`;

const PageBar = ({ itemNum, nowPage, filter, search, redux_savePageNum }) => {
  const items_in_page = 12;

  const maxPage =
    itemNum !== -1
      ? itemNum % items_in_page > 0
        ? Math.floor(itemNum / items_in_page) + 1
        : Math.floor(itemNum / items_in_page)
      : -1;

  const pathurl = useLocation().pathname;
  const searchUrl = useLocation().search;
  const history = useHistory();

  const quo = Math.floor(nowPage / 5);
  const rem = nowPage % 5;

  const pageArray =
    rem === 0
      ? [...Array(5)]
          .map((_, index) => 5 * (quo - 1) + index + 1)
          .filter((i) => i <= maxPage)
      : [...Array(5)]
          .map((_, index) => 5 * quo + index + 1)
          .filter((i) => i <= maxPage);

  const [pages, setPages] = useState(pageArray);

  const applyPage = (pageNum) => {
    if (searchUrl.includes('search')) {
      history.push(
        `${pathurl}?page=${pageNum}&filter=${filter}&search=${search}`
      );
    } else {
      history.push(`${pathurl}?page=${pageNum}&filter=${filter}`);
    }
  };

  const setPage = (pageNum) => {
    redux_savePageNum(pageNum);
    applyPage(pageNum);
  };

  const nextPage = () => {
    if (pages[pages.length - 1] < maxPage && maxPage > 5) {
      let tmp = pages.map((page) => page + 5);
      setPages(tmp.filter((page) => page <= maxPage));
    }
  };

  const prevPage = () => {
    let tmp = pages[0] - 5;
    if (pages[0] === 1) {
      setPages(pages);
    } else {
      setPages([...Array(5)].map((_, index) => index + tmp));
    }
  };

  const firstPage = () => {
    setPages([...Array(5)].map((_, index) => index + 1));
    redux_savePageNum(1);
    applyPage(1);
  };

  const lastPage = () => {
    if (pages[pages.length - 1] < maxPage && maxPage > 5) {
      let tmp = pages.map((page) => page + 5);
      setPages(tmp.filter((page) => page <= maxPage));
    }
    redux_savePageNum(maxPage);
    applyPage(maxPage);
  };

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
          onClick={() => setPage(page)}
          selected={page === nowPage}
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

const mapStateToProps = (state) => {
  return {
    nowPage: state.page,
    filter: state.filter,
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    redux_savePageNum: (data) => dispatch(pageNum(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageBar);
