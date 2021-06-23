import React, { useEffect, useRef, useState } from 'react';

import './PurchaseRequisition.css';
import QFS from '../../../../../images/QFS-LOGO.PNG';
import SBL from '../../../../../images/SBL-LOGO.PNG';
import SBS from '../../../../../images/SEABOARD-SERVICES.PNG';

import $ from 'jquery';
import { useReactToPrint  } from 'react-to-print';

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
            $("select[name='CompanyName']").on( 'change', () => {
                
                if ( $("select[name='CompanyName']").val() === 'SBL' )
                {
                    $("input[name='PR_Number']").val('01');
                }else if ( $("select[name='CompanyName']").val() === 'SBS' )
                {
                    $("input[name='PR_Number']").val('10');
                }else if ( $("select[name='CompanyName']").val() === 'QFS' )
                {
                    $("input[name='PR_Number']").val('09');
                }else if ( $("select[name='CompanyName']").val() === 'SeaTech' )
                {
                    $("input[name='PR_Number']").val('11');
                }else {
                    $("input[name='PR_Number']").val('');
                }
                
            } )
        }
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

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>
            <div className="PurchaseRequisition d-center">
                <div className="PurchaseRequisition-content" id="form"  ref={ componentRef }>

                    {/* Form Header */}
                    <div className="text-center">
                        <h3 className="text-uppercase formName" onClick={ handlePrint }>SEABOARD GROUP</h3>
                    </div>

                    <img src={ QFS } className="qfs" />
                    <img src={ SBS } className="sbs" />
                    <img src={ SBL } className="sbl" />
                    
                    <h6 className="text-center font-weight-bold text-uppercase">Purchase Requisition Form</h6>

                    <div className="d-lg-flex justify-content-center">
                        <div className="leftRight mr-3">
                            <label className="mb-0">Company Name</label>
                            <select name="CompanyName" type="text" pattern="^[A-Za-z]+$" title="Name only contains letters" className="form-control" required minLength="3" maxLength="15">
                                <option value="">Please select the company name</option>
                                <option value="SBL">Seaboard Logistics</option>
                                <option value="SBS">Seaboard Services</option>
                                <option value="QFS">Qasim Freight Station</option>
                                <option value="SeaTech">Sea-Tech</option>
                            </select>
                        </div>
                        <div className="leftRight ml-3">
                            <label className="mb-0">PR Number</label>
                            <input readOnly name="PR_Number" type="text" pattern="^[A-Za-z]+$" title="Father Name only contains letters" className="form-control mb-1" required minLength="3" maxLength="15" />
                            <div className="d-flex justify-content-end">
                                <small className="d-block"><b>Date: </b> { new Date().toLocaleDateString() } </small>
                            </div>
                        </div>
                    </div>
                    <div className="d-lg-flex justify-content-start">
                        <div className="leftRight">
                            <label className="mb-0">Delivery / Work Location</label>
                            <input onChange="" name="Name" type="text" pattern="^[A-Za-z]+$" title="Name only contains letters" className="form-control" required minLength="3" maxLength="15" />
                        </div>
                    </div>
                    <div className="d-lg-flex justify-content-center mb-3">
                        <div className="leftRight mr-3">
                            <div className="d-flex justify-content-start align-items-center w-100">
                                <label className="mb-0 pr-2 leftRight">New Purchase</label>
                                <input onChange="" name="Name" type="checkbox" pattern="^[A-Za-z]+$" title="Name only contains letters" className="" required minLength="3" maxLength="15" />
                            </div>
                            <div className="d-flex justify-content-start align-items-center w-100">
                                <label className="mb-0 pr-2 leftRight">Budgeted</label>
                                <input onChange="" name="Name" type="checkbox" pattern="^[A-Za-z]+$" title="Name only contains letters" className="" required minLength="3" maxLength="15" />
                            </div>
                            <div className="d-flex justify-content-start align-items-center w-100">
                                <label className="mb-0 pr-2 leftRight">Invoice Attached</label>
                                <input onChange="" name="Name" type="checkbox" pattern="^[A-Za-z]+$" title="Name only contains letters" className="" required minLength="3" maxLength="15" />
                            </div>
                        </div>
                        <div className="leftRight ml-3">
                            <div className="d-flex justify-content-start align-items-center w-100">
                                <label className="mb-0 pr-2 leftRight">Repair / Replacement</label>
                                <input onChange="" name="Name" type="checkbox" pattern="^[A-Za-z]+$" title="Name only contains letters" className="" required minLength="3" maxLength="15" />
                            </div>
                            <div className="d-flex justify-content-start align-items-center w-100">
                                <label className="mb-0 pr-2 leftRight">Not Budgeted</label>
                                <input onChange="" name="Name" type="checkbox" pattern="^[A-Za-z]+$" title="Name only contains letters" className="" required minLength="3" maxLength="15" />
                            </div>
                        </div>
                    </div>
                    <div className="d-lg-flex justify-content-start">
                        <div className="w-100">
                            <label className="mb-0">Reasons For Repair / Replacement / New Purchase</label>
                            <textarea onChange="" placeholder="Please Enter your Reasons" name="Name" pattern="^[A-Za-z]+$" title="Name only contains letters" className="form-control" style={ { 'height' : '80px' } } required></textarea>
                        </div>
                    </div>
                    <div className="d-lg-flex justify-content-start">
                        <div className="w-100">
                            <label className="mb-0">Repair / Replacement / Purchase Specifications</label>
                            {
                                ShowSpecifications.length < 6 
                                ?
                                <button data-toggle="modal" data-target="#add_specification" className="btn plus_specifications" title="Add Specification"><i class="las la-plus"></i></button>
                                :
                                null
                            }
                        </div>
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
                                ShowSpecifications.map(
                                    ( val, index ) => {

                                        return (
                                            <>
                                                <tr>
                                                    <td className="py-1 text-center"> { index + 1 } </td>
                                                    <td className="py-1" style={ { 'whiteSpace' : 'nowrap', 'overflow' : 'hidden', 'maxWidth' : '360px', 'minWidth' : '360px' } }> { val[0] } </td>
                                                    <td className="py-1 text-center"> { val[1] } </td>
                                                    <td className="py-1 text-center"> { val[2] } </td>
                                                    <td className="py-1 text-center"> { val[3] } </td>
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
                            <span>Rs { Total } /- </span>
                        </div>
                    </div>

                    <div className="d-lg-flex justify-content-between mt-3 footer">
                        <div className="sections">
                            <h6 className="text-center">Requested By:</h6>
                            <h6 className="text-center mb-4 font-weight-bold" style={ { 'fontSize' : '14px', 'opacity' : '0' } }>Head of Department</h6>
                            <b>Name: </b> <br /><br />
                            <b>Signature: </b><br /><br />
                        </div>
                        <div className="sections">
                            <h6 className="text-center">Approved By:</h6>
                            <h6 className="text-center mb-4 font-weight-bold" style={ { 'fontSize' : '14px' } }>Head of Department</h6>
                            <b>Name: </b> <br /><br />
                            <b>Signature: </b><br /><br />
                        </div>
                        <div className="sections">
                            <h6 className="text-center">Submitted To:</h6>
                            <h6 className="text-center mb-4 font-weight-bold" style={ { 'fontSize' : '14px' } }>Accounts Department</h6>
                            <b>Name: </b> <br /><br />
                            <b>Signature: </b><br /><br />
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="add_specification" tabindex="-1" role="dialog" aria-labelledby="add_specificationLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="add_specificationLabel">Add Specification</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
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