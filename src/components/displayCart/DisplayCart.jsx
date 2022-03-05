import React from 'react';
import './DisplayCart.scss'
import img from '../../assets/Image 8.png'
import { Button, TextField } from '@mui/material';
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
import CustomerService from '../../services/CustomerService';
import { useNavigate } from 'react-router-dom';
import OrderService from '../../services/OrderService';

const customerService = new CustomerService();
const cartService = new CartService();
const orderService = new OrderService();

const DisplayCart = () => {

  const [customerFields, setcustomerFields] = React.useState({
    name: "",
    phoneNumber: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    landmark: "",
    addressType: "",
  })

  const navigate = useNavigate();

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

  const [order, setorder] = React.useState(false)

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

  const fields = (event) => {
    setcustomerFields(previousValues => {
      return { ...previousValues, [event.target.name]: event.target.value }
    })
  }

  const saveCustomer = () => {
    let data = {
      "addressType": customerFields.addressType,
      "fullAddress": customerFields.address,
      "city": customerFields.city,
      "landmark": customerFields.landmark,
      "state": customerFields.city,
      "name": customerFields.name,
      "phoneNumber": customerFields.phoneNumber,
      "pincode": customerFields.pincode,
      "locality": customerFields.pincode
    }
    customerService.addCustomer(data)
      .then((res) => {
        console.log(res);
        setorder(true)
      }).catch((err) => {
        console.log(err);
      })
  }

  const decrement = (book) => {
    let data = {
      "_id": book._id,
      "quantity": book.quantity - 1
    }
    cartService.updateCart(data)
      .then((res) => {
        getCartItems();
      }).catch((err) => {
        console.log(err);
      })
  }

  const increment = (book) => {
    let data = {
      "_id": book._id,
      "quantity": book.quantity + 1
    }
    cartService.updateCart(data)
      .then((res) => {
        getCartItems();
      }).catch((err) => {
        console.log(err);
      })
  }

  const checkout = () => {
    orderService.addToOrders()
      .then((res) => {
        navigate('/checkout')
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
                    <RemoveCircleOutline onClick={() => decrement(book)} />
                  </div>
                  <div className='book-number'>
                    <span> {book.quantity} </span>
                  </div>
                  <div className='increment'>
                    <AddCircleOutline onClick={() => increment(book)} />
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
                InputLabelProps={{ style: { fontSize: 15 } }}
                onChange={fields} />
              <TextField
                id="outlined-basic"
                label="Phone number"
                name='phoneNumber'
                size='small'
                variant="outlined"
                style={{ paddingBottom: '20px', paddingRight: '10px', width: '300px' }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                onChange={fields} />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Pincode"
                name='pincode'
                size='small'
                variant="outlined"
                style={{ paddingBottom: '20px', paddingRight: '10px', width: '300px' }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                onChange={fields} />
              <TextField
                id="outlined-basic"
                label="Locality"
                name='locality'
                size='small'
                variant="outlined"
                style={{ paddingBottom: '20px', paddingRight: '10px', width: '300px' }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                onChange={fields} />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Address"
                multiline
                name='address'
                size='large'
                variant="outlined"
                style={{ paddingBottom: '10px', width: '610px' }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                onChange={fields} />
            </div>
            <div className='textFields'>
              <TextField
                id="outlined-basic"
                label="city/town"
                name='city'
                size='small'
                variant="outlined"
                style={{ paddingBottom: '20px', paddingRight: '10px', width: '300px' }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                onChange={fields} />
              <TextField
                id="outlined-basic"
                label="Landmark"
                name='landmark'
                size='small'
                variant="outlined"
                style={{ paddingBottom: '20px', paddingRight: '10px', width: '300px' }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                onChange={fields} />
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel name='addressType' value="Home" control={<Radio />} label="Home" onChange={fields} />
                  <FormControlLabel name='addressType' value="Work" control={<Radio />} label="Work" onChange={fields} />
                  <FormControlLabel name='addressType' value="Other" control={<Radio />} label="Other" onChange={fields} />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="place-order" onClick={saveCustomer}>
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
        {
          order ?
            <div className="order-page">
              <div className='cart'>
                <div className="cart-heading">
                  <span>Order Summary</span>
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
                    </div>
                  ) :
                  ""}
                <div className="place-order" onClick={checkout}>
                  <Button style={{
                    width: '150px',
                    height: '35px',
                    backgroundColor: '#3371B5',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    textTransform: 'none'
                  }}>CHECKOUT</Button>
                </div>
              </div>
            </div>
            :
            <div className="customer">
              <span>Order Summary</span>
            </div>
        }
      </div>
    </>
  );
}

export default DisplayCart;