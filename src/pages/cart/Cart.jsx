import React from 'react';
import DisplayCart from '../../components/displayCart/DisplayCart';
import Header from '../../components/header/Header';
import CartService from '../../services/CartService';

const cartService = new CartService();

const Cart = () => {

  const [cartArr, setcartArr] = React.useState([])

  React.useEffect(() => {
    getCartItems();
  }, [])

  const getCartItems = () => {
    cartService.getCart()
      .then((res) => {
        // console.log(res.data.data);
        setcartArr(res.data.data.book)
      }).catch((err) => {
        console.log(err);
      })
  }


  return <div className='cart-container'>
    <Header cartArr={cartArr}  />
    <DisplayCart cartArr={cartArr} getCart={getCartItems} />
  </div>;
}

export default Cart;