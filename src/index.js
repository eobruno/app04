const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

app.listen(3000)
