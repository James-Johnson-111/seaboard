import React, { useEffect } from 'react';

import Cookies from 'js-cookies';
import { useHistory } from 'react-router';
import e from 'cors';

const Logout = () => {

    const history = useHistory();

    useEffect(
        () => {

            if ( Cookies.removeItem('LoginID') )
            {
                Cookies.removeItem('LoginID');
                history.push('/login');
            }else
            {
                history.push('/login');
            }

        }, []
    );
    return(
        <>
        </>
    )
    
}

export default Logout;