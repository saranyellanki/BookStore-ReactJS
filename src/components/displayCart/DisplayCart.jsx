import React from 'react';
import './DisplayCart.scss'
import img from '../../assets/Image 8.png'
import { Button, TextField, TextareaAutosize, Checkbox } from '@mui/material';
import CartService from '../../services/CartService';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCart } from '../../redux/actions/bookActions';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const cartService = new CartService();

const DisplayCart = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    getCartItems();
  }, [])

  const getCartItems = () => {
    cartService.getCart()
      .then((res) => {
        // console.log(res.data.data);
        dispatch(getCart(res.data.data.book));
      }).catch((err) => {
        console.log(err);
      })
  }

  const [customer, setcustomer] = React.useState(false)

  const cartArr = useSelector((state) => state.getCart)

  const customerDetails = () => {
    setcustomer(true);
  }

  const removeItem = (book) => {
    cartService.deleteItem(book._id)
      .then((res) => {
        console.log(res);
        getCartItems();
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <div className="cart-page">
        <div className='cart'>
          <div className="cart-heading">
            <span>My cart ({cartArr.cartItems ? cartArr.cartItems.length : ""})</span>
          </div>
          {cartArr.cartItems ?
            cartArr.cartItems.map((book, index) =>
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
            ) :
            ""}
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
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="Home" control={<Radio />} label="Home" />
                  <FormControlLabel value="Work" control={<Radio />} label="Work" />
                  <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
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