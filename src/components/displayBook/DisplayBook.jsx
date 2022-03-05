import React from 'react';
import './DisplayBook.scss';
import bookImg from '../../assets/Image 8.png';
import { Button } from '@mui/material';
import CartService from '../../services/CartService';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../redux/actions/bookActions';


const cartService = new CartService();

const DisplayBook = (props) => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.getCart)

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

  const addToCart = () => {
    let data = {
      "_id": props.book._id
    }
    cartService.addToCart(data)
      .then((res) => {
        // console.log(res);
        dispatch(getCart(res.data.data.book))
      }).catch((err) => {
        console.log(err);
      })
  }

  const button = () => {
    const book = cart.cartItems ? cart.cartItems.find((data) => data.bookName === props.book.bookName) : "";
    if (book) {
      return (
        <>
          <Button style={{
            width: '200px',
            height: '30px',
            backgroundColor: '#3371B5',
            color: '#FFFFFF',
            fontSize: '10px',
            textTransform: 'none'
          }}>ADDED TO CART</Button>
        </>
      )
    } else {
      return (
        <>
          <Button style={{
            width: '90px',
            height: '30px',
            backgroundColor: '#A03037',
            color: '#FFFFFF',
            fontSize: '10px',
            textTransform: 'none'
          }} onClick={addToCart}>ADD TO BAG</Button>
          <Button style={{
            border: '1px solid #0A0102',
            width: '90px',
            height: '30px',
            backgroundColor: '#FFFFFF',
            color: '#0A0102',
            fontSize: '10px',
            textTransform: 'none'
          }}>WISHLIST</Button>
        </>
      )
    }
  }

  let image = props.book.bookImage ? props.book.bookImage : bookImg

  return (<>
    < div className='allBooks'>
      <div className='book'>
        <div className='bookImg'>
          <img height={'140px'} width={'115px'} src={image} alt='img' />
        </div>
        <div className='book-details'>
          <span className='book-name'>{props.book.bookName}</span>
          <span className='author-name'>by {props.book.author}</span>
          <div className='book-rate'>
            <span>Rs. {props.book.price}</span>
          </div>
          <div className='review'>
            {
              button()
            }
            {/* <div className='rating-background'>
                <span className='rating'>4.5 *</span>
              </div>
              <span className='review-num'>(20)</span> */}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default DisplayBook;