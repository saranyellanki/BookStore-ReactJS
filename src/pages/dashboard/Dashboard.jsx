import { Pagination } from '@mui/material';
import React from 'react';
import DisplayBook from '../../components/displayBook/DisplayBook';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import usePagination from '../../components/pagination/Pagination';
import BookService from '../../services/BookService'
import './Dashboard.scss';

const bookService = new BookService();

const Dashboard = () => {

  const [bookArr, setBookArr] = React.useState([]);
  const [page, setpage] = React.useState(1);
  const [search,setSearch] = React.useState("");

  const getBooks = () => {
    bookService.getAllBooks()
      .then((res) => {
        if(search) {
          let filterBook = res.data.data.filter(book => book.bookName.toLowerCase().includes(search.toLowerCase()))
          setBookArr(filterBook)
        } else {
          setBookArr(res.data.data)
        }
      }).catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    getBooks();
  }, [search])

  const PER_PAGE = 10;

  var bookArrLength = bookArr ? bookArr.length : 0;
  const pageCount = Math.ceil(bookArrLength / PER_PAGE)
  const paginate = usePagination(bookArr, PER_PAGE)

  const changePage = (event,page) => {
    setpage(page);
    paginate.jump(page)
  };

  const searchBook = (value) => {
    setSearch(value)
  }

  return <div className='bookStore'>
    <Header search={searchBook} />
    <div className='heading'>
      <span>Books</span>
    </div>
    <div className='display-books'>
      {paginate.currentData() ? paginate.currentData().map((book, index) => (
        <DisplayBook key={index} book={book} getBooks={getBooks} />
      ))
        :
        ""}
    </div>
    <div className='pagination'>
      <Pagination count={pageCount} page={page} onChange={changePage} />
    </div>
    <Footer />
  </div>;
}

export default Dashboard;