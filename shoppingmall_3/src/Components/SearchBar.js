import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { pageNum, filterOption, searchTerm } from 'store';
import { IoIosSearch } from 'react-icons/io';

const Container = styled.form`
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  ${(props) => props.theme.flexStartCenter}
  width: 210px;
  height: 100%;
`;

const SearchBox = styled.input`
  border: none;
  padding-bottom: 3px;
  outline: none;
  background-color: transparent;
  color: white;
  font-size: 11px;
  transition: width 0.3s ease-in-out;
  ::placeholder {
    color: white;
  }
`;

const SearchIcon = styled.div`
  ${(props) => props.theme.flexCenter}
  height: 100%;
  padding: 10px;
  font-size: 15px;
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

  const style = {
    inputStyle: {
      width: search ? '80%' : '0%',
      borderBottom: search ? '1px solid white' : 'none',
    },
  };

  return (
    <Container
      onSubmit={handleSubmit}
      onClick={focusInSearch}
      onBlur={focusOutSearch}
    >
      <SearchIcon onClick={handleSubmit}>
        <IoIosSearch />
      </SearchIcon>
      <SearchBox
        type='text'
        placeholder='search products'
        value={term}
        onChange={updateTerm}
        style={style.inputStyle}
      />
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
