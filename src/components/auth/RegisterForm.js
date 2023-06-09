
// LoginForm.js
import React from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import AlertMessage from '../layout/AlertMessage';
const RegisterForm = () => {

    //Context
    const { registerUser } = useContext(AuthContext)



    //Local state
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [alert, setAlert] = useState(null)
    const { email, password, confirmPassword } = registerForm;



    const onChangeRegisterForm = (e) => {
        setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })
        console.log(registerForm);
    }
    const navigate = useNavigate();
    const register = async (e) => {
        e.preventDefault();
        // if (password !== confirmPassword) {
        //     setAlert({message: 'Confirm Password is not correct!'})
        // }

        try {
            const registerData = await registerUser(registerForm)
            console.log(registerData);
            if ( registerData.success) {
                navigate('/login')
            }
            else {
                setAlert({ message: registerData.message })
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <Form className="mb-3 mt-3" onSubmit={register} >

                <AlertMessage info={alert} />

                <Form.Group className="mb-3">
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        name='email'
                        value={email}
                        onChange={onChangeRegisterForm}
                        required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={onChangeRegisterForm}
                        required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type='password'
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={onChangeRegisterForm}
                        required />
                </Form.Group>
                <Button variant='success' type='submit'>Register</Button>
            </Form>

            <p> Already have an account?
                <Link to={'/login'} className="m-lg-4" >
                    <Button variant='info' size='sm' className='ml-2'> Login</Button>
                </Link>
            </p>
        </>
    )
}

export default RegisterForm;
