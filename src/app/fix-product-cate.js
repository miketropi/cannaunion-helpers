/**
 * Fix product cate 
 */
import { createRoot } from 'react-dom/client';
import { FixProductCateProvider, useFixProductCateContext } from '../context/FixProductCateContext';
import FixCateTable from '../modules/FixCateTable';

const FixProductCateApp = () => {
  const { cats } = useFixProductCateContext();

  return <div className="fix-prod-cate-container">
    <FixCateTable cats={ cats } />
  </div>
}

const fixProductCateInit = () => {
  const elem = document.querySelector('#CH_Fix_Product_Cate');
  if(!elem) return;

  const root = createRoot(elem); 
  root.render(<FixProductCateProvider>
    <FixProductCateApp />
  </FixProductCateProvider>); 
}

export default fixProductCateInit;