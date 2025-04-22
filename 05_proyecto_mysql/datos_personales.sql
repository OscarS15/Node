CREATE DATABASE datos_personales;
USE datos_personales;

CREATE TABLE personas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    edad INT,
    email VARCHAR(100) UNIQUE
);

INSERT INTO personas (nombre, apellidos, edad, email)
 VALUES ('Juan', 'Pérez García', 30, 'juan.perez@example.com'), 
 ('María', 'González López', 25, 'maria.gonzalez@example.com'), 
 ('Carlos', 'Martínez Ruiz', 40, 'carlos.martinez@example.com'),
 ('Diana', 'Gallego Domínguez', 32, 'diana.gallego@gmail.com'),
 ('Jose', 'Rodríguez Merino', 52, 'jose.rodriguez@yahoo.com'),
 ('Ana', 'Matute Silva', 20, 'ana@example.com'),
 ('Sonia', 'Risquez Nos', 47, 'sonia@gmail.com'); 