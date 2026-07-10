import { type Request, type Response } from 'express';
import prisma from '../../database/prisma.js';

export const obtenerAlbums = async (req: Request, res: Response) => {
  try {
    const albums = await prisma.album.findMany();
    res.json(albums);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los albums' });
  }
};

export const crearAlbum = async (req: Request, res: Response) => {
  try {
    const { titulo, artista, anio } = req.body;
    const nuevoAlbum = await prisma.album.create({
      data: {
        titulo, artista, anio
      }
    });
    res.status(201).json(nuevoAlbum);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el álbum' });
  }
};

export const actualizarAlbum = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { titulo, artista, anio } = req.body;
    const albumActualizado = await prisma.album.update({
      where: { id: Number(id) },
      data: {
        titulo, artista, anio
      }
    });
    res.json(albumActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el álbum' });
  }
};

export const eliminarAlbum = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.album.delete({
      where: { id: Number(id) }
    });
    res.json({ message: 'Álbum eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el álbum' });
  }
};
