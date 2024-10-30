const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
  tipo: { type: String, required: true },          // Tipo de evento (e.g., "Sobrecarga", "Error de operación")
  descripcion: { type: String, required: true },    // Descripción del evento
  cabinaId: { type: String, required: true },       // ID de la cabina afectada
  fecha: { type: Date, default: Date.now },         // Fecha del evento, con valor por defecto de la fecha actual
});

module.exports = mongoose.model('Evento', EventoSchema);
