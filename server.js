const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res, next) => {
    res.send('<h1>Hello, I am watching you.</h1>');
});

app.listen(5000, () => {
    console.log("server is listening");
});