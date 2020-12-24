const express = require('express');
const CourseController = require('../Controller/course.controller');

module.exports = () => {
    const api = express.Router();

    //post course
    api.post('/todo', async (req, res) => {
        try {
            const addtodo = await Controller.addNewTodo(req.body);
            res.status(200).json({ status: 'success', addCourse, message: 'todo created successfully!' });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: 'failed', payload: null, message: err });
        }
    });


    //gerall
    api.get('/course', async (req, res) => {
        try {
            const allTodos = await Controller.getAllTodos();
            res.status(200).json({ status: 'success', payload: allTodsos, message: 'All todods fetched successfully' });

        } catch (err) {
            res.status(200).json({ status: 'success', payload: allCourses, message: 'All courses fetched successfully' });
        }
    });

    //get one
    pastQapi.get('/course/:id', async (req, res) => {
        const id = req.params.id;
        if (id) {
            try {
                const singleCourse = await CourseController.getOneCourse(id);
                res.status(200).json({ status: 'success', payload: singleCourse, message: 'Single course fetched Successfully!' });
            } catch (err) {
                res.status(500).json({ status: 'failed', payload: null, message: err });
            }
        } else {
            res.status(404).json({ status: 'failed', payload: null, message: 'Invalid course ID to fetch' });
        }
    });

    //update
    pastQapi.put('/course/:id', async (req, res) => {
        const id = req.params.id;
        const { question } = req.body;
        if (id) {
            try {
                const updateCourse = await CourseController.updateCourse(id, question);
                res.status(200).json({ status: 'success', payload: updateCourse, message: 'Course question updated Successfully!' });
            } catch (err) {
                res.status(500).json({ status: 'failed', payload: null, message: err });
            }
        } else {
            res.status(404).json({ status: 'failed', payload: null, message: 'Invalid course ID to update' });
        }
    });

    //delete
    pastQapi.delete('/course/:id', async (req, res) => {
        const id = req.params.id;
        if (id) {
            try {
                await CourseController.deleteCourse(id);
                res.status(200).json({ status: 'success', payload: null, message: 'Course Deleted Successfully!' });
            } catch (err) {
                res.status(500).json({ status: 'failed', payload: null, message: err });
            }
        } else {
            res.status(404).json({ status: 'failed', payload: null, message: 'Invalid course ID to delete' });
        }
    });

    return pastQapi;
    
}