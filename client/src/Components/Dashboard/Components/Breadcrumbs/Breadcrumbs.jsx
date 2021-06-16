import React from 'react';

import './Breadcrumbs.css';

const Breadcrumbs = () => {

    return (
        <>
            <div className="Breadcrumbs">
                <span className="p-0 m-0 pl-2">Home</span> <i class="las la-angle-double-right m-0 p-0"></i>
                <span className="p-0 m-0 pl-2">Settings</span> <i class="las la-angle-double-right m-0 p-0"></i>
                <span className="p-0 m-0 pl-2">Themes</span>
            </div>
        </>
    )
    
};

export default Breadcrumbs;