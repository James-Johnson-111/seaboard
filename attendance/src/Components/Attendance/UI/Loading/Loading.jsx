import React from 'react';

import './Loading.css';
import LoadingImg from '../../../../images/771.gif';

const Loading = ( props ) => {

    return (
        <>
            <div className="Loading" style={ { 'display' : props.show ? 'flex' : 'none' } }>
                <img src={ LoadingImg } className="loadingImage" />
            </div>
        </>
    )

}

export default Loading;