// SearchDataContext.js
import React, { createContext, useState } from 'react';

const SearchDataContext = createContext();

export const SearchDataProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: new Date(),
    classType: 'all',
    // Add other relevant fields here
  });

  return (
    <SearchDataContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchDataContext.Provider>
  );
};

export default SearchDataContext;
