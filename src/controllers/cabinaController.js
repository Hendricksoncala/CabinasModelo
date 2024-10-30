const Cabina = require('../models/Cabina');

// Crear una cabina
exports.crearCabina = async (req, res) => {
  const { id, capacidadMaxima } = req.body;
  try {
    const nuevaCabina = new Cabina({ id, capacidadMaxima });
    await nuevaCabina.save();
    res.status(201).json(nuevaCabina);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear cabina', error });
  }
};

// Eliminar una cabina
exports.eliminarCabina = async (req, res) => {
  const { id } = req.params;
  try {
    await Cabina.findByIdAndDelete(id);
    res.status(200).json({ message: 'Cabina eliminada' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar cabina', error });
  }
};

// Mover una cabina
exports.moverCabina = async (req, res) => {
  const { id } = req.params;
  const { destino } = req.body; // Asume que el destino es una estación
  try {
    const cabina = await Cabina.findById(id);
    if (!cabina) return res.status(404).json({ message: 'Cabina no encontrada' });
    cabina.estado = 'en movimiento';
    await cabina.save();
    res.status(200).json(cabina);
  } catch (error) {
    res.status(400).json({ message: 'Error al mover cabina', error });
  }
};
