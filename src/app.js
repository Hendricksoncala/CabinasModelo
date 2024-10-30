const express = require('express');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Importar rutas
const cabinaRoutes = require('./routes/cabinaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

// Usar las rutas
app.use('/api/cabinas', cabinaRoutes);
app.use('/api/usuarios', usuarioRoutes);

module.exports = app; // Exportar app para ser usado en index.js
