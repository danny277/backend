const express = require('express');
const app = express(); // initialize express app
const port = 5000;

const userRouter = require('./router/userRouter');

// Middleware
app.use('/user', userRouter);

// Routes
app.get('/', (req, res) => {
    res.send('Response from express server')
});

app.get('/add', (req, res) => {
    res.send('Response from express server 1')
});


//starting the express server
app.listen(port, () => {
    console.log('server started');
});

