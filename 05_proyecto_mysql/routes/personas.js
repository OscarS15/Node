const express = require('express');
const router = express.Router();

//rutas para personas
router.get('/', controlador para listar personas)
router.get('/buscar', controlador para buscar personas)
router.get('/nueva', llama al controlador para mostrar el formulario de nueva persona)
router.post('/', controlador para guardar nueva persona)

//si queremos exportar estas rutas, debemos usar:
module.exports = router; // exportamos el router para que pueda ser usado en otros archivos