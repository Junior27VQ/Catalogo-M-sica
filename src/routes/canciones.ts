import { Router } from 'express';
import { obtenerCanciones, crearCancion, actualizarCancion, eliminarCancion } from '../controllers/cancion/controller.js';

const router = Router();

router.get('/', obtenerCanciones);
router.post('/', crearCancion);
router.put('/:id', actualizarCancion);
router.delete('/:id', eliminarCancion);

export default router;