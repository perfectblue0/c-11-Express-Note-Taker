const express = require('express');
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

// makes new app using express
const app = express();

// parses URL-encoded data from requests which allows handling of form data sent through POST requests
app.use(express.urlencoded({ extended: false }));

// parses JSON data from requesets
app.use(express.json());

// prepares static file serving middleware
app.use(express.static("public"));

// handle requests based on routes
app.use(htmlRoutes)
app.use(apiRoutes)

// starts server and logs that it's listening
app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));