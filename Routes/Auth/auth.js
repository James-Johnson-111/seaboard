const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// the following request is to get all users data

router.get('/getallusers', ( req, res ) => {

    db.query(
        'SELECT * FROM users',
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