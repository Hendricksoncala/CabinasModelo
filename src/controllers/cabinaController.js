const Cabina = require('../models/Cabina');
const eventoController = require('./eventoController');






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

// Verificar la disponibilidad de una cabina
exports.verificarDisponibilidad = async (req, res) => {
    const { id } = req.params;
    
    try {
      const cabina = await Cabina.findById(id);
      if (!cabina) return res.status(404).json({ message: 'Cabina no encontrada' });
  
      const disponible = cabina.pasajeros.length < cabina.capacidadMaxima;
      res.status(200).json({ cabinaId: cabina.id, disponible });
    } catch (error) {
      res.status(400).json({ message: 'Error al verificar disponibilidad', error });
    }
  };
  

  const estaciones = ['Estación 1', 'Estación 2', 'Estación 3', 'Estación 4'];

  exports.moverCabinaEntreEstaciones = async (req, res) => {
    const { id } = req.params;
  
    try {
      const cabina = await Cabina.findById(id);
      if (!cabina) return res.status(404).json({ message: 'Cabina no encontrada' });
  
      // Verificar si la cabina está en movimiento o vacía/sobrecargada
      if (cabina.estado === 'en movimiento') {
        return res.status(400).json({ message: 'La cabina ya está en movimiento' });
      }
      if (cabina.pasajeros.length === 0) {
        return res.status(400).json({ message: 'No hay pasajeros en la cabina' });
      }
      if (cabina.pasajeros.length > cabina.capacidadMaxima) {
        return res.status(400).json({ message: 'La cabina está sobrecargada' });
      }
  
      // Cambiar al siguiente estado y mover a la siguiente estación
      const estacionActualIndex = estaciones.indexOf(cabina.estacionActual);
      cabina.estado = 'en movimiento';
      await cabina.save();
  
      // Simular el movimiento y actualización de estación
      setTimeout(async () => {
        const siguienteEstacion = estaciones[(estacionActualIndex + 1) % estaciones.length];
        cabina.estacionActual = siguienteEstacion;
        cabina.estado = 'detenida';
        await cabina.save();
        res.status(200).json({
          message: `Cabina ${cabina.id} movida a ${siguienteEstacion}`,
          cabina
        });
      }, 2000); // Mover cabina después de 2 segundos
  
    } catch (error) {
      res.status(400).json({ message: 'Error al mover la cabina', error });
    }
  };
  