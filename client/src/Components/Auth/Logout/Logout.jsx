import React from 'react';

import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookies';

const Logout = () => {

    const history = useHistory();

    if (Cookies.removeItem('LoginID')) {
        Cookies.removeItem('LoginID');
        history.push('/login');
    } else {
        history.push('/login');
    }

    return(
        <>
        </>
    )
    
}

export default Logout;