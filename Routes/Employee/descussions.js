const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

router.get('/prevdescussions', ( req, res ) => {

    db.query(
        'SELECT employees.name, employees.father_name, employees.login_id, descussions.* FROM descussions INNER JOIN employees ON employees.emp_id = descussions.emp_id GROUP BY id desc',
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