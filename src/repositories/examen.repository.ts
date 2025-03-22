import Examen from '../models/examen.model';

class ExamenRepository {
  public async createExamen(nombre: string) {
    return await Examen.create({ nombre });
  }

  public async findAllExamen() {
    return await Examen.findAll();
  }

  public async findExamenById(id: string) {
    return await Examen.findByPk(id);
  }

  public async updateExamen(id: string, data: Partial<Examen>) {
    const examen = await Examen.findByPk(id);
    if (examen) {
      return await examen.update(data);
    }
    throw new Error('Examen no encontrado');
  }


  public async deleteExamen(id: string) {
    const deleted = await Examen.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Examen no encontrado');
  }

}

export default new ExamenRepository();
