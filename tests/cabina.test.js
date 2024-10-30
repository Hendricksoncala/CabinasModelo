// tests/cabina.test.js
const Cabina = require('../src/models/Cabina');

describe('Pruebas para el movimiento de cabinas', () => {
  test('Debería mover la cabina a la siguiente estación si tiene pasajeros y no está sobrecargada', async () => {
    const cabina = new Cabina({ id: 'C003', capacidadMaxima: 5, pasajeros: [] });
    await cabina.save();

    // Simular agregar pasajeros y mover la cabina
    cabina.pasajeros.push('usuarioId1', 'usuarioId2');
    await cabina.save();
    
    const siguienteEstacion = 'Estación 2';
    expect(cabina.estacionActual).toBe(siguienteEstacion);
  });

  test('No debería mover la cabina si está sobrecargada', async () => {
    const cabina = new Cabina({ id: 'C004', capacidadMaxima: 2, pasajeros: ['usuario1', 'usuario2', 'usuario3'] });
    await cabina.save();

    // Intentar mover la cabina y verificar que no se mueve
    expect(cabina.estado).toBe('detenida');
  });
});
