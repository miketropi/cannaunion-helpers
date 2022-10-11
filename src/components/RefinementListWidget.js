import {
  RefinementList,
} from 'react-instantsearch-hooks-web';

const RefinementListWidget = ({ title, attr, limit, more, sortBy, className, toggleRefinement }) => {

  return <div className={ ['filter-widget', className].join(' ') }>
    <div className="filter-widget__inner">
      <h4 className="filter-name active" onClick={toggleRefinement}>{ title }</h4>
      <div className="filter-content show">
        <RefinementList 
          attribute={ attr } 
          limit={ limit } 
          showMore={ more }
          sortBy={sortBy}
        />
      </div>
    </div>
  </div>
}


export default RefinementListWidget;