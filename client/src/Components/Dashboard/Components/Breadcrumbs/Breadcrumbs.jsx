import React, { useEffect, useState } from 'react';

import './Breadcrumbs.css';

const Breadcrumbs = () => {

    const [ Locate, setLocate ] = useState('');
    const [ Val, setVal ] = useState([<><span className="p-0 m-0 pl-1 text-capitalize">Home</span> <i className="las la-angle-double-right m-0 p-0"></i></>]);

    useEffect(
        () => {
            
            setInterval(() => {

                let hrefs = window.location.href.split('/');
                let validHrefs = [];

                for ( let x = 5; x > hrefs.length; x-- )
                {

                    if ( hrefs[x] !== '#'  )
                    {
                        console.log( hrefs[x] );
                    }

                }
                // console.log( hrefs );
                // let getLocation = lastHref.toLowerCase();
                
                // let txt = <><span className="p-0 m-0 pl-1 text-capitalize"> { getLocation } </span> <i className="las la-angle-double-right m-0 p-0"></i></>;

            }, 100);
        
        }, []
    )

    return (
        <>
            <div className="Breadcrumbs">
                {
                    Val.map(
                        ( val, index ) => {
                            return ( <div key={ index }>{val}</div> )
                        }
                    )
                }
            </div>
        </>
    )
    
};

export default Breadcrumbs;