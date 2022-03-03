import React from 'react';
import DisplayCart from '../../components/displayCart/DisplayCart';
import Header from '../../components/header/Header';

const Cart = () => {

  return <div className='cart-container'>
    <Header />
    <DisplayCart />
  </div>;
}

export default Cart;