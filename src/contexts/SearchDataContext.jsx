// SearchDataContext.js
import React, { createContext, useContext, useState } from 'react';

const SearchDataContext = createContext();

export function useSearch() {
  return useContext(SearchDataContext);
}

export const SearchDataProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: new Date(),
    classType: 'all'
  });

  const value = {
    searchData,
    setSearchData
  };
  return (
    <SearchDataContext.Provider value={value} >
      {children}
    </SearchDataContext.Provider>
  );
};

export default SearchDataContext;
