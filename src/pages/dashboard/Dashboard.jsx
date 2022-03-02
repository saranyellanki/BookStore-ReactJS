import React from 'react';
import DisplayBook from '../../components/displayBook/DisplayBook';
import Header from '../../components/header/Header';
import BookService from '../../services/BookService'
import './Dashboard.scss'
import CartService from '../../services/CartService';

const cartService = new CartService();

const bookService = new BookService();

const Dashboard = () => {

  const [bookArr, setBookArr] = React.useState([]);

  const [cartArr, setcartArr] = React.useState([])

  const getCartItems = () => {
    cartService.getCart()
      .then((res) => {
        // console.log(res.data.data);
        setcartArr(res.data.data.book)
      }).catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    getBooks();
    getCartItems();
  }, [])

  const getBooks = () => {
    bookService.getAllBooks()
      .then((res) => {
        console.log(res);
        setBookArr(res.data.data)
      }).catch((err) => {
        console.log(err);
      })
  }

  return <div className='bookStore'>
    <Header cartArr={cartArr} />
    <div className='heading'>
      <span>Books</span>
    </div>
    <div className='display-books'>
      {bookArr.length > 0 && bookArr.map((book, index) => (
        <DisplayBook key={index} arrBook={book} getBooks={getBooks} getCart={getCartItems} />
      ))}
    </div>
    {/* <DisplayBook  /> */}
  </div>;
}

export default Dashboard;