require('./connections/connection.mongo')();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



const courseRoute = require('./routes/route.course')();
server.use('/api/v1/', courseRoute);



server.listen(3000, () => {
    console.log('Server running on port 3000');
});


module.exports.server = server;