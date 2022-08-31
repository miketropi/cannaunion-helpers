import { useInstantSearch } from 'react-instantsearch-hooks-web';

const MetaInfoInstantSearch = () => {
  const { results } = useInstantSearch();
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

export default MetaInfoInstantSearch;