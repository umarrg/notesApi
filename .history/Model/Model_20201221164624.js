const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    question: {type: String, require: true}
});

module.exports = mongoose.model('Course', CourseSchema);