import RefinementListWidget from './RefinementListWidget';
import PriceFilter from './PriceFilter';

const SearchSidebar = () => {
  return <div className="search-sidebar">
    <div className="search-sidebar__inner">
      <div className="search-sidebar__heading">
        <h4>Filter</h4>
      </div>
      <RefinementListWidget 
        title="Category" 
        attr="taxonomies.product_cat" 
        limit={ 10 } more={true} />

      <PriceFilter title="Price" />
    </div>
  </div>
}

export default SearchSidebar;