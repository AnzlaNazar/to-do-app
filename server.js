
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.json({ success: true });
});

app.listen(5000, () => {
    console.log('Backend running on port 5000');
});
