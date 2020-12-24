require('./connections/connection.mongo')();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



const routes = require('./routes/route.course')();
app.use('/api/v1/', routes);



app.listen(3000, () => {
    console.log('Our server  on port 3000');
});


module.exports.app = app;