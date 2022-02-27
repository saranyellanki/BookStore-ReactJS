import * as React from 'react';
import { Button, TextField } from '@mui/material';
import UserService from '../../services/UserService';

const userService = new UserService();

const Signup = () => {

  const [text, setText] = React.useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    fullNameError: false,
    emailError: false,
    passwordError: false,
    phoneError: false
  })

  const changeState = (event) => {
    setText(previousValue => {
      return { ...previousValue, [event.target.name]: event.target.value }
    })
  }

  const validation = () => {
    let isError = false;
    const error = text;
    error.fullNameError = text.fullName === '' ? true : false;
    error.phoneError = text.phone === '' ? true : false;
    error.emailError = text.email === '' ? true : false;
    error.passwordError = text.password === '' ? true : false;

    setText({
      ...error
    })

    isError = error.emailError || error.passwordError || error.phoneError || error.fullNameError
    return isError;
  }

  const next = () => {
    let isValidated = validation();
    let data = {
      "fullName": text.fullName,
      "email": text.email,
      "password": text.password,
      "phone": text.phone
    }
    if (!isValidated) {
      userService.Signup(data)
        .then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        })
    }
  }

  return <div>
    <TextField
      id="outlined-basic"
      label="Full Name"
      name='fullName'
      size='small'
      fullWidth
      variant="outlined"
      style={{ paddingBottom: '30px' }}
      InputLabelProps={{ style: { fontSize: 15 } }}
      onChange={(e) => changeState(e)} />
    <TextField
      id="outlined-basic"
      label="Email Id"
      name='email'
      size='small'
      fullWidth
      variant="outlined"
      style={{ paddingBottom: '30px' }}
      InputLabelProps={{ style: { fontSize: 15 } }}
      onChange={(e) => changeState(e)} />
    <TextField
      id="outlined-basic"
      label="Password"
      name='password'
      size='small'
      fullWidth
      variant="outlined"
      style={{ paddingBottom: '30px' }}
      InputLabelProps={{ style: { fontSize: 15 } }}
      onChange={(e) => changeState(e)} />
    <TextField
      id="outlined-basic"
      label="Mobile Number"
      name='phone'
      size='small'
      fullWidth
      variant="outlined"
      style={{ paddingBottom: '30px' }}
      InputLabelProps={{ style: { fontSize: 15 } }}
      onChange={(e) => changeState(e)} />
    <Button style={{ width: '255px', backgroundColor: '#A03037', color: '#FFFFFF' }} onClick={next}>Signup</Button>
  </div>;
}

export default Signup;