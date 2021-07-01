import React from 'react';

import './ChooseLocation.css';
import TopBar from '../Home/Topbar/Topbar';

const ChooseLocation = () => {

    const currentDate = new Date();

    const OnSelectLocation = ( Clocation ) => {

        alert( Clocation );
        
    }
    return (
        <>
            <div className="ChooseLocation">
                <TopBar />
                <div className="div_content">
                    <div className="companies" onClick={ () => OnSelectLocation('SBL') }>
                        <h3 className="mb-0">SEABOARD LOGISTICS</h3>
                    </div>
                    <div className="companies" onClick={ () => OnSelectLocation('SBS') }>
                        <h3 className="mb-0">SEABAORD SERVICES</h3>
                    </div>
                    <div className="companies" onClick={ () => OnSelectLocation('ST') }>
                        <h3 className="mb-0">SEA TECH</h3>
                    </div>
                    <div className="companies" onClick={ () => OnSelectLocation('QFS') }>
                        <h3 className="mb-0">QASIM FREIGHT STATION</h3>
                    </div>
                </div>
                <div className="footer">
                    <p className="mb-0">© { currentDate.getFullYear() } seaboard.com.pk All Rights Reserved</p>
                </div>
            </div>
        </>
    )

}

export default ChooseLocation;