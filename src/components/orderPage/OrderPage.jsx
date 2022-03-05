import React from 'react';
import './OrderPage.scss';
import order from '../../assets/order.jpg';
import orderImg from '../../assets/orderImg.jpg';

const OrderPage = () => {


  return <div className='order-page'>
    <div className="order">
      <div className="order-img">
        <img src={orderImg} width={250} alt="img" />
      </div>
      <div className="h1"><h1>Order Placed Successfully</h1></div>
      <div className="order-img"><img src={order} width={150} alt="img" /></div>
      <div className="h4">
        <span>hurray!!! your order is confirmed</span>
      </div>
      <div className="h4">
        <span>the order id is #123456 save the order id for</span>
      </div>
      <div className="h4">
        <span>further communication..</span>
      </div>
      <div className="summary">
        <div className="summary-heading">
          <div className="email">
            <span>Email us</span>
          </div>
          <div className="contact">
            <span>Contact us</span>
          </div>
          <div className="address">
            <span>Address</span>
          </div>
        </div>
      </div>
      <div className="summary-details">
        <div className="summary-heading">
          <div className="email">
            <span>admin@bookstore.com</span>
          </div>
          <div className="contact">
            <span>+91 9883732922</span>
          </div>
          <div className="address">
            <span>42, 14th Main, 15th Cross, Sector-4, opp to BDA complex, near Kumarakom restaurant, HSR Layout, Banglore 560034</span>
          </div>
        </div>
      </div>
    </div>
  </div>;
}


export default OrderPage;