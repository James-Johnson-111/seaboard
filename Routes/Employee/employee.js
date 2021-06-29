const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// the following request is to get all users data

router.post('/employeedata', ( req, res ) => {

    const { Name, FatherName, Dob, PoB, ImageName, RsdtAddress, PrmtAddress, Emergency_contact_person, Emergency_contact_number, landlineHome, personal_no, cnic, cnic_PoI , cnic_DoI , cnic_DoE , password, UserName, education } = req.body;
    
    const Img = req.files.Image;
    let imgName = ImageName + '.png';

    Img.mv('client/public/images/employees/' + imgName, (err) => {

        if (err) {

            console.log(err);

        }

    });

    db.query(
        "INSERT INTO employees ( name, father_name, date_of_birth, place_of_birth, residential_address, permanent_address, emergency_person_name, emergency_person_number, landline, cell, education, login_id, password, image ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [Name, FatherName, Dob, PoB, RsdtAddress, PrmtAddress, Emergency_contact_person, Emergency_contact_number, landlineHome, personal_no, education, UserName, password, imgName],
        ( err, rslt ) => {

            if( err )
            {

                console.log( err );

            }else 
            {

                // db.query(
                //     "SELECT emp_id FROM employees WHERE",
                //     [Name, FatherName, Dob, PoB, RsdtAddress, PrmtAddress, Emergency_contact_person, Emergency_contact_number, landlineHome, personal_no, UserName, password],
                //     ( err, rslt ) => {
            
                //         if( err )
                //         {
            
                //             console.log( err );
            
                //         }else 
                //         {
            
                            res.send("Result Send");
            
                //         }
            
                //     }
                // );

            }

        }
    );

} );

module.exports = router;