import { createRoot } from 'react-dom/client';
import algoliasearch from 'algoliasearch/lite';

import {
  InstantSearch,
  ClearRefinements,
  CurrentRefinements,
  RefinementList,
  useInstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Configure,
  Pagination } from 'react-instantsearch-hooks-web';

const { algolia } = CH_PHP_DATA;
const { AppID, AdminAPIKey, searchIndex, searchInputPlaceholder } = {
  AppID: '',
  AdminAPIKey: '',
  searchIndex: '',
  searchInputPlaceholder: 'Search for products...',
  ...algolia
}
const searchClient = algoliasearch(AppID, AdminAPIKey);

/**
 * App component
 * @returns
 */
const AlgoliaSearchApp = () => {
  return <InstantSearch searchClient={ searchClient } indexName={ searchIndex }>
    <Configure hitsPerPage={ 6 } />
    <SearchBox placeholder={ searchInputPlaceholder } />
    <MetaInfoInstantSearch />
    <Hits hitComponent={ Hit } />
    <Pagination />
  </InstantSearch>
}

const AlgoliaSearchPage = () => {
  return <InstantSearch searchClient={ searchClient } indexName={ searchIndex }>
    <div className="ais-serach-app">
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
    </div>


  </InstantSearch>
}

const MetaInfoInstantSearch = () => {
  const {
    indexUiState,
    setIndexUiState,
    uiState,
    setUiState,
    results,
    scopedResults,
    refresh,
    use } = useInstantSearch();

  const { query, nbHits } = { query: '', nbHits: 0, ...results?._rawResults[0] };
  return <ul className="meta-info-instant-search">
    {
      (query != '') &&
      <li className="meta-item">
        Search: <mark>"{ query }"</mark>
      </li>
    }
    <li className="meta-item">Result: <mark>{ nbHits }</mark> item(s)</li>
  </ul>
}

/**
 * Hit component
 * @param {*} param0
 * @returns
 */
const Hit = ({ hit }) => {
  return <div className="hit-item">
    <a href={ hit.permalink } className="hit-item__thumbnail">
      <img src={ hit.images?.thumbnail?.url } />
    </a>
    <div className="hit-item__entry">
      <h4 className="__title">
        <a href={ hit.permalink } target="_blank">
          <Highlight hit={ hit } attribute="post_title" />

          <svg width="24px" height="24px" viewBox="-6 -6.5 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin"><path d='M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z' /></svg>
        </a>
      </h4>
      <div className="__price">
        <div dangerouslySetInnerHTML={{__html: hit.price_html}}></div>
      </div>
    </div>
  </div>
}

const algoliaSearchModal = () => {
  const iconSearch = document.querySelectorAll('[data-toggle-algolia-search]');
  const modal = document.querySelector('#Algolia_Search_Modal');
  const close = modal.querySelector('.wp-algolia-search-modal__close');

  [...iconSearch].forEach((el, _index) => {
    el.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.toggle('algolia-search-modal-active');
    })
  })

  close.addEventListener('click', e =>{
    e.preventDefault();
    document.body.classList.remove('algolia-search-modal-active');
  })

  const escKeyDown = () => {
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      let isEscape = false;
      if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
      } else {
        isEscape = (evt.keyCode === 27);
      }
      if (isEscape) {
        document.body.classList.remove('algolia-search-modal-active');
      }
    };
  }

  escKeyDown();
}

const algoliaSearchInit = () => {
  const elems = document.querySelectorAll('#Wp_Algolia_Search_Container, #WP_Algolia_Search_Mobi_View');

  if([...elems].length == 0) return;

  [...elems].forEach(el => {
    const root = createRoot(el);
    root.render(<AlgoliaSearchApp />);
  })

  // const root = createRoot(elem);
  // root.render(<AlgoliaSearchApp />);

  // Modal
  algoliaSearchModal();

  // Search Page Result
  const sp_elems = document.querySelectorAll('#WP_Algolia_Search_Page_Result_View');

  if([...sp_elems].length == 0) return;

  [...sp_elems].forEach(el => {
    const root = createRoot(el);
    root.render(<AlgoliaSearchPage />);
  })
}

export default algoliaSearchInit;
