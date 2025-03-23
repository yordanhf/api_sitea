import Comorbilidad from '../models/comorbilidad.model';

class ComorbilidadRepository {
  public async createComorbilidad(nombre: string) {
    return await Comorbilidad.create({ nombre });
  }

  public async findAllComorbilidad() {
    return await Comorbilidad.findAll();
  }

  public async findComorbilidadById(id: string) {
    return await Comorbilidad.findByPk(id);
  }

  public async updateComorbilidad(id: string, data: Partial<Comorbilidad>) {
    const comorbilidad = await Comorbilidad.findByPk(id);
    if (comorbilidad) {
      return await comorbilidad.update(data);
    }
    throw new Error('Comorbilidad no encontrada');
  }


  public async deleteComorbilidad(id: string) {
    const deleted = await Comorbilidad.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Comorbilidad no encontrada');
  }

}

export default new ComorbilidadRepository();
