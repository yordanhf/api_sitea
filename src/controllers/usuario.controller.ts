// Controlador para Usuario (usuario.controller.ts)
import { Request, Response } from 'express';
import UsuarioService from '../services/usuario.service';


class UsuarioController {
  public async createUsuario(req: Request, res: Response) {
    try {
      const usuarios = await  UsuarioService.getAllUsuarios();
      const data = req.body;

      // Si no hay usuarios, permitir la creación sin autenticación
      if (usuarios.length === 0) {        
        const usuario = await UsuarioService.createUsuario(data);
        res.status(201).json(usuario);
        return;
      }

      // Si no esta autenticado deniega el permiso
      if (!(req as any)['usuario']) {
        res.status(403).json({ message: 'Permiso denegado' });
        return;
      }

      // Si esta autenticado puede crear el usuario nuevo       
        const usuario = await UsuarioService.createUsuario(data);
        res.status(201).json(usuario);
        return;
      
    } catch (error) {
      res.status(500).json({error: (error as Error).message});
      return;
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
      if (!(req as any)['usuario']) { // Utilizar notación de corchetes para evitar el error de tipo
        res.status(401).json({ message: 'Usuario no autenticado' });
        return;
      }
      res.status(200).json({ message: `Bienvenido, usuario: ${(req as any)['usuario'].nombre}` });
      return;
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
  
}




export default new UsuarioController();