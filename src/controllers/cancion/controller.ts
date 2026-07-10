import { type Request, type Response } from 'express';
import prisma from '../../database/prisma.js';

export const obtenerCanciones = async (req: Request, res: Response) => {
  try {
    const canciones = await prisma.cancion.findMany();
    res.json(canciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las canciones' });
  }
};

export const crearCancion = async (req: Request, res: Response) => {
  try {
    const { titulo, duracion, albumId } = req.body;
    const nuevaCancion = await prisma.cancion.create({
      data: {
        titulo, duracion, albumId
      }
    });
    res.status(201).json(nuevaCancion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la canción' });
  }
};

export const actualizarCancion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { titulo, duracion, albumId } = req.body;
    const cancionActualizada = await prisma.cancion.update({
      where: { id: Number(id) },
        data: {
        titulo, duracion, albumId
      }
    });
    res.json(cancionActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la canción' });
  }
};

export const eliminarCancion = async (req: Request, res: Response) => {
    try {
    const { id } = req.params;
    await prisma.cancion.delete({
      where: { id: Number(id) }
    });
    res.json({ message: 'Canción eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la canción' });
  }
};
