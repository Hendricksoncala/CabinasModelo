const mongoose = require('mongoose');

const CabinaSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  capacidadMaxima: { type: Number, required: true },
  estado: { type: String, enum: ['detenida', 'en movimiento'], default: 'detenida' },
  pasajeros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }]
});

module.exports = mongoose.model('Cabina', CabinaSchema);
