// Servicio para Usuario (usuario.service.ts)
import UsuarioRepository from '../repositories/usuario.repository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../models/usuario.model';


class UsuarioService {
  public async createUsuario(data: Partial<Usuario>) {
    return await UsuarioRepository.createUsuario(data);
  }

  public async getAllUsuarios() {
    return await UsuarioRepository.findAllUsuarios();
  }

  public async getUsuarioByNombre(nombre: string) {
    return await UsuarioRepository.findByName(nombre);
  }

  public async chequearRespuesta(
    nombre: string,
    preguntaSeguridad: string,
    respuestaSeguridad: string    
  ) {
      // Buscar el usuario por nombre
      const usuario = await UsuarioRepository.findByName(nombre);
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }  
      // Verificar la pregunta y respuesta de seguridad
      if (
        !(await bcrypt.compare(preguntaSeguridad, usuario.preguntaSeguridad)) ||
        !(await bcrypt.compare(respuestaSeguridad, usuario.respuestaSeguridad))
      ) {
        return false;
      }      
      return true;       
  }

  public async recuperarContrasena(
    nombre: string,
    preguntaSeguridad: string,
    respuestaSeguridad: string,
    nuevaContrasena: string
  ) {
    
      // Buscar el usuario por nombre
      const usuario = await UsuarioRepository.findByName(nombre);
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
  
      // Verificar la pregunta y respuesta de seguridad
      if (
        !(await bcrypt.compare(preguntaSeguridad, usuario.preguntaSeguridad)) ||
        !(await bcrypt.compare(respuestaSeguridad, usuario.respuestaSeguridad))
      ) {
        throw new Error('Pregunta o respuesta de seguridad incorrecta');
      }
  
      // Actualizar la contraseña utilizando el repositorio
      await UsuarioRepository.UpdatePassword(usuario, nuevaContrasena);
      
    
  }

  public async login(nombre: string, password: string) {
    const usuario = await UsuarioRepository.findByName(nombre);
    if (!usuario) {
      throw new Error('Usuario inválido');
    }

    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    if (!isPasswordValid) {
      throw new Error('Contraseña incorrecta');
    }

    const token = jwt.sign(
      { id: usuario.id, nombre: usuario.nombre },
      process.env.JWT_SECRET ?? 'clave_predeterminada_muy_segura',
      { expiresIn: '30d' }
    );

    return { token };
  }
}

export default new UsuarioService();