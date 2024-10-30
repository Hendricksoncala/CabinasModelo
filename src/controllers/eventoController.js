const Evento = require('../models/Evento');

// Registrar un evento crítico
exports.registrarEvento = async (tipo, descripcion, cabinaId) => {
  try {
    const nuevoEvento = new Evento({ tipo, descripcion, cabinaId });
    await nuevoEvento.save();
  } catch (error) {
    console.error('Error al registrar el evento:', error);
  }
};

// Obtener el historial de eventos
exports.obtenerEventos = async (req, res) => {
  try {
    const eventos = await Evento.find().sort({ fecha: -1 });
    res.status(200).json(eventos);
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener el historial de eventos', error });
  }
};
