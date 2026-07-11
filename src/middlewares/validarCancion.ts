import {type Request, type Response, type NextFunction} from 'express';
import { error } from 'node:console';

export const validarDuracion = (req: Request, res: Response, next: NextFunction) => {
    const { duracion } = req.body;

    if( duracion < 30 || duracion > 600){
        return res.status(400).json({error:"La duracion debe ser entre 30 y 600 segundos"})
    }
    next();

}