const express = require('express');
const Controller = require('../Dao/Controller');

module.exports = () => {
    const api = express.Router();

    //addTodo
    api.post('/note', async (req, res) => {
        try {
            const addnote = await Controller.addNewNote(req.body);
            res.status(200).json({ status: 'success', addnote, message: 'note created successfully!' });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: 'failed', payload: null, message: err });
        }
    });


    //getAll
    api.get('/note', async (req, res) => {
        try {
            const allNotes = await Controller.getAllNotes();
            res.status(200).json({ status: 'success', payload: allNotes, message: 'All todos fetched successfully' });

        } catch (err) {
            res.status(200).json({ status: 'success', payload: allNotes, message: 'All courses fetched successfully' });
        }
    });

    //getOne
    api.get('/note/:id', async (req, res) => {
        const id = req.params.id;
        if (id) {
            try {
                const singlenote = await Controller.getOne(id);
                res.status(200).json({ status: 'success', payload: singleTodo, message: 'Single Todo fetched Successfully!' });
            } catch (err) {
                res.status(500).json({ status: 'failed', payload: null, message: err });
            }
        } else {
            res.status(404).json({ status: 'failed', payload: null, message: 'error' });
        }
    });


    api.put('/todo/:id', async (req, res) => {
        const id = req.params.id;
        const { title, description, } = req.body;
        if (id) {
            try {
                const updatedTodo = await Controller.update(id, description, title );
                res.status(200).json({ status: 'success', payload: updatedTodo, message: 'todo Updated Successfully!' });
            } catch (err) {
                res.status(500).json({ status: 'failed', payload: null, message: err });
            }
        } else {
            res.status(500).json({ status: 'failure', payload: null, message: 'Invalid  id to Update' });
        }
    });
   
    // api.put('/todo/:id', async (req, res) => {
    //     const id = req.params.id;
    //     const { name } = req.body;
    //     if (id) {
    //         try {
    //             const updatedtodo = await Controller.updateTodo(id, name);
    //             res.status(200).json({ status: 'success', payload: updatedtodo, message: 'Todo updated Successfully!' });
    //         } catch (err) {
    //             res.status(500).json({ status: 'failed', payload: err, message: err });
    //         }
    //     } else {
    //         res.status(404).json({ status: 'failed', payload: null, message: 'error' });
           
    //     }
    // });

    // api.put('/todo/:id', (req, res, next) => {
    //     const todos = new Todo({
    //       _id: req.params.id,
    //       title: req.body.title,
    //       name: req.body.name,
    //     todoId: req.body.id
    //     });
    //     Todos.updateOne({_id: req.params.id}, todos).then(
    //       () => {
    //         res.status(201).json({
    //           message: 'todo updated successfully!'
    //         });
    //       }
    //     ).catch(
    //       (error) => {
    //         res.status(400).json({
    //           error: error
    //         });
    //       }
    //     );
    //   });

    //deleteTodo
    api.delete('/todo/:id', async (req, res) => {
        const id = req.params.id;
        if (id) {
            try {
                await Controller.deleteTodo(id);
                res.status(200).json({ status: 'success', payload: null, message: 'Todo Deleted Successfully!' });
            } catch (err) {
                res.status(500).json({ status: 'failed', payload: null, message: err });
            }
        } else {
            res.status(404).json({ status: 'failed', payload: null, message: 'error' });
        }
    });


    api.delete('/todo', async (req, res) => {
        try {
            const deleteTodos = await Controller.deleteAllTodos();
            res.status(200).json({ status: 'success', payload:  deleteTodos, message: 'All todos deleted successfully' });

        } catch (err) {
            res.status(404).json({ status: 'failed', payload: null, message: 'error' });
        }
    });


    return api;
    
}