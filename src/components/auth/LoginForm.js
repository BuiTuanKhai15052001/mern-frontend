
// LoginForm.js
import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import { useState, useContext } from 'react';
import AlertMessage from '../layout/AlertMessage';
const LoginForm = () => {


  //Context
  const { loginUser } = useContext(AuthContext)

  const navigate = useNavigate()

  //Local state
  const [loginForm, setLoginForm] = useState({})
  const [alert, setAlert] = useState(null)


  const onChangeLoginForm = (e) => {
    setLoginForm(values => ({ ...values, [e.target.name]: e.target.value }))
    console.log(loginForm);
  }
  const login = async (e) => {
    e.preventDefault();
    try {
      const loginData = await loginUser(loginForm)
      console.log(loginData);
      if (loginData.success) {
        navigate('/dashboard')
      } else {
        setAlert({ message: loginData.message })
        // setTimeout(()=>{
        //   setAlert(null)
        // }, 3000)
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
      <Form className="mb-3 mt-3" onSubmit={login}>

        <AlertMessage info={alert} />




        <Form.Group className="mb-3">
          <Form.Control type='text' placeholder='Username'
            name='email'
            value={loginForm.email || ''}
            onChange={onChangeLoginForm}
            required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type='password' placeholder='Password' name='password'
            value={loginForm.password || ''}
            onChange={onChangeLoginForm}
            required />
        </Form.Group>
        <Button variant='success' type='submit'>Login</Button>


      </Form>

      <p> Don't have account?
        <Link to={'/register'} className="m-lg-4" >
          <Button variant='info' size='sm' className='ml-2'> Register</Button>
        </Link>
      </p>
    </>
  )
}

export default LoginForm;
