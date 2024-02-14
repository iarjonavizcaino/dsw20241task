const express = require('express');
const bodyParser = require('body-parser');
const taskroutes = require('./routes/taskRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/tasks',taskroutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Servidor ejecutado ${PORT}`);
});




