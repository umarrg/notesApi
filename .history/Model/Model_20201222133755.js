const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
 
    name: {type: String, required: true},
    title: {type: String, require: true}
    description: 
});

module.exports = mongoose.model('todo', Todo);