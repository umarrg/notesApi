const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
 
   
    title: {type: String, require: true},

    : {type: String, require: true}
});

module.exports = mongoose.model('todo', Todo);