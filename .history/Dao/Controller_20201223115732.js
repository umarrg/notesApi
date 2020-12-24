const Model = require('../Model/Model');

class  NoteController {
    constructor() { }

    addNewNote(obj) {
        return new Promise((resolve, reject) => {
            let newNote = new Model(obj);
            newNote.save((err, saved) => {
                if (err) {
                    reject(err);
                }
                resolve(newNote);
            });
        });
    }

    getAllNotes() {
        return new Promise((resolve, reject) => {
            Model.find((err, allNote) => {
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

    // updateTodo(id, name) {
    //     return new Promise((resolve, reject) => {
    //         Model.findByIdAndUpdate(id, { $set: name }, { new: true }, (err, updatedtodo) => {
    //             if (err) {
    //                 reject(err)
    //             }
    //             resolve(updatedtodo);
    //         });
    //     });
    // }

    update(id, title, description, ) {
        return new Promise((resolve, reject) => {
            Model.findByIdAndUpdate(id, { $set: { title, description, id} }, { new: true }, (err, updatedtodo) => {
                if (err) {
                    reject(err);
                }
               
                resolve(updatedtodo);
            });
        });
    }


   

    deleteTodo(id){
        return new Promise((resolve, reject) => {
            Model.findByIdAndDelete(id, (err, result) => {
                if (err) {
                    reject(err);
                } 
                resolve(' Todo Deleted Successfully');
            });
        });
    }

    deleteAllTodos() {
        return new Promise((resolve, reject) => {
            Model.deleteMany((err, allTodos) => {
                if (err) {
                    reject(err)
                }
                resolve(allTodos);
            });
        });
    }
}

module.exports = new TodoController();