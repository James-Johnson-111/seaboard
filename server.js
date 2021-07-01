const express = require('express'), path = require('path');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');
const fileRead = require('fs');
const db = require('./db/connection');

const PORT = process.env.PORT || 5000;

// different express packages other things

app.use( cors() );
app.use( express.json() );
app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( fileUpload() );


app.post('/gettimeinout', ( req, res ) => {

    // for read its last modified date
    // fileRead.stat("client/src/text.txt", function(err, stats){
    //     var mtime = stats.mtime;
    //     res.send( mtime );
    // });

    fileRead.readFile('client/src/text.txt', 'utf-8', function(err, data) {
        if (err) throw err;

        let FirstLine = data.split('\n').shift();
        let firstColumn = FirstLine.split(',').shift();
        let lastColumn = FirstLine.split(',').pop().substring(0, 2);

        let newVal = data.split('\n').filter(
            (val, index, arr) => {
                return val !== FirstLine;
            }
        )
     
        fileRead.writeFile('client/src/text.txt', newVal.join('\n'), 'utf-8', function(err, data) {
            if (err) throw err;

            if ( FirstLine.length > 0 )
            {
                db.query(
                    "SELECT * FROM employees WHERE emp_id = " + firstColumn,
                    ( err, rslt ) => {
    
                        if ( err )
                        {
                            console.log( err );
                        }else
                        {

                            rslt[0].device = lastColumn;
                            res.send(rslt);
    
                        }
    
                    }
                )
            }else
            {
                res.send('no record found');
            }
        })
    });

} );

// Following route for user authentication i.e login/logout
app.use( require('./Routes/Auth/auth') );

// Following route for employee form
app.use( require('./Routes/Employee/employee') );

// Following route for employee attendance
app.use( require('./Routes/Attendance/attendance') );

// Following route for employee descussions
app.use( require('./Routes/Employee/descussions') );

// the following block of code is to define the port number which is dynamic

app.listen(PORT, () => {

    console.log(`Server run on localhost:${PORT}`);

}, '0.0.0.0');