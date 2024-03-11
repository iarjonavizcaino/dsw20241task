const Task = require('../models/task');

let tasks = [
    { id: 1, title: 'Tarea 1', description: 'Descripción de la tarea 1' },
    { id: 2, title: 'Tarea 2', description: 'Descripción de la tarea 2' }
];

function getAllTasks() {
    return tasks;
}

function createTask(title, description) {
    const newTask = new Task(tasks.length+1, title, description);
    tasks.push(newTask);
    return newTask;
}

function createTask(title, description) {
    const newTask = new Task(tasks.length+1, title, description);
    tasks.push(newTask);
    return newTask;
}

function getTaskById(taskId) {
    // Busca la tarea con el ID especificado en la lista de tareas
    const task = tasks.find(task => task.id === taskId);
    
    // Si se encuentra la tarea, devuélvela
    if (task) {
        return task;
    } else {
        // Si no se encuentra la tarea, devuelve null o lanza un error, dependiendo de tus requisitos
        return null;
        // También puedes lanzar un error si lo prefieres
        // throw new Error(`No se encontró ninguna tarea con el ID ${taskId}`);
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTaskById
}