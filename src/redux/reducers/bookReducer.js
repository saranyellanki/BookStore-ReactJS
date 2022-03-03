
export const getCart = (state = [], action) => {
  switch (action.type) {
    case 'GET_CART':
      return {
        ...state, cartItems: action.payload
      };
    default:
      return state;
  }
}