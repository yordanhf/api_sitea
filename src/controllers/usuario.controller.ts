// Controlador para Usuario (usuario.controller.ts)
import { Request, Response } from 'express';
import UsuarioService from '../services/usuario.service';

class UsuarioController {

  public async getAllUsuarios(req: Request, res: Response) {
    try { 
      const usuarios = await UsuarioService.getAllUsuarios();
      res.status(201).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async getUsuarioById(req: Request, res: Response) {
    try { 
      const { id } = req.params;
      const usuario = await UsuarioService.getUsuarioById(String(id));
      if (usuario) {
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }      
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async checkUsuarios(req: Request, res: Response) {
    try {
      const usuarios = await UsuarioService.getAllUsuarios();      
      if (usuarios.length > 0) {
        res.status(200).json({ message: 'Usuarios encontrados', exists: true });
      } else {
        res.status(200).json({ message: 'No se encontraron Usuarios', exists: false });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async createFirstUsuario(req: Request, res: Response) {
    try {
      const usuarios = await UsuarioService.getAllUsuarios();
      if (usuarios.length > 0) {
        res.status(403).json({ message: 'Acceso Denegado' });
        return;
      }

      const data = req.body;
      const usuario = await UsuarioService.createFirstUser(data);
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
      const user = (req as any)['user'];
      const rol = user.rol === 'admin_nac' ? 'Administrador Nacional' : 
      user.rol === 'admin_prov' ? 'Administrador Provincial' : 'Usuario restringido';
      const provincia = user.provincia ? user.provincia : 'Todas';

      res.status(200).json({ usuario: `${user.nombre}`, 
                             rol: rol,
                             provincia: provincia });
      return;
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public async deleteUsuario(req: Request, res: Response) {
    try {
      const usuarioToken = (req as any)['user'];
      const { id } = req.params;
      await UsuarioService.deleteUsuario(String(id), usuarioToken.id );
      res.status(200).send('Usuario eliminado');
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(404).send(errorMessage);
    }
  }
  
}




export default new UsuarioController();