import React, { useEffect, useRef, useState } from 'react';

import './EmployeeForm.css';
import Webcam from 'react-webcam';
import $ from 'jquery';

const EmployeeForm = () => {

    // To store the Employee Form Data
    const [ Employee, setEmployee ] = useState( {
        Name: '', FatherName: '', Dob: '', PoB: '', Image: '', ImageName: '', RsdtAddress: '', PrmtAddress: '', Emergency_contact_person: '', 
        Emergency_contact_number: '', landlineHome: '', personal_no: '', cnic: '', cnic_PoI: '', cnic_DoI: '', cnic_DoE: '', password: '',
        education: '', photoGraph: ''
    } );

    const [ Camera, setCamera ] = useState( false );
    const [ empImages, setempImages ]  = useState('');

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
        setEmployee( { ...Employee, Image: screenshot } );
        setempImages(screenshot);
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

        setEmployee( { ...Employee, Image: blob, ImageName: ImageCurrentName } );

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
    const FirstFormSubmittion = ( e ) => {

        e.preventDefault();
        $('.firstform').slideUp();

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
                    <div className="firstform">
                        <div className="text-center mb-3">
                            <h3 className="text-uppercase formName mb-1">Employement Form</h3>
                            <p>Seaboard Group Employee Data Form</p>
                        </div>
                        <div className="emp_form_img" data-toggle="modal" data-target="#myModal" style={{ 'backgroundImage': "url('" + empImages + "')", 'backgroundSize': 'cover' }}></div>
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
                                                        ref={refs}
                                                        videoConstraints={videoConstraints}
                                                    />
                                                    <button className="btn btn-sm btn-block mt-3" onClick={takePhoto}>TAKE YOUR PHOTO</button>
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
                        <div className="text-center typeOfData my-4">
                            <h4 className="mb-0">Personal Information</h4>
                        </div>
                        <form onSubmit={ FirstFormSubmittion } encType="multipart/form-data">

                            <div className="firstStep">
                                <div className="d-lg-flex justify-content-center">
                                    <div className="w-50 mr-2">
                                        <label className="mb-0">Name</label>
                                        <input onChange={onChangeHandler} name="Name" type="text" pattern="^[A-Za-z]+$" title="Name only contains letters" className="form-control" required minLength="3" maxLength="15" />
                                    </div>
                                    <div className="w-50 ml-2">
                                        <label className="mb-0">Father Name</label>
                                        <input onChange={onChangeHandler} name="FatherName" type="text" pattern="^[A-Za-z]+$" title="Father Name only contains letters" className="form-control" required minLength="3" maxLength="15" />
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center">
                                    <div className="w-50 mr-2">
                                        <label className="mb-0">Date Of Birth</label>
                                        <input onChange={onChangeHandler} name="Dob" type="date" className="form-control" required minLength="3" maxLength="15" />
                                    </div>
                                    <div className="w-50 ml-2">
                                        <label className="mb-0">Place Of Birth</label>
                                        <input list="cities" onChange={onChangeHandler} name="PoB" type="text" className="form-control" pattern="^[A-Za-z]+$" title="City only contains letters" required minLength="3" maxLength="15" />
                                        <datalist id="cities">
                                            <option value="Karachi" />
                                            <option value="Lahore" />
                                            <option value="Queta" />
                                            <option value="Peshawer" />
                                            <option value="Kashmir" />
                                        </datalist>
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center">
                                    <div className="w-100">
                                        <label className="mb-0">Educational Qualification</label>
                                        <input list="degree" onChange={onChangeHandler} name="education" type="text" className="form-control" pattern="^[A-Za-z]+$" title="Education only contains letters" required minLength="3" maxLength="15" />
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
                                </div>
                                <div className="text-center typeOfData my-4">
                                    <h4 className="mb-0">CNIC Information</h4>
                                </div>
                                <div className="d-lg-flex justify-content-center">
                                    <div className="w-50 mr-2">
                                        <label className="mb-0">CNIC</label>
                                        <input onChange={onChangeHandler} name="cnic" type="text" pattern="^[0-9]+$" title="CNIC only contains letters" className="form-control" required minLength="13" maxLength="13" />
                                    </div>
                                    <div className="w-50 ml-2">
                                        <label className="mb-0">Date Of Issue</label>
                                        <input onChange={onChangeHandler} name="cnic_DoI" type="date" className="form-control" required minLength="3" maxLength="15" />
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center">
                                    <div className="w-50 mr-2">
                                        <label className="mb-0">Place Of Issue</label>
                                        <input onChange={onChangeHandler} name="cnic_PoI" type="text" className="form-control" pattern="^[A-Za-z]+$" title="Place Of Issue only contains letters" required minLength="3" maxLength="15" />
                                    </div>
                                    <div className="w-50 ml-2">
                                        <label className="mb-0">Date Of Expiry</label>
                                        <input onChange={onChangeHandler} name="cnic_DoE" type="date" className="form-control" required minLength="3" maxLength="15" />
                                    </div>
                                </div>

                                <div className="text-center typeOfData my-4">
                                    <h4 className="mb-0">Contact Information</h4>
                                </div>
                                <div className="d-lg-flex justify-content-center">
                                    <div className="w-50 mr-2">
                                        <label className="mb-0">Residential Address</label>
                                        <input onChange={onChangeHandler} name="RsdtAddress" type="text" className="form-control" required minLength="10" maxLength="50" />
                                    </div>
                                    <div className="w-50 ml-2">
                                        <label className="mb-0">Permanent Address</label>
                                        <input onChange={onChangeHandler} name="PrmtAddress" type="text" className="form-control" required minLength="10" maxLength="50" />
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center">
                                    <div className="w-50 mr-2">
                                        <label className="mb-0">Emergency Contact Person </label>
                                        <input onChange={onChangeHandler} name="Emergency_contact_person" type="text" className="form-control" pattern="^[A-Za-z]+$" title="Emergency Contact Person only contains letters" required minLength="3" maxLength="15" />
                                    </div>
                                    <div className="w-50 ml-2">
                                        <label className="mb-0">Emergency Contact Number</label>
                                        <input onChange={onChangeHandler} name="Emergency_contact_number" pattern="^[0-9]+$" type="text" className="form-control" required minLength="11" maxLength="13" />
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center">
                                    <div className="w-50 mr-2">
                                        <label className="mb-0">Landline Home </label>
                                        <input onChange={onChangeHandler} name="landlineHome" type="text" className="form-control" pattern="^[A-Za-z]+$" title="Emergency Contact Person only contains letters" required minLength="3" maxLength="15" />
                                    </div>
                                    <div className="w-50 ml-2">
                                        <label className="mb-0">Personal Cell Phone Number</label>
                                        <input onChange={onChangeHandler} name="personal_no" pattern="^[0-9]+$" type="text" className="form-control" required minLength="11" maxLength="13" />
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <button type="submit" className="btn" id="callSecondStep">SUBMIT</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default EmployeeForm;