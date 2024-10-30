const mongoose = require('mongoose');

const cabinaSchema = new mongoose.Schema({
  identificador: { type: String, required: true },
  capacidadMaxima: { type: Number, required: true }
});

module.exports = mongoose.model('Cabina', cabinaSchema);
