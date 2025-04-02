const express = require('express')
const app = express()

app.set('view engine', 'ejs') //configuramos EJS como nuestro motor de plantillas

app.get('/', (req, res) =>{
    //Datos que pasaremos por nuestra plantilla
    const datos = {
        titulo: "mi pagina EJS",
        mensaje: "Vinicius es un mono",
        productos: ["manzana", "banana", "naranja"]
    }

    //vamos a renderizar la plantilla 'index.ejs' con nuestros datos
    res.render('index', datos) //enviamos la lantilla mas los datos
})


app.listen(3000, ()=>{
console.log("Escuchando desde esl puerto 3000");
})