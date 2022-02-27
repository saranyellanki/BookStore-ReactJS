import React from 'react';
import DisplayBook from '../../components/displayBook/DisplayBook';
import Header from '../../components/header/Header';
import BookService from '../../services/BookService'

const bookService = new BookService();

const Dashboard = () => {

  const [bookArr, setBookArr] = React.useState([]);

  React.useEffect(() => {
    getBooks();
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

  return <div>
    <Header />
    <div className='heading'>
      <span>Books</span>
    </div>
    <div className='display-books'>
      {bookArr.length > 0 && bookArr.map((book, index) => (
        <DisplayBook key={index} arrBook={book} getBooks={getBooks} />
      ))}
    </div>
    {/* <DisplayBook  /> */}
  </div>;
}

export default Dashboard;