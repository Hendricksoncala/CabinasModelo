const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rutas para los usuarios
router.post('/', usuarioController.crearUsuario);
router.post('/solicitar-viaje', usuarioController.solicitarViaje); // Nueva ruta para solicitar viaje

module.exports = router;
