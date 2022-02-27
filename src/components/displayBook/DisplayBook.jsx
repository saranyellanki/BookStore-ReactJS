import React from 'react';
import './DisplayBook.scss';
import bookImg from '../../assets/Image 8.png';

const DisplayBook = (props) => {

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
            <div className='review'>
              <div className='rating-background'>
                <span className='rating'>4.5 *</span>
              </div>
              <span className='review-num'>(20)</span>
            </div>
            <div className='book-rate'>
              <span>Rs. {props.arrBook.price}</span>
            </div>
          </div>
        </div>
      </div>
  </>
  );
}

export default DisplayBook;