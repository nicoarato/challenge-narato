const express = require('express');
const cors = require('cors');

const servicios = require('./servicios');

const server = express();
server.use(cors());


server.get('/api/items', (req, res) => {
    servicios.getItems(req.query.q)
        .then(items => res.json(items))
        .catch(error => res.sendStatus(error.status).send(error));
});

server.get('/api/items/:id', (req, res) => {
    servicios
        .getItemDetail(req.params.id)
        .then(item => res.json(item))
        .catch(error => res.sendStatus(error.status).send(error));
});

server.listen(5000, () => {
    console.log('Servidor escuchando en PORT: 5000');
});
