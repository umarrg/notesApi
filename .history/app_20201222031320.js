require('./connections/connection.mongo')();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



const routes = require('./routes/todo_route')();
app.use('/api/v1/', routes);



app.listen(3000, () => {
    console.log('our server  on port 3000');
});


module.exports.app = app;