const express = require('express');
const router = express.Router();
const cabinaController = require('../controllers/cabinaController');

// Rutas para las cabinas
router.post('/crear', cabinaController.crearCabina);
router.delete('/:id', cabinaController.eliminarCabina);
router.put('/mover/:id', cabinaController.moverCabina);
router.put('/mover-entre-estaciones/:id', cabinaController.moverCabinaEntreEstaciones); // Nueva ruta para mover entre estaciones
router.get('/disponibilidad/:id', cabinaController.verificarDisponibilidad);
router.get('/', cabinaController.obtenerCabinas);
module.exports = router;
