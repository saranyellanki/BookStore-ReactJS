import * as React from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import education from '../../assets/education.svg';
import InputBase from '@mui/material/InputBase';
import './Header.scss';
import { PersonOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

const Header = (props) => {

  const navigate = useNavigate();

  const cartArr = useSelector((state) => state.getCart)

  const openCart = () => {
    navigate('/cart')
  }

  const display = () => {
    navigate('/dashboard')
  }

  const searchBook = (event) => {
    props.search(event.target.value)
  }

  return (<>
    <div className='header'>
      <div className="title-search">
        <img className='image-header' src={education} alt="img" />
        <span className='image-title' onClick={display}>Bookstore</span>
        <div className="search">
          <Search>
            <SearchIconWrapper><SearchIcon style={{ fontSize: 'medium', color: '#9D9D9D' }} /></SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={searchBook}
            />
          </Search>
        </div>
      </div>
      <div className="person-cart">
        <div className="person-details">
          <PersonOutlined style={{ color: '#FFFFFF' }} />
          <span className="person-name">{localStorage.getItem('fullName').split(' ')[0]}</span>
        </div>
        <div className="cart-details">
          <Badge badgeContent={cartArr.cartItems ? cartArr.cartItems.length : cartArr.cartItems} color="primary">
            <ShoppingCartOutlined onClick={openCart} style={{ color: '#FFFFFF' }} />
          </Badge>
          <span className="person-name">Cart</span>
        </div>
      </div>
    </div>
  </>
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '3px',
  backgroundColor: '#FCFCFC',
  height: '33px',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '10%',
  [theme.breakpoints.up('lg')]: {
    minWidth: '490px',
  },
  [theme.breakpoints.up('md')]: {
    width: '300px',
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '12.93px',
  position: 'absolute',
  pointerEvents: 'none',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: '12px',
    paddingTop: '13px',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default Header;
