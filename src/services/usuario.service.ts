// Servicio para Usuario (usuario.service.ts)
import UsuarioRepository from '../repositories/usuario.repository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../models/usuario.model';

class UsuarioService {
  public async createUsuario(data: Partial<Usuario>) {
    return await UsuarioRepository.createUsuario(data);
  }

  public async login(nombre: string, password: string) {
    const usuario = await UsuarioRepository.findByName(nombre);
    if (!usuario) {
      throw new Error('Credenciales inválidas');
    }

    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    if (!isPasswordValid) {
      throw new Error('Credenciales inválidas');
    }

    const token = jwt.sign(
      { id: usuario.id, nombre: usuario.nombre },
      process.env.JWT_SECRET || 'clave_predeterminada_muy_segura',
      { expiresIn: '1d' }
    );

    return { token };
  }
}

export default new UsuarioService();