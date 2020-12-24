const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    : {type: String, require: true}
});

module.exports = mongoose.model('Course', CourseSchema);