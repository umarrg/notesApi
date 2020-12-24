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
            Model.find((err, allNotes) => {
                if (err) {
                    reject(err)
                }
                resolve(allNotes);
            });
        });
    }

    getOne(id) {
        return new Promise((resolve, reject) => {
            Model.findById(id, (err, singleNote) => {
                if (err) {
                    reject(err)
                }
                resolve(singleNote);
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

    update(id, title, content, ) {
        return new Promise((resolve, reject) => {
            Model.findByIdAndUpdate(id, { $set: { title, content, id} }, { new: true }, (err, updatednote) => {
                if (err) {
                    reject(err);
                }
               
                resolve(updatednote);
            });
        });
    }


   

    deleteNote(id){
        return new Promise((resolve, reject) => {
            Model.findByIdAndDelete(id, (err, result) => {
                if (err) {
                    reject(err);
                } 
                resolve(' Note Deleted Successfully');
            });
        });
    }

    deleteAllNotes() {
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