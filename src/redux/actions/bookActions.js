
export const getCart = (cartItems) => {
  return {
    type: 'GET_CART',
    payload: cartItems
  };
};