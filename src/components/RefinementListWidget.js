import {
  RefinementList,
} from 'react-instantsearch-hooks-web';

const RefinementListWidget = ({ title, attr, limit, more, className }) => {
  return <div className={ ['filter-widget', className].join(' ') }>
    <div className="filter-widget__inner">
      <h4>{ title }</h4>
      <RefinementList 
        attribute={ attr } 
        limit={ limit } 
        showMore={ more } />
    </div>
  </div>
}

export default RefinementListWidget;