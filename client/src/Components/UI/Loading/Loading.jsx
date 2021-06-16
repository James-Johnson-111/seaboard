import React from 'react';

import './Loading.css';
// import loadingIcon from '../../../images/220.gif';

const Loading = ( props ) => {

    const styling = {
        'position' : props.position === undefined ? 'fixed' : props.position,
        'top' : props.top === undefined ? '0' : props.top,
        'left' : props.left === undefined ? '0' : props.left,
        'width' : props.left === undefined ? '100%' : 'calc( 100% - ' + props.left + ' )',
        'height' : props.top === undefined ? '100%' : 'calc( 100% - ' + props.top + ' )',
        'display' : props.display === true ? 'flex' : 'none'
    }

    return (
        <>
            <div className="Loading d-center text-center" style={ styling }>
                {/* <img src={ loadingIcon } width="80px" height="30px" alt="loading img" /> */}
                <h5 className="mb-0">Please Wait</h5>
            </div>
        </>
    )

}

export default Loading;