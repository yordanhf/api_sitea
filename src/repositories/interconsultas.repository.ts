import Interconsultas from '../models/interconsultas.model';

class InterconsultasRepository {
  public async createInterconsultas(nombre: string) {
    return await Interconsultas.create({ nombre });
  }

  public async findAllInterconsultas() {
    return await Interconsultas.findAll();
  }

  public async findInterconsultasById(id: string) {
    return await Interconsultas.findByPk(id);
  }

  public async updateInterconsultas(id: string, data: Partial<Interconsultas>) {
    const interconsultas = await Interconsultas.findByPk(id);
    if (interconsultas) {
      return await interconsultas.update(data);
    }
    throw new Error('Interconsultas no encontrada');
  }


  public async deleteInterconsultas(id: string) {
    const deleted = await Interconsultas.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Interconsultas no encontrada');
  }

}

export default new InterconsultasRepository();
