const express = require('express');
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

// makes new app using express
const app = express();



// parses JSON data from incoming requests which allow the application to handle JSON payloads in the request body
app.use(express.urlencoded({ extended: false }));

// used to parse URL-encoded data from incoming requests which enables handling of form data sent through POST requets
app.use(express.json());

// prepares static file seving middleware
app.use(express.static("public"));

// add route handlers again
app.use(htmlRoutes)
app.use(apiRoutes)

// starts server
app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));