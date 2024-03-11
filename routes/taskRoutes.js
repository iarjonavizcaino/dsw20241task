const express = require('express');
const router = express.Router();
const taskcontroller = require('../controllers/taskController');
const authutils = require('../middleware/authUtils');

// function authenticate(req, res, next) {
//     const token = req.headers.authorization;
//     if(!token) {
//         return res.status(401).json({error: 'Unauthorized'});
//     }
//     const decodedtoken = authutils.verifyToken(token);
//     if(!decodedtoken) {
//         return res.status(401).json({error: 'Unauthorized'});
//     }
//     req.user = decodedtoken;
//     next();
// }

router.get('/', (req, res)=> {
    //const tasks = 
    res.json(taskcontroller.getAllTasks());
});

// Definición de la ruta para obtener una tarea por ID
router.get('/:id', (req, res) => {
    const taskId = parseInt(req.params.id); // Obtiene el ID de la tarea de los parámetros de la URL
    const task = taskcontroller.getTaskById(taskId); // Llama al controlador para obtener la tarea por ID
    if (task) {
        // Si se encontró la tarea, envía la tarea como respuesta
        res.json(task);
    } else {
        // Si no se encontró la tarea, devuelve un mensaje de error
        res.status(404).json({ error: 'Tarea no encontrada' });
    }
});

module.exports = router;

router.post('/',  (req, res)=> {
    const { title, description } = req.body;
    const newTask = taskcontroller.createTask(title, description);
    res.status(201).json(newTask);
});

module.exports = router;

