// tests/cabina.test.js
const Cabina = require('../src/models/Cabina');

test('Debería crear una cabina correctamente', async () => {
  const cabina = new Cabina({ id: 'C001', capacidadMaxima: 5 });
  expect(cabina.capacidadMaxima).toBe(5);
});
