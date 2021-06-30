import React from 'react';

import './Topbar.css';

const Topbar = () => {

    return (
        <>
            <div className="Topbar">
                <div className="Topbar-left">
                    <p className="mb-0">Welcome To Seaboard Group, Usman Badar</p>
                </div>
                <div className="Topbar-right">
                    <button className="btn">
                        <i className="las la-bell"></i>
                    </button>
                    <button className="btn">
                        <i className="las la-ellipsis-v"></i>
                    </button>
                </div>
            </div>
        </>
    )

}

export default Topbar;