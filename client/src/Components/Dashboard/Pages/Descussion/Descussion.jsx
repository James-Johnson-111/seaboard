import React, { useEffect, useState } from 'react';

import './Descussion.css';
import AddNewPost from './AddNewPost/AddNewPost';
import $ from 'jquery';
import axios from '../../../../axios';
import Cookies from 'js-cookies';

const Descussion = () => {

    const [ PrevDescussions, setPrevDescussions ] = useState([]);

    useEffect(
        () => {

            $('.comments').live('click', function() {
                alert("click");
            })
            const Data = new FormData();
            Data.append('empID', Cookies.getItem('EmpID'));
            setInterval(() => {
                
                getPrevDescussions();

            }, 1000);

        }, []
    )

    const getPrevDescussions = () => {

        axios.get( '/prevdescussions' ).then( response => {

            setPrevDescussions( response.data );

        } ).catch( error => {

            console.log( error );

        } );

    }

    return (
        <>
            <div className="Descussion container-fluid mt-3">
                <AddNewPost />
                {
                    PrevDescussions.map(
                        ( val, index ) => {
                            return (
                                <>
                                    <div className="previous_descussions">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <div className="emp_img" style={{ 'backgroundImage': "url('https://www.gizbot.com/img/2016/05/shutterstock-380389330-28-1464414634.jpg')" }}></div>
                                            <div className="pl-3">
                                                <h5 className="mb-0">{ val.name + ' ' + val.father_name }</h5>
                                                <p className="mb-0 text-secondary">9 June 2021 at 09:08 am</p>
                                            </div>
                                        </div>
                                        <div className="description">
                                            { val.description }
                                        </div>
                                        <img src={ "images/descussions/" + val.image } width="100%" alt="Post Img" />
                                        <div className="UX">
                                            <div className="d-flex justify-content-center align-items-center w-50">
                                                <div className=""><i className="lar la-thumbs-up pr-2"></i>Like</div>
                                            </div>
                                            |
                                            <div className="d-flex justify-content-center align-items-center w-50">
                                                <div className="comments"><i className="las la-comments pr-2"></i>Comments</div>
                                            </div>
                                        </div>
                                        <div className="comments_input">
                                            <input type="text" className="form-control" placeholder="Write A Comments" />
                                            <small className="d-block mx-auto pl-3 text-secondary">Press enter to post</small>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    )
                }
            </div>
        </>
    )

}

export default Descussion;