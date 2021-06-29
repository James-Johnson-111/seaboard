const express = require('express'), path = require('path');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');
const fileRead = require('fs');

const PORT = process.env.PORT || 5000;

// different express packages other things

app.use( cors() );
app.use( express.json() );
app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( fileUpload() );


app.get('/gettimeinout', ( req, res ) => {

    // for read its last modified date
    // fileRead.stat("client/src/text.txt", function(err, stats){
    //     var mtime = stats.mtime;
    //     res.send( mtime );
    // });

    fileRead.readFile('client/src/text.txt', 'utf-8', function(err, data) {
        if (err) throw err;

        let FirstLine = data.split('\n').shift();
        console.log(FirstLine);

        let newVal = data.split('\n').filter(
            (val, index, arr) => {
                return val !== FirstLine;
            }
        )
     
        fileRead.writeFile('client/src/text.txt', newVal.join('\n'), 'utf-8', function(err, data) {
            if (err) throw err;
            res.send('Done!');
        })
    })

} );

// Following route for user authentication i.e login/logout
app.use( require('./Routes/Auth/auth') );

// Following route for employee form
app.use( require('./Routes/Employee/employee') );

// the following block of code is to define the port number which is dynamic

app.listen(PORT, () => {

    console.log(`Server run on localhost:${PORT}`);

});