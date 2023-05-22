import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { pageNum, filterOption, searchTerm } from 'store';
import { IoIosSearch } from 'react-icons/io';

const Container = styled.div`
  @media only screen and (max-width: 900px) {
    width: 55%;
  }
  width: 100%;
`;

const Search = styled.form`
  ${(props) => props.theme.flexCenter};
  width: 100%;
`;

const SearchBox = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 10px;
  transition: width 0.3s;
  ::placeholder {
    color: black;
  }
  padding-bottom: 5px;
`;

const SearchIcon = styled.div`
  ${(props) => props.theme.flexCenter};
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
`;

const SearchBar = ({
  redux_savePageNum,
  redux_saveFilterOption,
  redux_saveSearchTerm,
}) => {
  const [term, setTerm] = useState('');
  const [search, setSearch] = useState(false);

  const focusInSearch = () => {
    setSearch(true);
  };

  const focusOutSearch = () => {
    setSearch(false);
  };

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (term !== '') {
      try {
        redux_savePageNum(1);
        redux_saveFilterOption('new');
        redux_saveSearchTerm(term);
        history.push(`/products/search/?search=${term}&page=1&filter=new`);
      } catch {
        alert('Error');
      } finally {
        setTerm('');
      }
    } else if (term === '') {
      alert('검색어를 입력해주세요.');
    }
  };

  const updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    setTerm(value);
  };

  return (
    <Container>
      <Search
        onSubmit={handleSubmit}
        onClick={focusInSearch}
        onBlur={focusOutSearch}
      >
        <SearchBox
          type='text'
          placeholder='상품명 검색'
          value={term}
          onChange={updateTerm}
          style={{ width: search ? '65%' : '55%' }}
        />
        <SearchIcon onClick={handleSubmit}>
          <IoIosSearch />
        </SearchIcon>
      </Search>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    redux_savePageNum: (data) => dispatch(pageNum(data)),
    redux_saveFilterOption: (data) => dispatch(filterOption(data)),
    redux_saveSearchTerm: (data) => dispatch(searchTerm(data)),
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
