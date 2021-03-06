const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    cod: {type: String, required: true},
    title: {type: String, required: true},
    question: {type: String, require: true}
});

module.exports = mongoose.model('Course', CourseSchema);