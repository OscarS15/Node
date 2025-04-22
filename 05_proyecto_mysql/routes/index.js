const express = require('express');
const router = express.Router();

//ruta principal
router.get('/', (req, res) => res.redirect('/personas')); // redireccionamos a la ruta /personas

//importar otraas rutas
const personasRoutes = require('./personas'); // importamos las rutas de personas

router.use('/personas', personasRoutes); // usamos las rutas de personas en la ruta /personas