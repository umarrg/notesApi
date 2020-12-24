const express = require('express');
const Controller = require('../Controller/Controller');

module.exports = () => {
    const api = express.Router();

    //post course
    api.post('/todo', async (req, res) => {
        try {
            const addtodo = await Controller.addNewTodo(req.body);
            res.status(200).json({ status: 'success', addtodo, message: 'todo created successfully!' });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: 'failed', payload: null, message: err });
        }
    });


    //getAll
    api.get('/todo', async (req, res) => {
        try {
            const allTodos = await Controller.getAllTodos();
            res.status(200).json({ status: 'success', payload: allTodos, message: 'All todos fetched successfully' });

        } catch (err) {
            res.status(200).json({ status: 'success', payload: allTodos, message: 'All courses fetched successfully' });
        }
    });

    //getOne
    api.get('/todo/:id', async (req, res) => {
        const id = req.params.id;
        if (id) {
            try {
                const singleTodo = await Controller.getOneTodo(id);
                res.status(200).json({ status: 'success', payload: singleTodo, message: 'Single Todo fetched Successfully!' });
            } catch (err) {
                res.status(500).json({ status: 'failed', payload: null, message: err });
            }
        } else {
            res.status(404).json({ status: 'failed', payload: null, message: 'error' });
        }
    });

    //update
     api.put('/todo/:id', async (req, res) => {
        const id = req.params.id;
        const { question } = req.body;
        if (id) {
            try {
                const updateTodo = await Controller.updateCourse(id, question);
                res.status(200).json({ status: 'success', payload: updateTodo, message: 'Todo updated Successfully!' });
            } catch (err) {
                res.status(500).json({ status: 'failed', payload: null, message: err });
            }
        } else {
            res.status(404).json({ status: 'failed', payload: null, message: 'error' });
        }
    });

    //delete
    api.delete('/todo/:id', async (req, res) => {
        const id = req.params.id;
        if (id) {
            try {
                await Controller.deleteCourse(id);
                res.status(200).json({ status: 'success', payload: null, message: 'Todo Deleted Successfully!' });
            } catch (err) {
                res.status(500).json({ status: 'failed', payload: null, message: err });
            }
        } else {
            res.status(404).json({ status: 'failed', payload: null, message: 'error' });
        }
    });

    return api;
    
}