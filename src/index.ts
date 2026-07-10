import express from 'express';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/catalogos', (req, res) => {
  res.json({ message: 'Ruta de catálogos de música' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});