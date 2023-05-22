import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import SearchPresenter from './SearchPresenter';
import { searchApi } from 'api';
import { connect } from 'react-redux';

const SearchContainer = ({ searchTerm, page, filter }) => {
  const [searchData, setSearchData] = useState({
    searchTerm: null,
    page: null,
    filter: null,
    searchResults: [],
    itemNum: null,
    loading: true,
  });

  const location = useLocation();
  const history = useHistory();

  const getItems = async (searchTerm, page, filter) => {
    const {
      data: { results: searchResults, count: itemNum },
    } = await searchApi.search(searchTerm, page, filter);
    setSearchData({
      searchTerm,
      page,
      filter,
      searchResults,
      itemNum,
      loading: false,
    });
  };

  const getData = async (searchTerm, page, filter) => {
    try {
      getItems(searchTerm, page, filter);
    } catch {
      history.push('/');
    }
  };

  useEffect(() => {
    const { pathname: pagePath } = location;
    getData(searchTerm, page, filter, pagePath);
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <SearchPresenter {...searchData} />;
};

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search,
    page: state.page,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, null)(SearchContainer);
