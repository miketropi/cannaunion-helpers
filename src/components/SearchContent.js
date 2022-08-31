import {
  CurrentRefinements,
  Pagination,
  Hits,
  SortBy,
  Highlight
} from 'react-instantsearch-hooks-web';

import MetaInfoInstantSearch from './MetaInfoInstantSearch';

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

const SeachContent = () => {
  const labelMap = {
    'taxonomies.product_cat': 'Category',
    'price_number': 'Price',
  }

  return <div className="search-content">
    <div className="search-content__inner">
      <div className="meta-current-seach">
        <MetaInfoInstantSearch />
        <CurrentRefinements transformItems={ items => {
          return items.map(item => {
            let label = labelMap[item.label] ? labelMap[item.label] : item.label;
            return {
              ...item,
              label
            };
          })
        }} />
        {/* <SortBy
          items={[
            { label: 'Featured', value: 'wp_posts_product' },
            { label: 'Price (asc)', value: 'wp_posts_product_price_number_asc' },
            { label: 'Price (desc)', value: 'wp_posts_product_price_number_desc' }
          ]}
          transformItems={transformItems} /> */}
      </div>
      <Hits hitComponent={ Hit } />
      <Pagination />
    </div>
  </div>
}

export default SeachContent;