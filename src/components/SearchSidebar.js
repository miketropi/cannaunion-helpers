import RefinementListWidget from './RefinementListWidget';
import HierarchicalMenuWidget from './HierarchicalMenuWidget';
import PriceFilter from './PriceFilter';
import MediaQuery from 'react-responsive';

const SearchSidebar = ({ toggleSidebarMobiFunc }) => {
  function toggleRefinement(e){
    e.preventDefault();
    e.target.classList.toggle('active');
    e.target.nextSibling.classList.toggle('show');
  }

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

      <RefinementListWidget 
        title="Category"
        attr='taxonomies.product_cat'
        limit={ 1000 }
        more={ false }
        sortBy={['count:desc']}
        className=""
        toggleRefinement={toggleRefinement}
      />

      <PriceFilter 
        title="Price" 
        className=""
        toggleRefinement={toggleRefinement}
      />
    </div>
  </div>
}

export default SearchSidebar;