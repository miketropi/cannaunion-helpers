import { createRoot } from 'react-dom/client';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-hooks-web';

const { algolia } = CH_PHP_DATA;
const searchClient = algoliasearch(algolia.AppID, algolia.AdminAPIKey);

/**
 * App component
 * @returns 
 */
const AlgoliaSearchApp = () => {
  return <InstantSearch searchClient={ searchClient } indexName="wp_posts_product">
    <SearchBox placeholder="Search for products" />
    <Hits hitComponent={ Hit } />
  </InstantSearch>
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
        <a href={ hit.permalink }>
          <Highlight hit={ hit } attribute="post_title" />
        </a>
      </h4>
      <div className="__price">
        <div dangerouslySetInnerHTML={{__html: hit.price_html}}></div>
      </div>
    </div>
  </div>
}

const algoliaSearchInit = () => { 
  const elem = document.querySelector('#Wp_Algolia_Search_Container');
  if(!elem) return;

  const root = createRoot(elem);
  root.render(<AlgoliaSearchApp />)
}

export default algoliaSearchInit;