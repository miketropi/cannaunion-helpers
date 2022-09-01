import {
  HierarchicalMenu,
} from 'react-instantsearch-hooks-web';

const HierarchicalMenuWidget = ({ title, attr, limit, more, className }) => {
  return <div className={ ['filter-widget', className].join(' ') }>
    <div className="filter-widget__inner">
      <h4>{ title }</h4>
      <HierarchicalMenu 
        attributes={ attr }
        limit={ limit } 
        showMore={ more } />
    </div>
  </div>
}

export default HierarchicalMenuWidget;