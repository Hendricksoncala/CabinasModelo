const Usuario = require('../models/Usuario');
const Cabina = require('../models/Cabina');

// Crear un usuario (mantener este método sin cambios)
exports.crearUsuario = async (req, res) => {
  const { nombre, edad } = req.body;
  try {
    const nuevoUsuario = new Usuario({ nombre, edad });
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear usuario', error });
  }
};

// Solicitar un viaje en una cabina específica
exports.solicitarViaje = async (req, res) => {
  const { cabinaId, usuarioId } = req.body;

  try {
    // Encontrar la cabina y el usuario
    const cabina = await Cabina.findById(cabinaId);
    const usuario = await Usuario.findById(usuarioId);

    if (!cabina) return res.status(404).json({ message: 'Cabina no encontrada' });
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

    // Verificar disponibilidad en la cabina
    if (cabina.pasajeros.length >= cabina.capacidadMaxima) {
      return res.status(400).json({ message: 'Capacidad máxima alcanzada' });
    }

    // Agregar al usuario a la cabina
    cabina.pasajeros.push(usuario._id);
    await cabina.save();

    res.status(200).json({ message: `Usuario ${usuario.nombre} añadido a la cabina ${cabina.id}` });
  } catch (error) {
    res.status(400).json({ message: 'Error al solicitar viaje', error });
  }
};
