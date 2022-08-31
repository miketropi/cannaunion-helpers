import React, { useRef, useState, useEffect } from 'react';
import { 
  InstantSearch, 
  SearchBox,
  Configure } from 'react-instantsearch-hooks-web';
import SearchSidebar from '../components/SearchSidebar';
import SeachContent from '../components/SearchContent';

const DEBOUNCE_TIME = 400;

const AlgoliaSearchPage = ({ searchClient, indexName, algoliaConfig }) => {
  return <InstantSearch 
    searchClient={ searchClient } 
    indexName={ indexName } 
    routing={ true } >
    <Configure hitsPerPage={ 10 } />
    <div className="algolia-search-page-summary">
      <div className="search__header">
        <SearchBox placeholder={ algoliaConfig.searchInputPlaceholder } />
      </div>
      <SearchSidebar />
      <SeachContent />
    </div> 
    
    {/* <div className="ais-serach-app">
      <SearchBox placeholder={ searchInputPlaceholder } />
    </div>

    <div className="ais-serach-results">
      <div className="ais-filters-col">
        <div className="ais-filters-item ais-clear-refinements">
          <h2>Filters</h2>
          <ClearRefinements />
        </div>

        <div className="ais-filters-item ais-refinementlist">
          <h3 className="ais-filter-title">taxonomies.pa_amount</h3>
          <RefinementList attribute="taxonomies.pa_amount" limit={5} showMore={true} />
        </div>

        <div className="ais-filters-item ais-refinementlist">
          <h3 className="ais-filter-title">taxonomies.pa_aroma</h3>
          <RefinementList attribute="taxonomies.pa_aroma" limit={5} showMore={true} />
        </div>

        <div className="ais-filters-item ais-refinementlist">
          <h3 className="ais-filter-title">taxonomies.pa_bottle-type</h3>
          <RefinementList attribute="taxonomies.pa_bottle-type" limit={5} showMore={true} />
        </div>

        <div className="ais-filters-item ais-refinementlist">
          <h3 className="ais-filter-title">taxonomies.pa_brand</h3>
          <RefinementList attribute="taxonomies.pa_brand" limit={5} showMore={true} />
        </div>

        <div className="ais-filters-item ais-refinementlist">
          <h3 className="ais-filter-title">taxonomies.pa_color</h3>
          <RefinementList attribute="taxonomies.pa_color" limit={5} showMore={true} />
        </div>

        <div className="ais-filters-item ais-refinementlist">
          <h3 className="ais-filter-title">taxonomies.pa_falvours</h3>
          <RefinementList attribute="taxonomies.pa_falvours" limit={5} showMore={true} />
        </div>

        <div className="ais-filters-item ais-refinementlist">
          <h3 className="ais-filter-title">taxonomies.pa_flavour</h3>
          <RefinementList attribute="taxonomies.pa_flavour" limit={5} showMore={true} />
        </div>

        <div className="ais-filters-item ais-refinementlist">
          <h3 className="ais-filter-title">taxonomies.product_cat</h3>
          <RefinementList attribute="taxonomies.product_cat" limit={5} showMore={true} />
        </div>

      </div>

      <div className="ais-results-col">
        <div className="results-meta">
          <MetaInfoInstantSearch />
          <CurrentRefinements />
        </div>

        <div className="results-product">
          <Hits hitComponent={ Hit } />
          <Pagination />
        </div>
      </div>
    </div> */}
  </InstantSearch>
}

export default AlgoliaSearchPage;