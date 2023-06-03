const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
/*TODO: finish so can test const apiRoutes = require('./routes/apiRoutes'); */
const PORT = process.env.PORT || 3001;
const app = express();

//TODO: add middleware

// starts server
app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));