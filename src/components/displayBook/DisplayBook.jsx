import React from 'react';
import './DisplayBook.scss';
import bookImg from '../../assets/Image 8.png';
import { Button } from '@mui/material';
import CartService from '../../services/CartService';

const cartService = new CartService();

const DisplayBook = (props) => {

  const [addCart, setAddCart] = React.useState(true);

  const addToCart = () => {
    setAddCart(false);
    let data = {
      "_id": props.arrBook._id
    }
    cartService.addToCart(data)
    .then((res)=> {
      console.log(res);
      props.getCart();
    }).catch((err) => {
      console.log(err);
    })
  }

  let image = props.arrBook.bookImage ? props.arrBook.bookImage : bookImg

  return (<>

    <div className='allBooks'>
      <div className='book'>
        <div className='bookImg'>
          <img height={'140px'} width={'115px'} src={image} alt='img' />
        </div>
        <div className='book-details'>
          <span className='book-name'>{props.arrBook.bookName}</span>
          <span className='author-name'>by {props.arrBook.author}</span>
          <div className='book-rate'>
            <span>Rs. {props.arrBook.price}</span>
          </div>
          <div className='review'>
            {
              addCart ? <>
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
                :
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
  );
}

export default DisplayBook;