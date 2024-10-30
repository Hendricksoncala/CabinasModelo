const express = require('express');
const router = express.Router();
const cabinaController = require('../controllers/cabinaController');

// Rutas para las cabinas
router.post('/', cabinaController.crearCabina);
router.delete('/:id', cabinaController.eliminarCabina);
router.put('/mover/:id', cabinaController.moverCabina);

module.exports = router;
