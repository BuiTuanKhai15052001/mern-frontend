// import Alert from 'react-bootstrap/Alert'
// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';

// const AlertMessage = ({ info }) => {

//     return info === null ? null : (
//      //   <Alert variant={info.type} >{info.message}</Alert>
//         toast(info.message, {type:info.type , autoClose: 5000} )
//     )
// }

// export default AlertMessage
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlertMessage = ({ info }) => {
  React.useEffect(() => {
    if (info !== null) {
      toast.error(info.message, { autoClose: 2000 });
    }
  }, [info]);

  return <ToastContainer />;
};

export default AlertMessage;
