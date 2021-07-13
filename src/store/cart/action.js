export const cartAction = (data) => {
  return{
    type: 'ADD_TO_CART',
    payload: data,
  }
}