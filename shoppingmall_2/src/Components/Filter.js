import React, { Fragment, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import store, { pageNum, filterOption } from 'store';
import { filterLists } from 'Components/Lists';
import { connect } from 'react-redux';
import { BsFilterLeft, BsFillCaretLeftFill } from 'react-icons/bs';

const FilterContainer = styled.div`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.columnStartCenter};
  justify-content: center;
  width: 80%;
  height: 80px;
  font-size: 11px;
  padding: 0 20px;
  margin-top: 30px;
  /* background-color: red; */
`;

const QtyConainer = styled.div`
  ${(props) => props.theme.flexStartCenter};
  width: 100%;
  height: 40px;
`;

const BottomContainer = styled.div`
  display: flex;
`;

const FilterBtn = styled.div`
  ${(props) => props.theme.flexCenter};
  color: #6eb06e;
  height: 40px;
  font-size: 23px;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexStartCenter};
  height: 40px;
  width: 100%;
`;

const Btn = styled.div`
  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
  ${(props) => props.theme.flexCenter};
  font-size: 10px;
  padding: 0 5px;
  cursor: pointer;
`;

const Divider = styled.span`
  font-size: 10px;
  padding: 0 5px;
  opacity: 0.7;
`;

const Filter = ({ itemNum, redux_savePageNum, redux_saveFilterOption }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  const pathurl = useLocation().pathname;
  const searchUrl = useLocation().search;
  const history = useHistory();

  const search = store.getState().search;
  const page = store.getState().page;

  const checkSearch = (filterType) => {
    if (searchUrl.includes('search')) {
      history.push(
        `${pathurl}?search=${search}&filter=${filterType}&page=${page}`
      );
    } else {
      history.push(`${pathurl}?filter=${filterType}&page=${page}`);
    }
  };

  const getFilter = (filterType) => {
    redux_savePageNum(1);
    redux_saveFilterOption(filterType);
    checkSearch(filterType);
  };

  const filterStore = store.getState().filter;

  return (
    <FilterContainer>
      <QtyConainer>{itemNum}개의 상품이 있습니다.</QtyConainer>
      <BottomContainer>
        <FilterBtn
          onClick={toggleOpen}
          style={{
            opacity: open ? '0' : '1',
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <BsFilterLeft />
        </FilterBtn>
        <BtnContainer
          style={{
            visibility: open ? 'visible' : 'hidden',
            opacity: open ? '1' : '0',
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          {filterLists.map &&
            filterLists.length > 0 &&
            filterLists.map((filter) => (
              <Fragment key={filter.id}>
                <Btn
                  onClick={() => getFilter(filter.name)}
                  style={{ opacity: filterStore === filter.name ? 0.6 : 1 }}
                >
                  {filter.text}
                </Btn>
                <Divider
                  style={{
                    display: filterLists.length === filter.id + 1 && 'none',
                  }}
                >
                  |
                </Divider>
              </Fragment>
            ))}
          <BsFillCaretLeftFill
            style={{ fontSize: '10px', cursor: 'pointer' }}
            onClick={toggleOpen}
          />
        </BtnContainer>
      </BottomContainer>
    </FilterContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    redux_savePageNum: (data) => dispatch(pageNum(data)),
    redux_saveFilterOption: (data) => dispatch(filterOption(data)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
