import Usuario from '../models/usuario.model';

class UsuarioRepository {
  public async findByName(nombre: string) {
    return await Usuario.findOne({ where: { nombre } });
  }

  public async findAllUsuarios() {
    return await Usuario.findAll();
  }

  public async UpdatePassword(usuario: Usuario, nuevaContrasena: string){    
    try {
      usuario.password = nuevaContrasena;
      await usuario.save();
    } catch (error) {
      throw new Error('Error al actualizar la contraseña');
    }
  }

  public async createUsuario(data: Partial<Usuario>) {
    return await Usuario.create(data);
  }
}

export default new UsuarioRepository();
