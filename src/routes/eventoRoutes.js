const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

// Ruta para obtener el historial de eventos
router.get('/', eventoController.obtenerEventos);

module.exports = router;
