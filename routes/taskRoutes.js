const express = require('express');
const router = express.Router();
const taskcontroller = require('../controllers/taskController');
const authutils = require('../middleware/authUtils');

function authenticate(req, res, next) {
    const token = req.headers.authorization;
    if(!token) {
        return res.status(401).json({error: 'Unauthorized'});
    }
    const decodedtoken = authutils.verifyToken(token);
    if(!decodedtoken) {
        return res.status(401).json({error: 'Unauthorized'});
    }
    req.user = decodedtoken;
    next();
}

router.get('/', authenticate,(req, res)=> {
    //const tasks = 
    res.json(taskcontroller.getAllTasks());
});

router.post('/', authenticate, (req, res)=> {
    const { title, description } = req.body;
    const newTask = taskcontroller.createTask(title, description);
    res.status(201).json(newTask);
});

module.exports = router;

