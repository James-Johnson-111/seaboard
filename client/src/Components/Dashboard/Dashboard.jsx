import React from 'react';

import './Dashboard.css';
import Cookies from 'js-cookies';
import { useHistory } from 'react-router-dom';
import SideBar from './Components/SideBar/SideBar';
import TopBar from './Components/TopBar/TopBar';
import Breadcrumbs from './Components/Breadcrumbs/Breadcrumbs';

const Dashboard = () => {

    const history = useHistory();

    setInterval(() => {
        
        if ( Cookies.getItem("LoginID") || Cookies.getItem("LoginID") === '' )
        {
            // Empty
        }else
        {
            history.push('/login');
        }
        
    }, 100);

    return (
        <>
            <div className="Dashboard">

                {/* SideBar Start From Here */}
                    <SideBar />
                {/* SideBar End Here */}

                <div className="Dashboard_main_content">
                    {/* TopBar Start From Here */}
                        <TopBar />
                    {/* TopBar End here */}
                    <div className="content">
                        <Breadcrumbs />
                    </div>
                </div>

            </div>
        </>
    )

};

export default Dashboard;