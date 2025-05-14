require('dotenv').config();
var express = require('express');
var app = express();
// Sirve archivos estáticos desde la carpeta /public
app.use(express.static('public'));

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204


// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

//==============================================
// API endpoint to get the user's IP address, preferred language, and software
// Recibe la dirección IP, idioma preferido y software del cliente
// Middleware para analizar el cuerpo de la solicitud
// ===============================================
app.get('/api/whoami', (req, res) => {
   // Obtener dirección IP
    const ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

    // Obtener idioma preferido
    const language = req.headers['accept-language']?.split(',')[0];

    // Obtener información del User-Agent (software)
    const software = req.headers['user-agent'];

    // Enviar respuesta JSON
    res.json({
        ipaddress: ip,
        language: language,
        software: software
    });
});
    
module.exports = app;