import { Router } from 'express';
import { obtenerAlbums, crearAlbum, actualizarAlbum, eliminarAlbum } from '../controllers/album/controller.js';

const router = Router();

router.get('/', obtenerAlbums);
router.post('/', crearAlbum);
router.put('/:id', actualizarAlbum);
router.delete('/:id', eliminarAlbum);

export default router;