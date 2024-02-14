const express = require('express');
const router = express.Router();
const taskcontroller = require('../controllers/taskController');

router.get('/', (req, res)=> {
    //const tasks = 
    res.json(taskcontroller.getAllTasks());
});

router.post('/', (req, res)=> {
    const { title, description } = req.body;
    const newTask = taskcontroller.createTask(title, description);
    res.status(201).json(newTask);
});

module.exports = router;

