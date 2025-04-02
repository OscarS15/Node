//IMPORTANTE SIEMPRE COLOCAR CABECERAS
//llamaremos a nuestra app inicial o index.js o app.js
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    next();
})

app.use((req, res, next) => {
    const ip_maligna = "127.54.56.3"
    if (req.ip === ip_maligna) {
        res.status(401).send('Acceso denegado');
}else{
    console.log(req.ip);
        next();
}    
})

app.get('/', (req, res) =>{
    res.send('Este es nuestrooo inicio');
})

app.get('/acerca', (req, res) =>{
    res.send('Este es nuestro about');
})
//aqui estamos recibiendo un parametro, el : es para indicar que es un parametro
app.get('/acerca/:who', (req, res) =>{
    //el parametro recibido se guarda en req.params, en este caso sera req.params.who
    res.send('Tu nombre es ' + req.params.who);
})

app.get('/saludar', (req,res) =>{
    //aqui hariamos operaciones con la base de datos, que nos devuelve un json
    res.send({mensaje: 'hola, q tal'})
})

app.get('/ir', (req, res) =>{
    //estamos redireccionando a otra pagina, en este caso a google
    res.redirect('http://www.google.com');
    res.redirect('/'); //redireccionamos a la pagina de inicio
    //vemos que pueden ser rutas relativas o absolutas, tambien internas o externas
})

app.get('/acerca', (req, res) =>{
    res.send('Este es nuestro about');
})

//estamos usando un middleware para manejar errores, lo colocamos al final 
// para cualquier pagina que no exista, se ejecutara este middleware
// la colocamos al final porque si no, no se ejecutara
app.use((req, res) => {
    res.statusCode = 404
    res.send('404');
  });

  //Estado 304 -> No Modificado, el navegador cachea la pagina y no la vuelve a cargar, 
  // porque no se ha modificado desde la ultima vez que se cargó
app.listen(3000, () => {
    console.log('servidor escuchando el puerto 3000');
})