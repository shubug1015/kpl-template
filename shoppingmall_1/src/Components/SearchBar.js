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
  /* ${(props) => props.theme.flexCenter} */
  width: 100%;
`;

const Search = styled.form`
  ${(props) => props.theme.flexCenter}
  width: 100%;
`;

const SearchBox = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: ${(props) => props.theme.blackBorder};
  width: ${(props) => (props.focus ? '65%' : '55%')};
  padding-bottom: 5px;
  outline: none;
  font-size: 11px;
  transition: width 0.3s;
  ::placeholder {
    color: black;
  }
`;

const SearchIcon = styled.div`
  ${(props) => props.theme.flexCenter}
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
`;

const SearchBar = ({ redux_savePageInfo }) => {
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
        redux_savePageInfo(1, 'new', term);
        history.push(`/products/search/?page=1&filter=new&search=${term}`);
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
          placeholder='search products'
          value={term}
          onChange={updateTerm}
          focus={search}
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
    redux_savePageInfo: (page, filter, search) => {
      dispatch(pageNum(page));
      dispatch(filterOption(filter));
      dispatch(searchTerm(search));
    },
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
