import React from 'react';
import DisplayBook from '../../components/displayBook/DisplayBook';
import Header from '../../components/header/Header';
import BookService from '../../services/BookService'
import './Dashboard.scss'

const bookService = new BookService();

const Dashboard = () => {

  const [bookArr, setBookArr] = React.useState([]);

  const getBooks = () => {
    bookService.getAllBooks()
      .then((res) => {
        console.log(res);
        setBookArr(res.data.data)
      }).catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    getBooks();
  }, [])

  return <div className='bookStore'>
    <Header />
    <div className='heading'>
      <span>Books</span>
    </div>
    <div className='display-books'>
      {bookArr.length > 0 && bookArr.map((book, index) => (
        <DisplayBook key={index} book={book} getBooks={getBooks} />
      ))}
    </div>
  </div>;
}

export default Dashboard;