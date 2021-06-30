import React from 'react';

import './Home.css';
import Topbar from './Topbar/Topbar';

const Home = () => {

    return (
        <>
            <div className="Home">
                <Topbar />
                <div className="container-fluid pt-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-lg-1 pt-md-4 pt-sm-4">
                            <div className="divs">
                                <div className="text-center">
                                    <i className="las la-user-clock mb-2"></i>
                                    <h5 className="mb-0">TimeIn</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-lg-1 pt-md-4 pt-sm-4">
                            <div className="divs">
                                <div className="text-center">
                                    <i className="las la-user-times mb-2"></i>
                                    <h5 className="mb-0">TimeOut</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-lg-1 pt-md-4 pt-sm-4">
                            <div className="divs">
                                <div className="text-center">
                                    <i className="las la-user-clock mb-2"></i>
                                    <h5 className="mb-0">TimeIn</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-lg-1 pt-md-4 pt-sm-4">
                            <div className="divs">
                                <div className="text-center">
                                    <i className="las la-user-clock mb-2"></i>
                                    <h5 className="mb-0">TimeIn</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home;