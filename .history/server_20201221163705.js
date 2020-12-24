require('./connections/connection.mongo')();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());



const courseRoute = require('./routes/route.course')();
server.use('/api/v1/', courseRoute);



server.listen(3000, () => {
    console.log('Server running on port 3000');
});


module.exports.server = server;