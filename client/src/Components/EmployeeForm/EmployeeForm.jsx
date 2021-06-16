import React, { useEffect, useRef, useState } from 'react';

import './EmployeeForm.css';
import FormLogo from '../../images/seaboard.PNG';
import Webcam from 'react-webcam';
import $ from 'jquery';

import Step1 from './Steps/Step1';

const EmployeeForm = () => {

    // To store the Employee Form Data
    const [ Employee, setEmployee ] = useState( {
        Name: '', FatherName: '', Dob: '', PoB: '', Image: '', ImageName: '', RsdtAddress: '', PrmtAddress: '', Emergency_contact_person: '', 
        Emergency_contact_number: '', landlineHome: '', personal_no: '', cnic: '', cnic_PoI: '', cnic_DoI: '', cnic_DoE: '', password: '',
        education: ''
    } );

    const [ Camera, setCamera ] = useState( false );

    const refs = useRef(null);

    // React lifecycle
    useEffect( () => {

        setInterval(() => {
            navigator.getUserMedia( { video: true }, () => { setCamera( true ); }, () => { setCamera( false ); } );
        }, 100);
    
    }, [] );

    const b64toBlob = (b64Data, contentType, sliceSize) => {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
    
        var byteCharacters = atob(b64Data); // window.atob(b64Data)
        var byteArrays = [];
    
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
    
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
    
            var byteArray = new Uint8Array(byteNumbers);
    
            byteArrays.push(byteArray);
        }
    
        var blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }

    const takePhoto = () => {

        var screenshot = refs.current.getScreenshot();
        setEmployee( { Image: screenshot } );
        $('.close').trigger('click');

        let block = screenshot.split(";");
        var contentType = block[0].split(":")[1];
        var realData = block[1].split(",")[1];
        var blob = b64toBlob(realData, contentType);

        let Name = Employee.Name;
        let subName = Name.substring(0,3);

        let Profession = Employee.cnic;
        let subProfession = Profession.substring(0,4);

        let Passport = Employee.education;
        let subPassport = Passport.substring(0,3);

        let ImageCurrentName = subName + subProfession + subPassport;

        setEmployee( { Image: blob, ImageName: ImageCurrentName } );

    }

    // Function onchange which is called to store data into usestate()
    const onChangeHandler = ( e ) => {

        const { name, value } = e.target;
        const setVal = {
            ...Employee,
            [name]: value
        }
        setEmployee( setVal );

    }

    // When form is sumitted, this function will call
    const OnEmployeeDataEnter = ( e ) => {

        e.preventDefault();

    }

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    }

    return (
        <>
            <div className="EmployeeForm d-center">
                <div className="EmployeeForm-content">
                    <div className="text-center"><img src={ FormLogo } width="250" alt="FormLogo" /></div>
                    <div className="text-center">
                        <h3 className="text-uppercase formName mb-1">Employement Form</h3>
                        <small>Seaboard Group Employee Data Form</small>
                    </div>
                    <div className="text-center typeOfData shadow-sm my-4">
                        <h5 className="mb-0">Personal Information</h5>
                    </div>
                    <form onSubmit={ OnEmployeeDataEnter } encType="multipart/form-data">
                        
                        <Step1 change={ onChangeHandler } />
                        <div className="d-lg-flex justify-content-center mb-3">
                            <div className="w-100">
                                <label className="mb-0">Educational Qualification</label>
                                <input list="degree" onChange={ onChangeHandler } name="education" type="text" className="form-control" pattern="^[A-Za-z]+$" title="Education only contains letters" required minLength="3" maxLength="15" />
                                <datalist id="degree">
                                    <option value="HSC" />
                                    <option value="Matric" />
                                    <option value="Inter" />
                                    <option value="BSC" />
                                    <option value="PHD" />
                                    <option value="BA" />
                                    <option value="MA" />
                                </datalist>
                            </div>
                            <div className="photo">
                                <button type="button" className="btn py-2 px-3 border-0 shadow-none mt-2" data-toggle="modal" data-target="#myModal"><i class="las la-camera la-2x"></i></button>
                                
                                <div id="myModal" class="modal fade" role="dialog">
                                    <div class="modal-dialog modal-dialog-centered">

                                        
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title">LIVE CAMERA</h4>
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            </div>
                                            <div class="modal-body">
                                                {
                                                    Camera ?
                                                        <>
                                                            <Webcam
                                                                audio={false}
                                                                screenshotFormat="image/jpeg"
                                                                width='100%'
                                                                ref={ refs }
                                                                videoConstraints={ videoConstraints }
                                                            />
                                                            <button className="btn btn-sm btn-block mt-3" onClick={ takePhoto }>TAKE YOUR PHOTO</button>
                                                        </>
                                                        :
                                                        <h4 className="text-center my-3">Camera Not Found</h4>
                                                }
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center typeOfData shadow-sm my-4">
                            <h5 className="mb-0">CNIC Information</h5>
                        </div>
                        <div className="d-lg-flex justify-content-center mb-3">
                            <div className="mr-lg-2 mr-md-2 mr-sm-0 sides">
                                <label className="mb-0">CNIC</label>
                                <input onChange={ onChangeHandler } name="cnic" type="text" pattern="^[0-9]+$" title="CNIC only contains letters" className="form-control" required minLength="13" maxLength="13" />
                            </div>
                            <div className="ml-lg-2 ml-md-2 ml-sm-0 sides">
                                <label className="mb-0">Date Of Issue</label>
                                <input onChange={ onChangeHandler } name="cnic_DoI" type="date" className="form-control" required minLength="3" maxLength="15" />
                            </div>
                        </div>
                        <div className="d-lg-flex justify-content-center mb-3">
                            <div className="mr-lg-2 mr-md-2 mr-sm-0 sides">
                                <label className="mb-0">Place Of Issue</label>
                                <input onChange={ onChangeHandler } name="cnic_PoI" type="text" className="form-control" pattern="^[A-Za-z]+$" title="Place Of Issue only contains letters" required minLength="3" maxLength="15" />
                            </div>
                            <div className="ml-lg-2 ml-md-2 ml-sm-0 sides">
                                <label className="mb-0">Date Of Expiry</label>
                                <input onChange={ onChangeHandler } name="cnic_DoE" type="date" className="form-control" required minLength="3" maxLength="15" />
                            </div>
                        </div>

                        <div className="text-center typeOfData shadow-sm my-4">
                            <h5 className="mb-0">Contact Information</h5>
                        </div>
                        <div className="d-lg-flex justify-content-center mb-3">
                            <div className="mr-lg-2 mr-md-2 mr-sm-0 sides">
                                <label className="mb-0">Residential Address</label>
                                <input onChange={ onChangeHandler } name="RsdtAddress" type="text" className="form-control" required minLength="10" maxLength="50" />
                            </div>
                            <div className="ml-lg-2 ml-md-2 ml-sm-0 sides">
                                <label className="mb-0">Permanent Address</label>
                                <input onChange={ onChangeHandler } name="PrmtAddress" type="text" className="form-control" required minLength="10" maxLength="50" />
                            </div>
                        </div>
                        <div className="d-lg-flex justify-content-center mb-3">
                            <div className="mr-lg-2 mr-md-2 mr-sm-0 sides">
                                <label className="mb-0">Emergency Contact Person </label>
                                <input onChange={ onChangeHandler } name="Emergency_contact_person" type="text" className="form-control" pattern="^[A-Za-z]+$" title="Emergency Contact Person only contains letters" required minLength="3" maxLength="15" />
                            </div>
                            <div className="ml-lg-2 ml-md-2 ml-sm-0 sides">
                                <label className="mb-0">Emergency Contact Number</label>
                                <input onChange={ onChangeHandler } name="Emergency_contact_number" pattern="^[0-9]+$" type="text" className="form-control" required minLength="11" maxLength="13" />
                            </div>
                        </div>
                        <div className="d-lg-flex justify-content-center mb-3">
                            <div className="mr-lg-2 mr-md-2 mr-sm-0 sides">
                                <label className="mb-0">Landline Home </label>
                                <input onChange={ onChangeHandler } name="landlineHome" type="text" className="form-control" pattern="^[A-Za-z]+$" title="Emergency Contact Person only contains letters" required minLength="3" maxLength="15" />
                            </div>
                            <div className="ml-lg-2 ml-md-2 ml-sm-0 sides">
                                <label className="mb-0">Personal Cell Phone Number</label>
                                <input onChange={ onChangeHandler } name="personal_no" pattern="^[0-9]+$" type="text" className="form-control" required minLength="11" maxLength="13" />
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn" id="callSecondStep">SUBMIT</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )

}

export default EmployeeForm;