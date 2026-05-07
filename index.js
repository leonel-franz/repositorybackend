const express = require('express');
const path = require('path');
const app = express();

// Render asigna el puerto, si no usa el 10000
const PORT = process.env.PORT || 10000;

// Servir frontend
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de prueba para ver si el servidor responde
app.get('/ping', (req, res) => {
    res.send('Servidor vivo');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
