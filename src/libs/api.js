/**
 * 
 */

const _request = async (data) => {
  return await jQuery.ajax({
    type: 'POST',
    url: CH_PHP_DATA.ajax_url,
    data: data,
    error(err) {
      console.log(err)
    }
  })
}

const queryAllProductCat = async () => {
  return await _request({
    action: 'ch_ajax_query_all_product_cats_fix',
  })
}

const fixProductCat = async (catID, products) => {
  return await _request({
    action: 'ch_ajax_fix_products_cat',
    catID, products
  })
}

export { queryAllProductCat, fixProductCat };