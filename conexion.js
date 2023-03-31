window.mysql = require('mysql');

// const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuración de conexión a la base de datos
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234567890',
    database: 'wiki-web'
});

// Conexión a la base de datos
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión a la base de datos establecida');
});

// Configuración del servidor
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para mostrar el formulario de inicio de sesión
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Ruta para procesar el inicio de sesión
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sql = `SELECT * FROM usuarios WHERE username = '${username}' AND password = '${password}'`;

    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }

        if (result.length === 1) {
            res.send('Inicio de sesión exitoso');
        } else {
            res.send('Nombre de usuario o contraseña incorrectos');
        }
    });
});

// Inicio del servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});