// este es un ejemplo SIN express
const http = require('http');
const servidor = http.createServer((req, res) => {
    //debemos indicarle al navegador que es lo que va a recibir, ejemplo, si es una imagen, decirselo y que tipo de imagen
    res.setHeader('Content-Type', 'text/plain; charset=utf-8'); //tipo de contenido que vamos a enviar, que en este caso es texto plano
    //colocando el charset=utf-8, le decimos que vamos a enviar caracteres especiales
    res.end('Hola Mundo, qué tal'); //ejecuta solo esto y termina 
})

const puerto = 3000;
servidor.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto); //interpolacion, cuando usamos el ${}
})

//Usamos el node --watch para que se actualice automaticamente 