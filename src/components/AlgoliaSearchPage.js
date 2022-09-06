import React, { useRef, useState, useEffect } from 'react';
import { 
  InstantSearch, 
  SearchBox,
  Configure } from 'react-instantsearch-hooks-web';
import SearchSidebar from '../components/SearchSidebar';
import SeachContent from '../components/SearchContent';
import MediaQuery from 'react-responsive';
import routing from '../libs/algolia-search-page-routing';

const DEBOUNCE_TIME = 400;

const AlgoliaSearchPage = ({ searchClient, indexName, algoliaConfig }) => {

  const onDisplayFilterSidebarOnMobi = (status) => {
    status 
      ? document.body.classList.add('search-sidebar-filter-active') 
      : document.body.classList.remove('search-sidebar-filter-active') 
  }
  
  return <InstantSearch 
    searchClient={ searchClient } 
    indexName={ indexName } 
    routing={ true } > 
    <Configure hitsPerPage={ 10 } />
    <div className="algolia-search-page-summary">
      <div className="search__header">
        <MediaQuery maxWidth={ 730 }>
          <button 
            onClick={ e => {
              e.preventDefault();
              onDisplayFilterSidebarOnMobi(true);
            } }
            className="button-mobile-filter-toggle" 
            title={ 'Filter' }>
            <svg viewBox="0 0 24 24" version="1" xmlns="http://www.w3.org/2000/svg"><path d="M19 6h-14c-1.1 0-1.4.6-.6 1.4l4.2 4.2c.8.8 1.4 2.3 1.4 3.4v5l4-2v-3.5c0-.8.6-2.1 1.4-2.9l4.2-4.2c.8-.8.5-1.4-.6-1.4z"/></svg>
          </button>
        </MediaQuery>
        <SearchBox placeholder={ algoliaConfig.searchInputPlaceholder } />
      </div>
      <SearchSidebar toggleSidebarMobiFunc={ onDisplayFilterSidebarOnMobi } />
      <SeachContent />
    </div> 
  </InstantSearch>
}

export default AlgoliaSearchPage;