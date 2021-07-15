const productIdReducer = (state = 0, action) => {
  switch (action.type) {
    case 'PRODUCT_ID':
      return action.payload;
    default:
      return state;
  }  
}

export default productIdReducer