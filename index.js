//maneja todos los metodos y funciones
let app = require('express')();
const http = require('http').Server(app);
const cors = require('cors');
//maneja los datos
const express = require('express');

const port = 3000;

app.use(express.json());

//cabeceras de cords
app.use(cors());

//routes
app.use(require('./routes/cliente'));

http.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});