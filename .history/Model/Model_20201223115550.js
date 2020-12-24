const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const N = new Schema({
 
    
    title: {type: String, require: true},
    createDateTime: {type: Date, default: Date.now},
    latestEditDateTime: {type: Date, default: Date.now },
   
    content: {type: String, require: true}
});

module.exports = mongoose.model('todo', Todo);