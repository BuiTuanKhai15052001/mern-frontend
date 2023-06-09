import React, { useContext, Fragment } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import Spinner from 'react-bootstrap/esm/Spinner';
import { Navigate } from 'react-router-dom';
import NavbarMenu from '../layout/NavbarMenu';


const ProtectedRoute = ({  element: Element, ...rest }) => {
    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext);
   
    console.log(authLoading);
    console.log(isAuthenticated);
    if (authLoading) {
        return (
            <div className='spinner-container'>
                <Spinner animation='border' variant='info' />
            </div>
        )
    }
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

     return (
        <Fragment>
            <NavbarMenu/>
            <Element {...rest} />
        </Fragment>
     )
};

export default ProtectedRoute


