require('./connections/connection.mongo')();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



const routes = require('./routes/note_route')();
app.use('/api/v1/', routes);



app.listen(3000, () => {
    console.log('our server is on port 3000');
});


module.exports.app = app;