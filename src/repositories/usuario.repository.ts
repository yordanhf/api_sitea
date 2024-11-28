import Usuario from '../models/usuario.model';

class UsuarioRepository {
  public async findByName(nombre: string) {
    return await Usuario.findOne({ where: { nombre } });
  }

  public async createUsuario(data: Partial<Usuario>) {
    return await Usuario.create(data);
  }
}

export default new UsuarioRepository();
