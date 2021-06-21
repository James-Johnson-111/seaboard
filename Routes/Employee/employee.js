const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// the following request is to get all users data

router.post('/employeesetup', ( req, res ) => {

    const {  } = req.body;

    db.query(
        "INSERT INTO users ( name, father_name, date_of_birth, place_of_birth, user_image, residential_address, permanent_address, emergency_contact_person, emergency_contact_number, landline_home, personal_number, cnic, signature, thumb, password, login_id, date_of_joining, desigantion, department_id, monthly_salary ) VALUES ()",
        ( err, rslt ) => {

            if( err )
            {

                console.log( err );

            }else 
            {

                res.send( rslt );

            }

        }
    )

} );

module.exports = router;