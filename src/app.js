const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Importar rutas
const cabinaRoutes = require('./routes/cabinaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

// Usar las rutas
app.use('/api/cabinas', cabinaRoutes);
app.use('/api/usuarios', usuarioRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
