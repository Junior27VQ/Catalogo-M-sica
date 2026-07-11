import { Router } from 'express';
import { obtenerCanciones, crearCancion, actualizarCancion, eliminarCancion } from '../controllers/cancion/controller.js';
import { validarDuracion } from '../middlewares/validarCancion.js';

const router = Router();

router.get('/', obtenerCanciones);
router.post('/', validarDuracion, crearCancion);
router.put('/:id', actualizarCancion);
router.delete('/:id', eliminarCancion);

export default router;