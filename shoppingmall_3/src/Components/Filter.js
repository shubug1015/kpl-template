import React, { Fragment } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { filterLists } from 'Components/Lists';
import { connect } from 'react-redux';
import store, { pageNum, filterOption } from 'store';
import { BsDot } from 'react-icons/bs';

const FilterContainer = styled.div`
  ${(props) => props.theme.columnStartCenter}
  justify-content: space-around;
  width: 100%;
  height: 20px;
  margin: 40px 0;
  font-size: 11px;
`;

const QtyConainer = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 100px;
  margin-left: 2%;
`;

const BtnContainer = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 360px;
  margin-top: 20px;
  margin-left: 1.2%;
`;

const Btn = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 60px;
  font-size: 10px;
  cursor: pointer;
`;

const Divider = styled.span`
  line-height: 4px;
  font-size: 10px;
  opacity: 0.7;
`;

const Filter = ({ itemNum, redux_savePageNum, redux_saveFilterOption }) => {
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

  const filter = store.getState().filter;

  return (
    <FilterContainer>
      <QtyConainer>{itemNum} products</QtyConainer>
      <BtnContainer>
        {filterLists.map &&
          filterLists.length > 0 &&
          filterLists.map((list) => (
            <Fragment key={list.id}>
              <Btn
                onClick={() => getFilter(list.name)}
                style={{ opacity: filter === list.name ? 0.6 : 1 }}
              >
                {list.text}
              </Btn>
              <Divider
                style={{
                  display: filterLists.length === list.id + 1 && 'none',
                }}
              >
                <BsDot />
              </Divider>
            </Fragment>
          ))}
      </BtnContainer>
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
