import Fortaleza from '../models/fortaleza.model';

class FortalezaRepository {
  public async createFortaleza(nombre: string) {
    return await Fortaleza.create({ nombre });
  }

  public async findAllFortaleza() {
    return await Fortaleza.findAll();
  }

  public async findFortalezaById(id: string) {
    return await Fortaleza.findByPk(id);
  }

  public async updateFortaleza(id: string, data: Partial<Fortaleza>) {
    const fortaleza = await Fortaleza.findByPk(id);
    if (fortaleza) {
      return await fortaleza.update(data);
    }
    throw new Error('Fortaleza no encontrada');
  }


  public async deleteFortaleza(id: string) {
    const deleted = await Fortaleza.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Fortaleza no encontrada');
  }

}

export default new FortalezaRepository();
