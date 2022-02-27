import React from 'react';
import './Homepage.scss';
import image from '../../assets/image.png'
import Signin from '../../components/signin/Signin';
import Signup from '../../components/signup/Signup';

const Homepage = () => {

  const [open, setopen] = React.useState(true)

  const login = () => {
    setopen(true)
  }

  const signup = () => {
    setopen(false)
  }

  return <div>
    <div className='homepage'>
      <div className='main-container'>
        <div className='left-container'>
          <div className='left'>
            <img className='image' src={image} alt="Image" />
            <p className='text-left'>ONLINE BOOK SHOPPING</p>
          </div>
        </div>
        <div className='right-container'>
          <div className='right'>
            <div className='title'>
              <div className='login' onClick={login}>
                LOGIN
              </div>
              <div className='signup' onClick={signup}>
                SIGNUP
              </div>
            </div>
            <div className='current-page'>
              {open ? <Signin /> : <Signup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}


export default Homepage;