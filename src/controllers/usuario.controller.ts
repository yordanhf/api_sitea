// Controlador para Usuario (usuario.controller.ts)
import { Request, Response } from 'express';
import UsuarioService from '../services/usuario.service';

class UsuarioController {

  public async createFirstUsuario(req: Request, res: Response) {
    try {
      const usuarios = await UsuarioService.getAllUsuarios();
      if (usuarios.length > 0) {
        res.status(403).json({ message: 'Acceso Denegado' });
        return;
      }

      const data = req.body;
      const usuario = await UsuarioService.createUsuario(data, 'Primer_Usuario');
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

 
  public async createUsuario(req: Request, res: Response) {
    try {
      const usuarioToken = (req as any)['user'];
      const data = req.body;
      const usuario = await UsuarioService.createUsuario(data, usuarioToken.id);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async chequearRespuesta(req: Request, res: Response) {
    try {
      const { nombre, preguntaSeguridad, respuestaSeguridad } = req.body;  
      const answerOK = await UsuarioService.chequearRespuesta(nombre, preguntaSeguridad, respuestaSeguridad);  

      if (answerOK) {
        res.status(200).json({ message: 'Respuesta de seguridad correcta' });
      } else {
        res.status(403).json({ error: 'Pregunta o respuesta de seguridad incorrecta' });
      }
    } catch (error) {
      if ((error as Error).message === 'Usuario no encontrado') {
        res.status(404).json({ error: (error as Error).message });
      } else {
        // Manejo general de errores
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    }
  }

  public async recuperarContrasena(req: Request, res: Response) {
    try {
      const { nombre, preguntaSeguridad, respuestaSeguridad, nuevaContrasena } = req.body;  
      await UsuarioService.recuperarContrasena(nombre, preguntaSeguridad, respuestaSeguridad, nuevaContrasena);  
      res.status(200).json({ message: 'Contraseña actualizada correctamente' });
      return;
    } catch (error) {

      if ((error as Error).message === 'Usuario no encontrado') {
        res.status(404).json({error: (error as Error).message});
        return;
      }
      if ((error as Error).message === 'Pregunta o respuesta de seguridad incorrecta') {
        res.status(403).json({error: (error as Error).message});
        return;
      }
      // Manejo general de errores
      res.status(500).json({error: (error as Error).message});
      return;
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
      if (!(req as any)['user']) { // Utilizar notación de corchetes para evitar el error de tipo
        res.status(401).json({ message: 'Usuario no autenticado' });
        return;
      }
      res.status(200).json({ usuario: `${(req as any)['user'].nombre}`, 
                             rol: `${(req as any)['user'].rol}`,
                             provincia: `${(req as any)['user'].provincia}`  
                            });
      return;
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
  
}




export default new UsuarioController();