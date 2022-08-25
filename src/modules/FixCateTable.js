import React, { useState } from 'react';
import { useFixProductCateContext } from '../context/FixProductCateContext';

const ItemRowTable = ({ cat, index }) => {
  const [loading, setLoading] = useState(false);
  const { fixProductCat_Func } = useFixProductCateContext();
  const product_IDs = cat.products.join(', ');
  return <tr key={ cat.ID }>
    <td>{ index + 1 }</td>
    <td>#{ cat.ID } - <a href={ cat.term_url } target="_blank">{ cat.name }</a> ({ cat.count })</td>
    <td>{ product_IDs }</td>
    <td>
      { loading }
      <button className="button" onClick={ async e => {
        setLoading(true);
        await fixProductCat_Func(cat.ID, cat.products);
        setLoading(false);
      } }>{ (loading == true ? 'Fixing...' : 'Fix Now') }</button>
    </td>
  </tr> 
}

export default ({ cats }) => {

  return <div className="fix-cate-table-container">
    <table className="ch-table wp-list-table widefat">
      <thead>
        <tr>
          <th>#</th>
          <th>Cat Name</th>
          <th>Fix Products</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          cats.length > 0 &&
          cats
            .filter(item => {
              return (item.products);
            })
            .map((item, _index) => {
              return <ItemRowTable cat={ item } index={ _index } key={ item.ID } />
            })
        }
      </tbody>
    </table>
  </div>
}