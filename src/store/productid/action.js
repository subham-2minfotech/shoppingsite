export const updateProductId = (props) => {
  console.log('updateProductId payload: props', props);
  return {
    type: 'PRODUCT_ID',
    payload: props,
  }  
}