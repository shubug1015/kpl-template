import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchPresenter from './SearchPresenter';
import { searchApi } from 'api';
import store from 'store';

const SearchContainer = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState({
    searchTerm: null,
    page: null,
    filter: null,
    searchResults: [],
    itemNum: null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getItems = async (searchTerm, pageNum, filterOption) => {
    var {
      data: { results: searchResults, count: itemNum },
    } = await searchApi.search(searchTerm, pageNum, filterOption);
    setSearchData({
      searchTerm: searchTerm,
      page: pageNum,
      filter: filterOption,
      searchResults: searchResults,
      itemNum: itemNum,
    });
  };

  const getData = async (searchTerm, pageNum, filterOption) => {
    try {
      getItems(searchTerm, pageNum, filterOption);
    } catch {
      setError("Can't find anything.");
    } finally {
      setLoading(false);
    }
  };

  const pageNum = store.getState().page;
  const filterOption = store.getState().filter;
  const searchTerm = store.getState().search;

  useEffect(() => {
    const { pathname: pagePath } = location;
    getData(searchTerm, pageNum, filterOption, pagePath);
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <SearchPresenter {...searchData} error={error} loading={loading} />;
};

export default SearchContainer;
