require('express-async-errors');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
require('./startup/config')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/validation')();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;