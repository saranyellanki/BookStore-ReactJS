import React from 'react';
import DisplayCart from '../../components/displayCart/DisplayCart';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Cart = () => {

  return <div className='cart-container'>
    <Header />
    <DisplayCart />
    <Footer />
  </div>;
}

export default Cart;