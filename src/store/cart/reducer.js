const CartReducer = (state = [], action) => {
  // console.log('Cart state Reducer == ', state);
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('action.payload', action.payload);
      return (
        [
          ...state,
          action.payload
        ]
      )
    default:
      return state;
  };
}

export default CartReducer;