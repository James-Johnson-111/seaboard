import React from 'react';

import './PurchaseRequisition.css';
import QFS from '../../../../../images/qfs.PNG';
import SBL from '../../../../../images/sbl.PNG';
import SBS from '../../../../../images/sbs.PNG';

const PurchaseRequisition = () => {

    return (
        <>
            <div className="PurchaseRequisition d-center">
                <div className="PurchaseRequisition-content">

                    {/* Form Header */}
                    <div className="text-center mb-3">
                        <h3 className="text-uppercase formName mb-1">SEABOARD GROUP</h3>
                    </div>

                    <img src={ QFS } width="100" className="qfs" />
                    <img src={ SBL } width="150" className="sbl" />
                    <img src={ SBS } width="250" className="sbs" />
                    
                    <p className="text-center font-weight-bold text-uppercase">Purchase Requisition Form</p>

                    <div className="d-lg-flex justify-content-center">
                        <div className="leftRight mr-3">
                            <label className="mb-0">Company Name</label>
                            <select onChange="" name="Name" type="text" pattern="^[A-Za-z]+$" title="Name only contains letters" className="form-control" required minLength="3" maxLength="15">
                                <option value="">Please select the company name</option>
                                <option value="">Seaboard Logistics</option>
                                <option value="">Seaboard Services</option>
                                <option value="">Qasim Freight Station</option>
                            </select>
                        </div>
                        <div className="leftRight ml-3">
                            <label className="mb-0">PR Number</label>
                            <input readOnly name="FatherName" type="text" pattern="^[A-Za-z]+$" title="Father Name only contains letters" className="form-control mb-1" required minLength="3" maxLength="15" />
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
                            <button data-toggle="modal" data-target="#add_specification" className="btn plus_specifications" title="Add Specification"><i class="las la-plus"></i></button>
                        </div>
                    </div>
                    {/* <div className="d-flex justify-content-center w-100 specifications mb-3">
                        <div className="specifications-items SrNo text-center">
                            <b>Sr.NO.</b>
                            <span>1</span>
                        </div>
                        <div className="specifications-items Desc">
                            <b>Description</b>
                            <span>In publishing and graphic design, Lorem ipsum is a.</span>
                        </div>
                        <div className="specifications-items qty text-center">
                            <b>Quantity</b>
                            <span>5</span>
                        </div>
                        <div className="specifications-items estCost text-center">
                            <b>Estimated Cost</b>
                            <span>100</span>
                        </div>
                        <div className="specifications-items tCost text-center">
                            <b>Total Cost</b>
                            <span>500</span>
                        </div>
                    </div> */}
                    <div className="table-responsive">
                        <table className="table">
                            <tr>
                                <th>Sr.NO.</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Estimated Cost</th>
                                <th>Total Cost</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>In publishing and graphic design, Lorem ipsum is a.</td>
                                <td>5</td>
                                <td>100</td>
                                <td>500</td>
                            </tr>
                        </table>
                    </div>
                    <div className="d-lg-flex justify-content-end px-5">
                        <div className="">
                            <b className="">Total: </b>
                            <span>Rs 500</span>
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
                            <h6 className="text-center">Submitted To:</h6>
                            <h6 className="text-center mb-4 font-weight-bold" style={ { 'fontSize' : '14px' } }>Head of Department</h6>
                            <b>Name: </b> <br /><br />
                            <b>Signature: </b><br /><br />
                        </div>
                        <div className="sections">
                            <h6 className="text-center">Approved By:</h6>
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
                                <textarea onChange="" name="itemName" type="text" className="form-control form-control-sm rounded-0 mb-2"></textarea>
                                <label className="mb-0">Quantity</label>
                                <input onChange="" name="itemName" type="number" className="form-control form-control-sm rounded-0 mb-2"  />
                                <label className="mb-0">Estimated Cost</label>
                                <input onChange="" name="itemName" type="text" className="form-control form-control-sm rounded-0 mb-2"  />
                                <label className="mb-0">Total Cost</label>
                                <input onChange="" name="itemName" type="text" className="form-control form-control-sm rounded-0 mb-2"  />
                                <button className="btn btn-sm d-block mx-auto" onClick="">Add Specification</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PurchaseRequisition;