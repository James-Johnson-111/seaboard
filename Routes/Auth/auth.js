const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
// const sql = require('mssql');

// const config = {
//     server: "localhost\\SQLEXPRESS",
//     port: 1433,
//     user: 'sa',
//     password: 'usman',
//     database: 'test',
//     options: {
//         enableArithAbort: true
//     },
//     connectionTimeout: 150000,
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 30000
//     }
// }

// sql.on('error', err => {
//     console.log( err.message );
// })

// async function getSQLemps() {

//     let conn = new sql.ConnectionPool(config);
//     let req = new sql.Request( conn );

//     conn.connect( function ( err ) {

//         if ( err )
//         {0
//             console.log( err );
//             return;
//         }

//         req.query("SELECT * FROM emps", function ( err, record ) {
//             if ( err )
//             {
//                 console.log( err );
//                 return;
//             }else {
//                 console.log( record );
//                 conn.close();
//             }
//         })

//     } )

// }
// getSQLemps();

// the following request is to get all users data

router.get('/getallemployees', ( req, res ) => {

    db.query(
        'SELECT * FROM employees',
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