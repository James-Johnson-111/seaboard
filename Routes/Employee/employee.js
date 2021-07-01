const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// the following request is to get all users data

router.post('/employeedata', ( req, res ) => {

    const { Name, FatherName, Dob, PoB, ImageName, RsdtAddress, PrmtAddress, Emergency_contact_person, Emergency_contact_number, landlineHome, personal_no, cnic, cnic_PoI , cnic_DoI , cnic_DoE , password, timeIN, timeOUT, additionalOFF, UserName, education, CNICImageName, CVImageName, AddressImageName, EducationImageName } = req.body;
    
    const { Image, CNICImage, CVImage, AddressImage, EducationImage } = req.files;
    let imgName = ImageName + '.png';
    let cnicimgName = CNICImageName + '.png';
    let cvimgName = CVImageName + '.png';
    let addressimgName = AddressImageName + '.png';
    let eduimgName = EducationImageName + '.png';

    Image.mv('client/public/images/employees/' + imgName, (err) => {

        if (err) {

            console.log(err);

        }

    });

    CNICImage.mv('client/public/images/documents/cnic/' + cnicimgName, (err) => {

        if (err) {

            console.log(err);

        }

    });

    CVImage.mv('client/public/images/documents/cv/' + cvimgName, (err) => {

        if (err) {

            console.log(err);

        }

    });

    AddressImage.mv('client/public/images/documents/address/' + addressimgName, (err) => {

        if (err) {

            console.log(err);

        }

    });
    EducationImage.mv('client/public/images/documents/education/' + eduimgName, (err) => {

        if (err) {

            console.log(err);

        }

    });

    db.query(
        "INSERT INTO employees ( name, father_name, date_of_birth, place_of_birth, residential_address, permanent_address, emergency_person_name, emergency_person_number, landline, cell, education, login_id, password, time_in, time_out, additional_off, image ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [Name, FatherName, Dob, PoB, RsdtAddress, PrmtAddress, Emergency_contact_person, Emergency_contact_number, landlineHome, personal_no, education, UserName, password, timeIN, timeOUT, additionalOFF, imgName],
        ( err, rslt ) => {

            if( err )
            {

                console.log( err );

            }else 
            {

                db.query(
                    "SELECT emp_id FROM employees WHERE login_id = '" + UserName + "'",
                    ( err, rslt ) => {

                        if ( err )
                        {

                            console.log( err );

                        }else
                        {

                            db.query(
                                "INSERT INTO emp_documents (emp_id, cnic, cv, address, education) VALUES (?,?,?,?,?)",
                                [ rslt[0].emp_id, cnicimgName, cvimgName, addressimgName, eduimgName ],
                                ( err, rslt ) => {
            
                                    if ( err )
                                    {
            
                                        console.log( err );
            
                                    }else
                                    {
            
                                        res.send("Done!");
            
                                    }
            
                                }
                            )

                        }

                    }
                )

            }

        }
    );

} );

router.post('/usernameexistornot', ( req, res ) => {

    const { LoginID } = req.body;

    db.query(
        "SELECT login_id FROM employees WHERE login_id = '" + LoginID + "'",
        ( err, rslt ) => {

            if( err )
            {

                console.log( err );

            }else 
            {

                res.send( rslt );

            }

        }
    );

} );

module.exports = router;