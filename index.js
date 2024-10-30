const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const WebSocket = require('ws');
const cabinaRoutes = require('./src/routes/cabinaRoutes');
const eventoRoutes = require('./src/routes/eventoRoutes');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.json());
app.use('/api/cabinas', cabinaRoutes);
app.use('/api/eventos', eventoRoutes);

// Conexión WebSocket
wss.on('connection', (ws) => {
  console.log('Nueva conexión WebSocket establecida');
  ws.on('close', () => console.log('Conexión WebSocket cerrada'));
});

// Función para enviar alertas
const enviarAlerta = (mensaje) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(mensaje));
    }
  });
};

// Exponer `enviarAlerta` para uso en otros módulos
module.exports = { app, server, enviarAlerta };

// Conexión a MongoDB y levantamiento del servidor
const PORT = 3000;
mongoose.connect('mongodb://localhost:27017/teleferico', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(PORT, () => console.log(`Servidor ejecutándose en http://localhost:${PORT}`));
  })
  .catch((err) => console.log('Error al conectar con MongoDB:', err));
