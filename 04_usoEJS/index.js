//aqui hemos hecho la instalacion de ejs y lo hemos configurado
/*
Plantillas en NodeJS
Generan html dinamico, usamos plantillas (EJS, Handlebars, Pug, ...)
Se programan en el servidor y producen html puro
*/

const express = require('express');
const path = require('path');// path nos va a contener funciones para manejar rutas
const app = express();

//configuracion de las plantillas
app.set('view engine', 'ejs'); //configuramos el motor de plantillas
app.set('views', path.join(__dirname, 'views')); //configuramos la carpeta donde se encuentran las plantillas

app.listen(3000, () => {
    console.log('servidor escuchando el puerto 3000');
    console.log('el path: ' + path);
})