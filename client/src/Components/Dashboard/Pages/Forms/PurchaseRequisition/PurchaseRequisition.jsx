import React, { useEffect, useRef, useState } from 'react';

import './PurchaseRequisition.css';

import $ from 'jquery';

const PurchaseRequisition = () => {

    const componentRef = useRef();

    const [ Specifications, setSpecifications ] = useState(
        {
            specific_desc: '', specific_qty: 0, specific_estCost: 0,
        }
    )
    const [ TotalCost, setTotalCost ] = useState(0);
    const [ Total, setTotal ] = useState(0);
    const [ ShowSpecifications, setShowSpecifications ] = useState([]);

    useEffect(
        () => {

            $('.Step1').slideUp(0);
            $('.Step2').slideUp(0);
            $('.Step3').slideUp(0);
            $('.Step4').slideUp(0);
            $('.Step5').slideUp(0);

            $('.Step1').slideDown();

            $('.form1').on('submit', (e) => {

                e.preventDefault();
                $('.Step1').slideUp();
                $('.Step2').slideDown();
                $('.rtype_icon').addClass('activeStep');
            });

            $('.step2_btn_prev').on('click', () => {
                $('.Step1').slideDown();
                $('.Step2').slideUp();
                $('.rtype_icon').removeClass('activeStep');
            });

            $('.form2').on('submit', (e) => {

                e.preventDefault();
                $('.Step3').slideDown();
                $('.Step2').slideUp();
                $('.reason_icon').addClass('activeStep');
            });

            $('.step3_btn_prev').on('click', () => {
                $('.Step2').slideDown();
                $('.Step3').slideUp();
                $('.reason_icon').removeClass('activeStep');
            });

            $('.form3').on('submit', (e) => {

                e.preventDefault();
                $('.Step4').slideDown();
                $('.Step3').slideUp();
                $('.spec_icon').addClass('activeStep');
            });

            $('.step4_btn_prev').on('click', () => {
                $('.Step3').slideDown();
                $('.Step4').slideUp();
                $('.spec_icon').removeClass('activeStep');
            });

            $('.step4_btn_next').on('click', () => {
                $('.Step4').slideUp();
                $('.Step5').slideDown();

                setTimeout(() => {
                    alert("Form submitted !!!");
                    // history.push('/dashboard');
                }, 1000);

            });

        }, []
    )

    // Call on change function to store input field data into usestate()
    const OnChangeHandler = ( e ) => {

        const { name, value } = e.target;
        let total = null;

        if ( name === "specific_qty" )
        {
            total = value * Specifications.specific_estCost;
            setTotalCost( total )
        }else if ( name === "specific_estCost" )
        {
            total = value * Specifications.specific_qty;
            setTotalCost( total )
        }

        const Values = {
            ...Specifications,
            [name]: value
        };
        setSpecifications( Values );

    }

    const AddSpecification = () => {

        let SpecificDetails = [ Specifications.specific_desc, Specifications.specific_qty, Specifications.specific_estCost, TotalCost ];
        setShowSpecifications( [...ShowSpecifications, SpecificDetails] );
        setTotal( Total + TotalCost );

        setSpecifications( { ...Specifications, specific_desc: '', specific_qty: 0, specific_estCost: 0, } );

    }

    // On removing an education from the list
    const removeEducation = ( id, total ) => {

        setShowSpecifications(ShowSpecifications.filter(
            (val, index, arr) => {
                return index !== id;
            }
        ) );

        setTotal( Total - total );

    }

    return (
        <>
            <div className="PurchaseRequisition d-center">
                <div className="PurchaseRequisition-content" id="form"  ref={ componentRef }>

                    {/* Form Header */}
                    <div className="text-center mb-3 emp_heading">
                        <h3 className="text-uppercase formName mb-1">Purchase Requisition</h3>
                        <p>Seaboard Group Form For Purchase</p>
                    </div>

                    <div className="steps">
                        
                        <div>
                            <i className="lab la-magento activeStep"></i>
                            <p className="mb-0 mt-1 text-center">General</p>
                        </div>
                        <div>
                            <i className="las la-text-width rtype_icon"></i>
                            <p className="mb-0 mt-1 text-center ">Request Type</p>
                        </div>
                        <div>
                            <i className="lar la-file-word reason_icon"></i>
                            <p className="mb-0 mt-1 text-center ">Reason</p>
                        </div>
                        <div>
                            <i className="lab la-speakap spec_icon"></i>
                            <p className="mb-0 mt-1 text-center ">Specifications</p>
                        </div>

                    </div>

                    <div className="Step1">
                            <form className="form1">
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight w-100 mr-2">
                                        <label className="mb-0 font-weight-bold">Company Name:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-font"></i>
                                            <select name="CompanyName" type="text" className="form-control" required>
                                                <option value="">Select the company name</option>
                                                <option value="SBL">Seaboard Logistics</option>
                                                <option value="SBS">Seaboard Services</option>
                                                <option value="QFS">Qasim Freight Station</option>
                                                <option value="SeaTech">SeaTech</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight w-100 mr-2">
                                        <label className="mb-0 font-weight-bold">Delivery & Work Location:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i class="las la-truck"></i>
                                            <textarea name="DWLocation" className="form-control" style={ { 'height' : '80px' } } required minLength="10"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right mt-3 mr-2">
                                    <button type="submit" className="btn btn-sm step1_btn_next">Next</button>
                                </div>
                            </form>
                        </div>

                        <div className="Step2">
                            <form className="form2">
                            <div className="d-lg-flex justify-content-center mb-3">
                                <div className="leftRight mr-3">
                                    <div className="d-flex justify-content-start align-items-center w-100">
                                        <label className="mb-0 pr-2 leftRight">New Purchase</label>
                                        <input onChange="" name="NewPurchase" type="checkbox" className="" />
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center w-100">
                                        <label className="mb-0 pr-2 leftRight">Budgeted</label>
                                        <input onChange="" name="Budgeted" type="checkbox" className="" />
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center w-100">
                                        <label className="mb-0 pr-2 leftRight">Invoice Attached</label>
                                        <input onChange="" name="InvoiceAttached" type="checkbox" className="" />
                                    </div>
                                </div>
                                <div className="leftRight ml-3">
                                    <div className="d-flex justify-content-start align-items-center w-100">
                                        <label className="mb-0 pr-2 leftRight">Repair / Replacement</label>
                                        <input onChange="" name="RepairORReplacement" type="checkbox" className="" />
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center w-100">
                                        <label className="mb-0 pr-2 leftRight">Not Budgeted</label>
                                        <input onChange="" name="NotBudgeted" type="checkbox" className="" />
                                    </div>
                                </div>
                            </div>
                                <div className="text-right mt-3 mr-2">
                                    <button type="button" className="btn btn-sm step2_btn_prev">Previous</button>
                                    <button type="submit" className="btn btn-sm step2_btn_next">Next</button>
                                </div>
                            </form>
                        </div>

                        <div className="Step3">
                            <form className="form3">
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight w-100 mr-2">
                                        <label className="mb-0 font-weight-bold">Reason For Repair:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-truck-loading"></i>
                                            <textarea name="Reason" className="form-control" style={ { 'height' : '80px' } } required minLength="10"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right mt-3 mr-2">
                                    <button type="button" className="btn btn-sm step3_btn_prev">Previous</button>
                                    <button type="submit" className="btn btn-sm step3_btn_next">Next</button>
                                </div>
                            </form>
                        </div>

                        <div className="Step4">
                            <div className="d-lg-flex justify-content-center mb-2">
                                <label className="mb-0 font-weight-bold text-left">Repair / Replacement / Purchase Specifications</label>
                                {
                                    ShowSpecifications.length < 6
                                    ?
                                    <button data-toggle="modal" data-target="#add_specification" className="btn plus_specifications" title="Add Specification"><i className="las la-plus"></i></button>
                                    :
                                    null
                                    }
                            </div>
                            <div className="table-responsive">
                                <table className="table">
                                    <tr>
                                        <th>Sr.NO.</th>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                        <th>Estimated Cost</th>
                                        <th>Total Cost</th>
                                    </tr>
                                    {
                                        ShowSpecifications.length === 0
                                        ?
                                        <tr>
                                            <td className="text-center" colSpan="5"><b>No Specification Add</b></td>
                                        </tr>
                                        :
                                        ShowSpecifications.map(
                                            (val, index) => {

                                                return (
                                                        <>
                                                            <tr className="spec_results" key={ index }>
                                                                <td className="py-1 text-center"> {index + 1} </td>
                                                                <td className="py-1" style={{ 'whiteSpace': 'nowrap', 'overflow': 'hidden', 'maxWidth': '360px', 'minWidth': '360px' }}> {val[0]} </td>
                                                                <td className="py-1 text-center"> {val[1]} </td>
                                                                <td className="py-1 text-center"> {val[2]} </td>
                                                                <td className="py-1 text-center"> {val[3]} </td>
                                                                <div className="spec_results_cross" onClick={ () => removeEducation( index , val[3] ) }>
                                                                    <i className="las la-times"></i>
                                                                </div>
                                                            </tr>
                                                        </>
                                                )

                                            }   
                                        )
                                    }
                                </table>
                            </div>
                            <div className="d-lg-flex justify-content-end px-5">
                                <div className="">
                                    <b className="">Total: </b>
                                    <span>Rs {Total} /-</span>
                                </div>
                            </div>
                            <div className="text-right mt-3 mr-2">
                                <button type="button" className="btn btn-sm step4_btn_prev">Previous</button>
                                <button type="button" className="btn btn-sm step4_btn_next">Submit</button>
                            </div>
                        </div>

                        <div className="Step5">
                            <div className="d-lg-flex justify-content-center mb-2">
                                <h3 className="mt-4">Form Submitted Successfully</h3>
                            </div>
                        </div>
                                    
                </div>
            </div>
            <div className="modal fade" id="add_specification" tabindex="-1" role="dialog" aria-labelledby="add_specificationLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="add_specificationLabel">Add Specification</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="add_specification">
                                <label className="mb-0">Description</label>
                                <textarea onChange={ OnChangeHandler } name="specific_desc" type="text" className="form-control form-control-sm rounded-0 mb-2" value={ Specifications.specific_desc }></textarea>
                                <label className="mb-0">Quantity</label>
                                <input onChange={ OnChangeHandler } name="specific_qty" type="number" className="form-control form-control-sm rounded-0 mb-2"  value={ Specifications.specific_qty } />
                                <label className="mb-0">Estimated Cost</label>
                                <input onChange={ OnChangeHandler } name="specific_estCost" type="text" className="form-control form-control-sm rounded-0 mb-2"  value={ Specifications.specific_estCost } />
                                <label className="mb-0">Total Cost</label>
                                <input readOnly name="specific_tCost" type="text" className="form-control form-control-sm rounded-0 mb-2" value={ 'Rs ' + TotalCost } />
                                <button className="btn btn-sm d-block mx-auto" onClick={ AddSpecification } data-dismiss="modal">Add Specification</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PurchaseRequisition;