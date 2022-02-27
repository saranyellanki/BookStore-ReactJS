import * as React from 'react';
import { Link, Button, TextField } from '@mui/material';
import './Signin.scss'
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';

const userService = new UserService();

const Signin = () => {

  const navigate = useNavigate();

  const [text, setText] = React.useState({
    email: '',
    password: '',
    emailError: false,
    passwordError: false
  })

  const changeState = (event) => {
    setText(previousValue => {
      return {...previousValue , [event.target.name]: event.target.value}
    })
  }

  const validation = () => {
    let isError = false;
    const error = text;
    error.emailError = text.email === '' ? true : false;
    error.passwordError = text.password === '' ? true : false;

    setText({
      ...error
    })

    isError = error.emailError || error.passwordError
    return isError;
  }

  const next = () => {
    let isValidated = validation();
    let data = {
      "email": text.email,
      "password": text.password
    }
    if (!isValidated) {
      userService.Signin(data)
        .then((res) => {
          localStorage.setItem("token", res.data.data.token)
          localStorage.setItem("fullName", res.data.data.user.fullName)
          navigate('/dashboard')
        }).catch((err) => {
          console.log(err);
        })
    }
  }

  return (<>
    <div className='login-container'>
      <TextField
        id="outlined-basic"
        label="Email Id"
        name='email'
        size='small'
        error={text.emailError}
        fullWidth
        variant="outlined"
        onChange={(e) => changeState(e)}
        style={{paddingBottom: '20px'}}
         />
      <TextField
        id="outlined-basic"
        label="Password"
        name='password'
        error={text.passwordError}
        size='small'
        fullWidth
        variant="outlined"
        onChange={(e) => changeState(e)}
        style={{paddingBottom: '10px'}}
        />
      <div className='forgot-password'>
        <Link style={{ textDecoration: 'none', color: '#9D9D9D', fontSize: 'small' }} to="/ForgotPassword">Forgot Password?</Link>
      </div>
      <Button style={{ width: '255px', backgroundColor: '#A03037', color: '#FFFFFF' }} onClick={next}>Login</Button>
      <div className='text-right'>
        --------- OR ---------
      </div>
      <div className='btn-choose'>
        <Button style={{
          width: '120px',
          height: '40px',
          backgroundColor: '#4266B2',
          color: '#FFFFFF',
          fontSize: '12px',
          textTransform: 'none'
        }}>Facebook</Button>
        <Button style={{
          width: '120px',
          height: '40px',
          backgroundColor: '#F5F5F5',
          color: '#0A0102',
          fontSize: '12px',
          textTransform: 'none'
        }}>Google</Button>
      </div>
    </div>
  </>
  )
}

export default Signin;