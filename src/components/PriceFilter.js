import { useNumericMenu } from 'react-instantsearch-hooks-web'

const PriceFilter = ({ title, className }) => {
  const { hasNoResults, items, refine } = useNumericMenu({
    attribute: 'price_number',
    items: [
      { label: 'All' },
      { label: 'Less than $10', end: 10 },
      { label: 'Between $10 - $30', start: 10, end: 30 },
      { label: 'Between $30 - $50', start: 30, end: 50 },
      { label: 'More than $50', start: 50 },
    ]
  });

  return <div className={ ['filter-widget', className].join(' ') }>
    <div className="filter-widget__inner">
      <h4>{ title }</h4>
      <ul className="ais-NumericMenu-list">
        {items.map((item) => (
          <li
            key={item.value} 
            className={ ['ais-NumericMenu-item', item.isRefined && 'ais-NumericMenu-item--selected'].join(' ') }
          >
            <label className="ais-NumericMenu-label">
              <input
                className="ais-NumericMenu-radio"
                type="radio"
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
              <span className="ais-NumericMenu-labelText">{item.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  </div>
}

export default PriceFilter;