const Model = require('../Model/Model');

class  TodoController {
    constructor() { }

    addNewTodo(obj) {
        return new Promise((resolve, reject) => {
            let newTodo = new Model(obj);
            newTodo.save((err, saved) => {
                if (err) {
                    reject(err);
                }
                resolve(newTodo);
            });
        });
    }

    getAllTodos() {
        return new Promise((resolve, reject) => {
            Model.find((err, allTodos) => {
                if (err) {
                    reject(err)
                }
                resolve(allTodos);
            });
        });
    }

    getOne(id) {
        return new Promise((resolve, reject) => {
            Model.findById(id, (err, singleTodo) => {
                if (err) {
                    reject(err)
                }
                resolve(singleTodo);
            });
        });
    }

    updateTodo(id, name) {
        return new Promise((resolve, reject) => {
            Model.findByIdAndUpdate(id, { $set: name }, { new: true }, (err, updatedC) => {
                if (err) {
                    reject(err)
                }
                resolve(updatedCourse);
            });
        });
    }

    deleteCourse(id){
        return new Promise((resolve, reject) => {
            CourseModel.findByIdAndDelete(id, (err, result) => {
                if (err) {
                    reject(err);
                } 
                resolve('Course Deleted Successfully');
            });
        });
    }
}

module.exports = new CourseController();