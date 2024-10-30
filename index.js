require('dotenv').config();  // Cargar variables de entorno al inicio

const mongoose = require('mongoose');
const http = require('http');
const WebSocket = require('ws');
const app = require('./src/app'); // Importar app desde app.js

const server = http.createServer(app); // Crear servidor HTTP usando app
const wss = new WebSocket.Server({ server });

// Configurar WebSocket
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
module.exports = { server, enviarAlerta };

// Conexión a MongoDB y levantamiento del servidor
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(PORT, () => console.log(`Servidor ejecutándose en http://localhost:${PORT}`));
  })
  .catch((err) => console.log('Error al conectar con MongoDB:', err));
