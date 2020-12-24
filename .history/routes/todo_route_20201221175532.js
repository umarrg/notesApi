const express = require('express');
const Controller = require('../Controller/Controller');

module.exports = () => {
    const api = express.Router();

    //addTodo
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

    //updateTodo
     api.put('/todo/:id', async (req, res) => {
        const id = req.params.id;
        const { name } = req.body;
        if (id) {
            try {
                const updatedtodo = await Controller.updateTodo(id, name);
                res.status(200).json({ status: 'success', payload: updatedtodo, message: 'Todo updated Successfully!' });
            } catch (err) {
                res.status(500).json({ status: 'failed', payload: null, message: err });
            }
        } else {
            res.status(404).json({ status: 'failed', payload: null, message: 'error' });
        }
    });

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

    return api;
    
}