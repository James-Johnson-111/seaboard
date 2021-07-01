const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

var fullTime = null;

setInterval( () => {

    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var fullTimes = hours + ':' + minutes + ' ' + ampm;
    fullTime = fullTimes.toString();

}, 1 * 1000 );

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

router.post('/checktimein', ( req, res ) => {

    const { Emp_ID } = req.body;

    let tokenDate = new Date();
    let date = tokenDate.getFullYear() + '-' + monthNames[tokenDate.getMonth()] + '-' + tokenDate.getDate();

    db.query(
        'SELECT emp_id FROM emp_attendance WHERE emp_id = ' + Emp_ID + " AND emp_date = '" + date + "'",
        ( err, rslt ) => {

            if( err )
            {

                console.log( 'error' );

            }else 
            {

                res.send( rslt );

            }

        }
    )

} );

router.post('/timein', ( req, res ) => {

    const { Emp_ID, Emp_time_in } = req.body;
    const check = fullTime >= Emp_time_in;
    let empStatus = '';

    let tokenDate = new Date();
    let date = tokenDate.getFullYear() + '-' + monthNames[tokenDate.getMonth()] + '-' + tokenDate.getDate();

    // let lateHours = parseInt( fullTime.toString().split(':').shift() ) - parseInt( Emp_time_in.toString().split(':').shift() );
    // let lateMinutes = parseInt( fullTime.toString().split(':').pop().substring(0,2) ) - parseInt( Emp_time_in.toString().split(':').pop().substring(0,2) );

    if ( check )
    {
        empStatus = 'Late';
    }else
    {
        empStatus = 'OnTime'
    }
    db.query(
        'INSERT INTO emp_attendance (emp_id , emp_status , time_in, emp_date) VALUES (?,?,?,?)',
        [ Emp_ID, empStatus, fullTime, date ],
        ( err, rslt ) => {

            if( err )
            {

                console.log( 'error' );

            }else 
            {

                res.send( 'success' );

            }

        }
    )

} );

module.exports = router;