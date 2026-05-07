const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // El || 3000 evita errores si el .env falla

// Esto sirve tu carpeta public (el frontend)
app.use(express.static(path.join(__dirname, 'public')));

// Si quieres el mensaje de "Bienvenido" en la consola al entrar a la web
app.get('/', (req, res, next) => {
    console.log('Bienvenido al curso');
    next();
});

app.listen(PORT, () => {
    console.log("Aplicacion corriendo en el puerto: " + PORT);
});
