import RefinementListWidget from './RefinementListWidget';
import HierarchicalMenuWidget from './HierarchicalMenuWidget';
import PriceFilter from './PriceFilter';
import MediaQuery from 'react-responsive';

const SearchSidebar = ({ toggleSidebarMobiFunc }) => {
  return <div className="search-sidebar">
    <div className="search-sidebar__inner">
      <MediaQuery maxWidth={ 730 }>
        <button 
          onClick={ e => {
            e.preventDefault();
            toggleSidebarMobiFunc(false);
          } }
          className="search-sidebar__mobi-close">Close</button>
      </MediaQuery>
      <div className="search-sidebar__heading">
        <h4>Filter</h4>
      </div>
      <HierarchicalMenuWidget 
        title="Category" 
        attr={ [
          'taxonomies_hierarchical.product_cat.lvl0', 
          'taxonomies_hierarchical.product_cat.lvl1'
        ] } 
        limit={ 20 } more={ false } />

      <PriceFilter title="Price" />
    </div>
  </div>
}

export default SearchSidebar;