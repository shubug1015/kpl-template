import React, { Fragment } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { pageNum, filterOption } from 'store';
import { filterList } from 'Components/Lists';

const FilterContainer = styled.div`
  @media only screen and (max-width: 900px) {
    ${(props) => props.theme.columnStartCenter}
    justify-content: space-around;
  }
  ${(props) => props.theme.flexBetweenCenter}
  width: 100%;
  margin-top: 50px;
  font-size: 11px;
`;

const QtyConainer = styled.div`
  ${(props) => props.theme.flexStartCenter}
  width: 100px;
  margin-left: 1%;
`;

const BtnContainer = styled.div`
  @media only screen and (max-width: 900px) {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 80%;
  }
  ${(props) => props.theme.flexAroundCenter}
  width: 300px;
  margin-right: 1%;
`;

const Btn = styled.div`
  @media only screen and (max-width: 900px) {
    /* width: 50px; */
  }
  ${(props) => props.theme.flexCenter}
  font-size: 10px;
  opacity: ${(props) => (props.selected ? 0.6 : 1)};
  cursor: pointer;
`;

const Divider = styled.span`
  display: ${(props) => props.show && 'none'};
  font-size: 10px;
  opacity: 0.7;
`;

const Filter = ({ itemNum, search, filter, redux_savePageInfo }) => {
  const pathurl = useLocation().pathname;
  const searchUrl = useLocation().search;
  const history = useHistory();

  const applyFilter = (filterType) => {
    if (searchUrl.includes('search')) {
      history.push(
        `${pathurl}?page=${1}&filter=${filterType}&search=${search}`
      );
    } else {
      history.push(`${pathurl}?page=${1}&filter=${filterType}`);
    }
  };

  const setFilter = (filterType) => {
    redux_savePageInfo(1, filterType);
    applyFilter(filterType);
  };

  return (
    <FilterContainer>
      <QtyConainer>{itemNum} products</QtyConainer>
      <BtnContainer>
        {filterList.map &&
          filterList.length > 0 &&
          filterList.map((l) => (
            <Fragment key={l.id}>
              <Btn
                onClick={() => setFilter(l.name)}
                selected={filter === l.name}
              >
                {l.text}
              </Btn>
              <Divider show={filterList.length === l.id + 1}>|</Divider>
            </Fragment>
          ))}
      </BtnContainer>
    </FilterContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    redux_savePageInfo: (page, filter) => {
      dispatch(pageNum(page));
      dispatch(filterOption(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
