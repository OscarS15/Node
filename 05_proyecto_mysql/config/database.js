//En npm.js tenemos la informacion de la base de datos, los pasos que podemos seguir
const mysql = require('mysql'); //usaremos mysql

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'datos_personales'
  });

//es recomendable que hagamos un callback para saber si la coneccion ha sido correcta
connection.connect(err => {
    if(err) throw err; //si hay un error lo lanzamos
    console.log('Conexión a la base de datos establecida'); //si no hay error, mostramos un mensaje
});

module.exports = connection; //exportamos la conexión para que pueda ser usada en otros archivos