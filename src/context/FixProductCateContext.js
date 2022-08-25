import React, { createContext, useContext, useState, useEffect } from 'react';
import { queryAllProductCat, fixProductCat } from '../libs/api';

const FixProductCateContext = createContext();

const FixProductCateProvider = ({ children }) => {
  const [cats, setCats] = useState([]);

  const fixProductCat_Func = async (catID, products) => {
    const result = await fixProductCat(catID, products);
    console.log(result);
  }

  useEffect(() => {
    const _getCats = async () => {
      const result = await queryAllProductCat();
      setCats(result);
    }

    _getCats();
  }, [])

  const value = {
    version: '1.0.0',
    cats,
    fixProductCat_Func,
  };

  return <FixProductCateContext.Provider value={ value }>
    { children }
  </FixProductCateContext.Provider>
}

const useFixProductCateContext = () => {
  return useContext(FixProductCateContext);
}

export { FixProductCateProvider, useFixProductCateContext };