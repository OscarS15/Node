const express = require('express'); //esto requiere la libreria express
const app = express(); //esto crea una instancia de express
//Express ya nos sirve como un servidor web, por lo que podemos hacer uso de los métodos HTTP
//GET, POST, PUT, DELETE, etc.

//VAMOS A USAR UN MIDDLEWARE
//Un middleware es una función que se ejecuta antes de que se ejecute una ruta
//Esto quiere decir que debe ir antes de las rutas
//USAREMOS PARAMETROS MAS ADELANTE
app.use((req, res, next) => {
    console.log('Estas pasando por un middleware');
    //next(); esto es para que continue con el siguiente middleware, puede ser opcional
})

app.get('/', (req, res) =>{
    res.send('Hola estas en el inicio');
})

app.get('/dashboard', (req, res) =>{
    res.send('Hola estas en el dashboard');
})

app.get('/profile', (req, res) =>{
    res.send('Hola estas viendo tu perfil');
})

app.listen(3000); //esto inicia el servidor en el puerto 3000
console.log('Estas en el puerto 3000'); //esto es un mensaje en consola
