const express = require('express'),
    path = require('path');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

// different express packages other things

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

// Following route for user authentication i.e login/logout
app.use( require('./Routes/Auth/auth') );

// Following route for employee form
app.use( require('./Routes/Employee/employee') );

// the following block of code is to define the port number which is dynamic

app.listen(PORT, () => {

    console.log(`Server run on localhost:${PORT}`);

});