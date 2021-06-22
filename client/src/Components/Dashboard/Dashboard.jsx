import React, { useState } from 'react';

import './Dashboard.css';
import Cookies from 'js-cookies';
import { useHistory, Route } from 'react-router-dom';
import SideBar from './Components/SideBar/SideBar';
import TopBar from './Components/TopBar/TopBar';
import Breadcrumbs from './Components/Breadcrumbs/Breadcrumbs';
import Descussion from './Pages/Descussion/Descussion';
import DescussChat from './Pages/Descussion/Chat/Chat';
import EmployeeForm from './Pages/EmployeeSetup/EmployeeForm';
import PurchaseRequisition from './Pages/Forms/PurchaseRequisition/PurchaseRequisition';

const Dashboard = () => {

    const history = useHistory();
    const [ ShowBar, setShowBar ] = useState( false );

    setInterval(() => {
        
        // if ( Cookies.getItem("LoginID") || Cookies.getItem("LoginID") === '' )
        // {
        //     // Empty
        // }else
        // {
        //     history.push('/login');
        // }
        
    }, 100);

    const ShowSideBar = () => {

        if ( ShowBar )
        {
            setShowBar( false );
        }else
        {
            setShowBar( true );
        }

    }

    return (
        <>
            <div className="Dashboard">

                {/* SideBar Start From Here */}
                    <SideBar show={ ShowBar } />
                {/* SideBar End Here */}

                <div className="Dashboard_main_content">
                    {/* TopBar Start From Here */}
                        <TopBar sideBarTrue={ ShowSideBar } />
                    {/* TopBar End here */}
                    <div className="content">
                        <Breadcrumbs />
                        <Route exact path='/dashboard' component={ Descussion } />
                        <Route exact path='/employee' component={ EmployeeForm } />
                        <Route exact path='/descuss_chat/:id' component={ DescussChat } />

                        <Route exact path='/purchaserequisition' component={ PurchaseRequisition } />
                    </div>
                </div>

            </div>
        </>
    )

};

export default Dashboard;