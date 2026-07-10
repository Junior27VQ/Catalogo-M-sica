import express from 'express';
import albumesRoutes from './routes/albumes.js';
import cancionesRoutes from './routes/canciones.js';

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/albums', albumesRoutes);
app.use('/canciones', cancionesRoutes);

app.use('/catalogos', (req, res) => {
  res.json({ message: 'Ruta de catálogos de música' });
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});