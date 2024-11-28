// Controlador para Usuario (usuario.controller.ts)
import { Request, Response } from 'express';
import UsuarioService from '../services/usuario.service';
import Usuario from '../models/usuario.model';

class UsuarioController {
  public async createUsuario(req: Request, res: Response) {
    try {
      const data = req.body;
      const usuario = await UsuarioService.createUsuario(data);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { nombre, password } = req.body;
      const token = await UsuarioService.login(nombre, password);
      res.status(200).json(token);
    } catch (error) {
      res.status(401).json({ error: (error as Error).message });
    }
  }
  public async perfil(req: Request, res: Response) {
    try {
      if (!(req as any)['usuario']) { // Utilizar notación de corchetes para evitar el error de tipo
        res.status(401).json({ message: 'Usuario no autenticado' });
        return;
      }
      res.status(200).json({ message: `Bienvenido, usuario: ${(req as any)['usuario'].nombre}` });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
  
}




export default new UsuarioController();