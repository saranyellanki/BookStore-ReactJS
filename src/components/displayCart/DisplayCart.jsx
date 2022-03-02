import React from 'react';
import './DisplayCart.scss'
import img from '../../assets/Image 8.png'
import { Button, TextField, TextareaAutosize, Checkbox } from '@mui/material';
import CartService from '../../services/CartService';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

const cartService = new CartService();

const DisplayCart = (props) => {

  const [customer, setcustomer] = React.useState(false)

  const customerDetails = () => {
    setcustomer(true);
  }

  const removeItem = (book) => {
    cartService.deleteItem(book._id)
      .then((res) => {
        console.log(res);
        props.getCart();
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <div className="cart-page">
        <div className='cart'>
          <div className="cart-heading">
            <span>My cart {props.cartArr.length}</span>
          </div>
          {props.cartArr.map((book, index) =>
            <div key={book._id}>
              <div className="cart-book">
                <img src={img} alt="img" />
                <div className="book-detail">
                  <span className='book-title'>{book.bookName}</span>
                  <span className='book-author'>by {book.author}</span>
                  <span className='book-price'>Rs. {book.price}</span>
                </div>
              </div>
              <div className="quantity">
                <div className='decrement'>
                  <RemoveCircleOutline />
                </div>
                <div className='book-number'>
                  <span> 1 </span>
                </div>
                <div className='increment'>
                  <AddCircleOutline />
                </div>
                <div className='delete'>
                  <span onClick={() => removeItem(book)}>Remove</span>
                </div>
              </div>
            </div>
          )}
          <div className="place-order" onClick={customerDetails}>
            <Button style={{
              width: '150px',
              height: '35px',
              backgroundColor: '#3371B5',
              color: '#FFFFFF',
              fontSize: '13px',
              textTransform: 'none'
            }}>PLACE ORDER</Button>
          </div>
        </div>
      </div>
      <div className="customer-container">
        {customer ?
          <div className="customer">
            <span>Customer Details</span>
            <div className='textFields'>
              <TextField
                id="outlined-basic"
                label="Name"
                name='name'
                size='small'
                variant="outlined"
                style={{ paddingBottom: '20px', paddingRight: '10px', width: '300px' }}
                InputLabelProps={{ style: { fontSize: 15 } }} />
              <TextField
                id="outlined-basic"
                label="Phone number"
                name='email'
                size='small'
                variant="outlined"
                style={{ paddingBottom: '20px', paddingRight: '10px', width: '300px' }}
                InputLabelProps={{ style: { fontSize: 15 } }} />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Pincode"
                name='email'
                size='small'
                variant="outlined"
                style={{ paddingBottom: '20px', paddingRight: '10px', width: '300px' }}
                InputLabelProps={{ style: { fontSize: 15 } }} />
              <TextField
                id="outlined-basic"
                label="Locality"
                name='email'
                size='small'
                variant="outlined"
                style={{ paddingBottom: '20px', paddingRight: '10px', width: '300px' }}
                InputLabelProps={{ style: { fontSize: 15 } }} />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Address"
                multiline
                name='email'
                size='large'
                variant="outlined"
                style={{ paddingBottom: '10px', width: '610px' }}
                InputLabelProps={{ style: { fontSize: 15 } }} />
            </div>
            <div className='textFields'>
              <TextField
                id="outlined-basic"
                label="city/town"
                name='email'
                size='small'
                variant="outlined"
                style={{ paddingBottom: '20px', paddingRight: '10px', width: '300px' }}
                InputLabelProps={{ style: { fontSize: 15 } }} />
              <TextField
                id="outlined-basic"
                label="Landmark"
                name='email'
                size='small'
                variant="outlined"
                style={{ paddingBottom: '20px', paddingRight: '10px', width: '300px' }}
                InputLabelProps={{ style: { fontSize: 15 } }} />
            </div>
            <div>
              <span style={{ fontSize: '15px' }}>Type</span>
            </div>
            <div>
              <Checkbox />
              <span style={{ fontSize: '15px' }}>Home</span>
              <Checkbox />
              <span style={{ fontSize: '15px' }}>Work</span>
              <Checkbox />
              <span style={{ fontSize: '15px' }}>Other</span>
            </div>
            <div className="place-order">
              <Button style={{
                width: '150px',
                height: '35px',
                backgroundColor: '#3371B5',
                color: '#FFFFFF',
                fontSize: '13px',
                textTransform: 'none'
              }}>CONTINUE</Button>
            </div>
          </div>
          :
          <div className="customer">
            <span>Customer Details</span>
          </div>
        }
      </div>
    </>
  );
}

export default DisplayCart;