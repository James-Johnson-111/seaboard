import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './EmployeeForm.css';
import Webcam from 'react-webcam';
import $ from 'jquery';
import axios from '../../../../axios';

import passwordHash from 'password-hash';

const EmployeeForm = () => {

    const history = useHistory();

    // To store the Employee Form Data
    const [ Employee, setEmployee ] = useState( {
        Name: '', FatherName: '', Dob: '', PoB: '', Image: '', ImageName: '', RsdtAddress: '', PrmtAddress: '', Emergency_contact_person: '', 
        Emergency_contact_number: '', landlineHome: '', personal_no: '', cnic: '', cnic_PoI: '', cnic_DoI: '', cnic_DoE: '', password: '', usrname: '',
        cnfpassword: '', timeIN: '', timeOUT: '', additionalOFF: ''
    } );

    const [ Education, setEducation ] = useState(
        {
            eduLevel: '', eduTitle: '', eduIName: '', eduYComplete: ''
        }
    );

    const [ EducationAdded, setEducationAdded ] = useState([]);

    const [ Camera, setCamera ] = useState( false );
    const [ empImages, setempImages ]  = useState('');

    const [ empCNIC, setempCNIC ]  = useState( {
        cnic: '', imgName: '', file: ''
    } );
    const [ empCV, setempCV ]  = useState( {
        CV: '', imgName: '', file: ''
    } );
    const [ empPAddress, setempPAddress ]  = useState( {
        PAddress: '', imgName: '', file: ''
    } );
    const [ empEdu, setempEdu ]  = useState( {
        Education: '', imgName: '', file: ''
    } );

    const refs = useRef(null);

    // React lifecycle
    useEffect( () => {

        $('.Step2').slideUp(0);
        $('.Step3').slideUp(0);
        $('.Step4').slideUp(0);
        $('.Step5').slideUp(0);
        $('.Step6').slideUp(0);

        $('.form1').on( 'submit', ( e ) => {

            e.preventDefault();
            const Data = new FormData();
            Data.append('LoginID', $("input[name='usrname']").val());
            axios.post('/usernameexistornot', Data).then(response => {

                if (response.data[0] !== undefined) {
                    alert("User already exist");
                } else {
                    if ($("input[name='password']").val() === $("input[name='cnfpassword']").val()) {
                        $('.Step1').slideUp();
                        $('.Step2').slideDown();
                        $('.cnic_icon').addClass('activeStep');
                    }
                }

            }).catch(error => {

                console.log(error);

            });
            
        } );

        $('.step2_btn_prev').on( 'click', () => {
            $('.Step1').slideDown();
            $('.Step2').slideUp();
            $('.cnic_icon').removeClass('activeStep');
        } );

        $('.form2').on( 'submit', ( e ) => {
            
            e.preventDefault();
            $('.Step3').slideDown();
            $('.Step2').slideUp();
            $('.contact_icon').addClass('activeStep');
        } );

        $('.step3_btn_prev').on( 'click', () => {
            $('.Step2').slideDown();
            $('.Step3').slideUp();
            $('.contact_icon').removeClass('activeStep');
        } );

        $('.form3').on( 'submit', ( e ) => {
            
            e.preventDefault();
            $('.Step4').slideDown();
            $('.Step3').slideUp();
            $('.photo_icon').addClass('activeStep');
        } );

        $('.step4_btn_prev').on( 'click', () => {
            $('.Step3').slideDown();
            $('.Step4').slideUp();
            $('.photo_icon').removeClass('activeStep');
        } );

        $('.step4_btn_next').on( 'click', () => {

            $('.Step4').slideUp();
            $('.Step5').slideDown();
            $('.documents_icon').addClass('activeStep');

        } );

        $('.step5_btn_prev').on( 'click', () => {
            $('.Step4').slideDown();
            $('.Step5').slideUp();
            $('.documents_icon').removeClass('activeStep');
        } );

        $('.step5_btn_next').on( 'click', () => {

            $('.Step5').slideUp();
            $('.Step6').slideDown();

        } );

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

        let Passport = Employee.personal_no;
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

    // When user enter his education information this function will call
    const onEducationAddition = ( e ) => {

        const { name, value } = e.target;
        const Val = {
            ...Education,
            [name]: value
        }

        setEducation( Val );

    }

    // On Adding Education to form
    const AddEducation = ( e ) => {

        e.preventDefault();
        setEducationAdded( [...EducationAdded, Education] );
        setEducation( { ...Education, eduLevel: '', eduTitle: '', eduIName: '', eduYComplete: '' } )

    }

    // On removing an education from the list
    const removeEducation = ( id ) => {

        setEducationAdded(EducationAdded.filter(
            (val, index, arr) => {
                return index !== id;
            }
        ) );

    }

    // On form submittion
    const EmplloyeeSetup = ( e ) => {
        e.preventDefault();

        if ( Employee.ImageName !== '' )
        {

            const FormsData = new FormData();

            FormsData.append('Name', Employee.Name);
            FormsData.append('UserName', Employee.usrname);
            FormsData.append('FatherName', Employee.FatherName);
            FormsData.append('Dob', Employee.Dob);
            FormsData.append('PoB', Employee.PoB);
            FormsData.append('ImageName', Employee.ImageName);
            FormsData.append('RsdtAddress', Employee.RsdtAddress);
            FormsData.append('PrmtAddress', Employee.PrmtAddress);
            FormsData.append('Emergency_contact_person', Employee.Emergency_contact_person);
            FormsData.append('Emergency_contact_number', Employee.Emergency_contact_number);
            FormsData.append('landlineHome', Employee.landlineHome);
            FormsData.append('personal_no', Employee.personal_no);
            FormsData.append('cnic', Employee.cnic);
            FormsData.append('cnic_PoI', Employee.cnic_PoI);
            FormsData.append('cnic_DoI', Employee.cnic_DoI);
            FormsData.append('cnic_DoE', Employee.cnic_DoE);
            FormsData.append('timeIN', Employee.timeIN);
            FormsData.append('timeOUT', Employee.timeOUT);
            FormsData.append('additionalOFF', Employee.additionalOFF);
            FormsData.append('password', passwordHash.generate( Employee.password ));
            FormsData.append('education', JSON.stringify(EducationAdded));
            FormsData.append('Image', Employee.Image);
            FormsData.append('CNICImage', empCNIC.file);
            FormsData.append('CNICImageName', empCNIC.imgName);
            FormsData.append('CVImage', empCV.file);
            FormsData.append('CVImageName', empCV.imgName);
            FormsData.append('AddressImage', empPAddress.file);
            FormsData.append('AddressImageName', empPAddress.imgName);
            FormsData.append('EducationImage', empEdu.file);
            FormsData.append('EducationImageName', empEdu.imgName);

            axios.post('/employeedata', FormsData, {

                headers: { 'content-type': 'multipart/form-data' }

            }).then(response => {


            }).catch(error => {

                console.log(error);

            });

        }
    }
    
    const onImageUpload = ( event ) => {

        const reader = new FileReader();
        const { name } = event.target;

        let Name = Employee.Name;
        let subName = Name.substring(0,2);

        let Profession = Employee.FatherName;
        let subProfession = Profession.substring(0,3);

        let Passport = Employee.cnic;
        let subPassport = Passport.substring(0,4);

        let ImageCurrentName = subName + subProfession + subPassport;

        reader.onload = () => {

            if( reader.readyState === 2 )
            {

                if ( name === 'cnicPhoto' )
                {
                    setempCNIC( { ...empCNIC, cnic: reader.result, imgName: ImageCurrentName, file: event.target.files[0] } )
                }else if ( name === 'cvPhoto' )
                {
                    setempCV( { ...empCV, CV: reader.result, imgName: ImageCurrentName, file: event.target.files[0] } )
                }else if ( name === 'paddressPhoto' )
                {
                    setempPAddress( { ...empPAddress, PAddress: reader.result, imgName: ImageCurrentName, file: event.target.files[0] } )
                }else {
                    setempEdu( { ...empEdu, Education: reader.result, imgName: ImageCurrentName, file: event.target.files[0] } )
                }

            }

        }

        reader.readAsDataURL( event.target.files[0] );

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
                        <div className="text-center mb-3 emp_heading">
                            <h3 className="text-uppercase formName mb-1">Employment Form</h3>
                            <p>Seaboard Group Employee Data Form</p>
                        </div>

                        <div className="steps">
                            <div>
                                <i className="las la-universal-access activeStep"></i>
                                <p className="mb-0 mt-1 text-center">Personal</p>
                            </div>
                            <div>
                                <i className="las la-list-ol cnic_icon"></i>
                                <p className="mb-0 mt-1 text-center ">CNIC</p>
                            </div>
                            <div>
                                <i className="las la-phone-volume contact_icon"></i>
                                <p className="mb-0 mt-1 text-center ">Contact</p>
                            </div>
                            <div>
                                <i className="las la-camera photo_icon"></i>
                                <p className="mb-0 mt-1 text-center ">Photo</p>
                            </div>
                            <div>
                                <i className="las la-file-alt documents_icon"></i>
                                <p className="mb-0 mt-1 text-center ">Documents</p>
                            </div>
                        </div>

                        <div className="Step1">
                            <form className="form1">
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Name:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-font"></i>
                                            <input onChange={onChangeHandler} name="Name" type="text" pattern="^[A-Za-z]+$" title="Name only contains letters" className="form-control" required minLength="3" maxLength="15" />
                                        </div>
                                    </div>
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Father Name:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-bold"></i>
                                            <input onChange={onChangeHandler} name="FatherName" type="text" pattern="^[A-Za-z]+$" title="Father Name only contains letters" className="form-control" required minLength="3" maxLength="15" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Date of Birth:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="lar la-calendar"></i>
                                            <input onChange={onChangeHandler} name="Dob" type="date" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Place of Birth:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-location-arrow"></i>
                                            <input list="cities" onChange={onChangeHandler} name="PoB" type="text" className="form-control" pattern="^[A-Za-z]+$" title="Place of birth only contains letters" required minLength="3" maxLength="18" />
                                                <datalist id="cities">
                                                    <option value="Karachi" />
                                                    <option value="Lahore" />
                                                    <option value="Queta" />
                                                    <option value="Peshawer" />
                                                    <option value="Kashmir" />
                                                </datalist>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight w-100 mr-2">
                                        <label className="mb-0 font-weight-bold">Educational Qualifications:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-school"></i>
                                            <div className="education_container">
                                                {
                                                    EducationAdded.map(
                                                        ( val, index ) => {

                                                            return (
                                                                <>
                                                                    <span key={ index }>{ val.eduTitle } <i className="las la-times" onClick={ () => removeEducation( index ) }></i></span>
                                                                </>
                                                            )

                                                        }
                                                    )
                                                }
                                            </div>
                                            {
                                                EducationAdded.length < 5
                                                ?
                                                <i className="las la-plus-circle pl-2 addEducation_icon" data-toggle="modal" data-target="#AddEducation"></i>
                                                :
                                                null
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight mr-2 w-100">
                                        <label className="mb-0 font-weight-bold">Login ID:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="lar la-closed-captioning"></i>
                                            <input onChange={onChangeHandler} name="usrname" type="text" pattern="^[A-Za-z0-9]+$" title="LoginID only contains letters and Numbers" className="form-control" required minLength="3" maxLength="20" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Password:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-lock"></i>
                                            <input onChange={onChangeHandler} name="password" type="password" pattern="^[A-Za-z0-9]+$" title="Password only contains letters and Numbers" className="form-control" required minLength="3" maxLength="20" />
                                        </div>
                                    </div>
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Confirm Password:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-lock"></i>
                                            <input onChange={onChangeHandler} name="cnfpassword" type="password" pattern="^[A-Za-z0-9]+$" title="Confirm Password only contains letters and Numbers" className="form-control" required minLength="3" maxLength="20" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight mr-2">
                                        <div className="d-lg-flex justify-content-center mb-2">
                                            <div className="leftRight mr-2">
                                                <label className="mb-0 font-weight-bold">TimeIn:</label>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <i className="las la-history"></i>
                                                    <select name="timeIN" className="form-control" onChange={ onChangeHandler }>
                                                        <option value="">Select Time</option>
                                                        <option value="05:00 am">05:00 am</option>
                                                        <option value="06:00 am">06:00 am</option>
                                                        <option value="07:00 am">07:00 am</option>
                                                        <option value="08:00 am">08:00 am</option>
                                                        <option value="09:00 am">09:00 am</option>
                                                        <option value="10:00 am">10:00 am</option>
                                                        <option value="11:00 am">11:00 am</option>
                                                        <option value="12:00 pm">12:00 pm</option>
                                                        <option value="01:00 pm">01:00 pm</option>
                                                        <option value="02:00 pm">02:00 pm</option>
                                                        <option value="03:00 pm">03:00 pm</option>
                                                        <option value="04:00 pm">04:00 pm</option>
                                                        <option value="05:00 pm">05:00 pm</option>
                                                        <option value="06:00 pm">06:00 pm</option>
                                                        <option value="07:00 pm">07:00 pm</option>
                                                        <option value="08:00 pm">08:00 pm</option>
                                                        <option value="09:00 pm">09:00 pm</option>
                                                        <option value="10:00 pm">10:00 pm</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="leftRight">
                                                <label className="mb-0 font-weight-bold">TimeOut:</label>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <i className="lar la-clock"></i>
                                                    <select name="timeOUT" className="form-control" onChange={ onChangeHandler }>
                                                        <option value="">Select Time</option>
                                                        <option value="05:00 am">05:00 am</option>
                                                        <option value="06:00 am">06:00 am</option>
                                                        <option value="07:00 am">07:00 am</option>
                                                        <option value="08:00 am">08:00 am</option>
                                                        <option value="09:00 am">09:00 am</option>
                                                        <option value="10:00 am">10:00 am</option>
                                                        <option value="11:00 am">11:00 am</option>
                                                        <option value="12:00 pm">12:00 pm</option>
                                                        <option value="01:00 pm">01:00 pm</option>
                                                        <option value="02:00 pm">02:00 pm</option>
                                                        <option value="03:00 pm">03:00 pm</option>
                                                        <option value="04:00 pm">04:00 pm</option>
                                                        <option value="05:00 pm">05:00 pm</option>
                                                        <option value="06:00 pm">06:00 pm</option>
                                                        <option value="07:00 pm">07:00 pm</option>
                                                        <option value="08:00 pm">08:00 pm</option>
                                                        <option value="09:00 pm">09:00 pm</option>
                                                        <option value="10:00 pm">10:00 pm</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Additional Off (if any):</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-toggle-off"></i>
                                            <select name="additionalOFF" className="form-control" onChange={ onChangeHandler }>
                                                <option value="">Select the day</option>
                                                <option value="Sunday">Sunday</option>
                                                <option value="Monday">Monday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thursday">Thursday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                            </select>
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
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">CNIC:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-list-ol"></i>
                                            <input onChange={onChangeHandler} name="cnic" type="text" pattern="^[0-9]+$" title="CNIC only contains letters" className="form-control" required minLength="13" maxLength="13" />
                                        </div>
                                    </div>
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Date of Issue:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="lar la-calendar-check"></i>
                                            <input onChange={onChangeHandler} name="cnic_DoI" type="date" className="form-control" required minLength="3" maxLength="15" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Place of Issue:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-map-marked-alt"></i>
                                            <input onChange={onChangeHandler} name="cnic_PoI" type="text" className="form-control" pattern="^[A-Za-z]+$" title="Place Of Issue only contains letters" required minLength="3" maxLength="15" />
                                        </div>
                                    </div>
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Date of Expiry:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="lar la-calendar-times"></i>
                                            <input onChange={onChangeHandler} name="cnic_DoE" type="date" className="form-control" required minLength="3" maxLength="15" />
                                            <datalist id="cities">
                                                <option value="Karachi" />
                                                <option value="Lahore" />
                                                <option value="Queta" />
                                                <option value="Peshawer" />
                                                <option value="Kashmir" />
                                            </datalist>
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
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Residential Address:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-map-marked"></i>
                                            <input onChange={onChangeHandler} name="RsdtAddress" type="text" className="form-control" required minLength="10" maxLength="50" />
                                        </div>
                                    </div>
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Permanent Address:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-map-marker"></i>
                                            <input onChange={onChangeHandler} name="PrmtAddress" type="text" className="form-control" required minLength="10" maxLength="50" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Emergency Contact Person:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-ambulance"></i>
                                            <input onChange={onChangeHandler} name="Emergency_contact_person" type="text" className="form-control" pattern="^[A-Za-z]+$" title="Emergency Contact Person only contains letters" required minLength="3" maxLength="15" />
                                        </div>
                                    </div>
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Emergency Contact Number:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-mobile-alt"></i>
                                            <input onChange={onChangeHandler} name="Emergency_contact_number" pattern="^[0-9]+$" title="Emergency Person Number only contains number" type="text" className="form-control" required minLength="11" maxLength="13" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Landline Home:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-phone-volume"></i>
                                            <input onChange={onChangeHandler} name="landlineHome" type="text" className="form-control" pattern="^[0-9]+$" title="Lanline Home only contains numbers" required minLength="3" maxLength="15" />
                                        </div>
                                    </div>
                                    <div className="leftRight mr-2">
                                        <label className="mb-0 font-weight-bold">Personal Cell Phone Number:</label>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <i className="las la-phone-square-alt"></i>
                                            <input onChange={onChangeHandler} name="personal_no" pattern="^[0-9]+$" type="text" className="form-control" required minLength="11" maxLength="13" />
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
                            <form encType="multipart/form-data">
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="employee_img" data-toggle="modal" data-target="#myModal" style={{ 'backgroundImage': "url('" + empImages + "')" }}></div>
                                </div>
                                <div className="text-right mt-3 mr-2">
                                    <button type="button" className="btn btn-sm step4_btn_prev">Previous</button>
                                    <button type="button" className="btn btn-sm step4_btn_next">Submit</button>
                                </div>
                            </form>
                        </div>

                        <div className="Step5">
                            <form onSubmit={ EmplloyeeSetup } encType="multipart/form-data">
                                <div className="d-lg-flex justify-content-center mb-2">
                                    <div className="leftRight mr-3 w-25">
                                        <div className="documents_divs" style={{ 'backgroundImage': "url('" + empCNIC.cnic + "')" }} onClick={ () => $('#cnicPhotograph').trigger('click') }>
                                            <span className="m-0 p-0">CNIC</span>
                                        </div>
                                    </div>
                                    <div className="leftRight mr-3 w-25">
                                        <div className="documents_divs" style={{ 'backgroundImage': "url('" + empCV.CV + "')" }} onClick={ () => $('#cvPhotograph').trigger('click') }>
                                            <span className="m-0 p-0">CV</span>
                                        </div>
                                    </div>
                                    <div className="leftRight mr-3 w-25">
                                        <div className="documents_divs" style={{ 'backgroundImage': "url('" + empPAddress.PAddress + "')" }} onClick={ () => $('#paddressPhotograph').trigger('click') }>
                                            <span className="m-0 p-0">Proof of Address</span>
                                        </div>
                                    </div>
                                    <div className="leftRight mr-2 w-25">
                                        <div className="documents_divs" style={{ 'backgroundImage': "url('" + empEdu.Education + "')" }} onClick={ () => $('#eduPhotograph').trigger('click') }>
                                            <span className="m-0 p-0">Educational Document</span>
                                        </div>
                                    </div>
                                </div>

                                {/* hidden input type = file */}
                                <input type="file" name="cnicPhoto" id="cnicPhotograph" style={ { 'display' : 'none' } } onChange={ onImageUpload } required />
                                <input type="file" name="cvPhoto" id="cvPhotograph" style={ { 'display' : 'none' } } onChange={ onImageUpload } required />
                                <input type="file" name="paddressPhoto" id="paddressPhotograph" style={ { 'display' : 'none' } } onChange={ onImageUpload } required />
                                <input type="file" name="eduPhoto" id="eduPhotograph" style={ { 'display' : 'none' } } onChange={ onImageUpload } required />


                                <div className="text-right mt-3 mr-2">
                                    <button type="button" className="btn btn-sm step5_btn_prev">Previous</button>
                                    <button type="submit" className="btn btn-sm step5_btn_next">Submit</button>
                                </div>
                            </form>
                        </div>

                        <div className="Step6">
                            <div className="d-lg-flex justify-content-center mb-2">
                                <h3 className="mt-4">Form Submitted Successfully</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">


                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">LIVE CAMERA</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
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
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="AddEducation" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">


                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">ADD EDUCATION</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="add_education">
                                    <label className="mb-0">Level of Education</label>
                                    <select onChange={ onEducationAddition } name="eduLevel" className="form-control" value={ Education.eduLevel }>
                                        <option value="">Select an option</option>
                                        <option value="PrimaryShcool">Primary Shcool</option>
                                        <option value="HighShcool">High Shcool</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Bachelor">Bachelor</option>
                                        <option value="Master">Master</option>
                                        <option value="Doctorate">Doctorate</option>
                                        <option value="DiplomaCourse">Diploma Course</option>
                                    </select>
                                    <label className="mb-0">Title</label>
                                    <input onChange={ onEducationAddition } name="eduTitle" type="text" className="form-control" value={ Education.eduTitle } />
                                    <label className="mb-0">Institute Name</label>
                                    <input onChange={ onEducationAddition } name="eduIName" type="text" className="form-control" value={ Education.eduIName } />
                                    <label className="mb-0">Year of Completion</label>
                                    <input onChange={ onEducationAddition } name="eduYComplete" type="date" className="form-control" value={ Education.eduYComplete } />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-default" data-dismiss="modal" onClick={ AddEducation }>Add</button>
                            </div>
                        </div>

                    </div>
                </div>
        </>
    )
    
}

export default EmployeeForm;