import Provincia from '../models/provincia.model';

class ProvinciaRepository {
  public async createProvincia(nombre: string) {
    return await Provincia.create({ nombre });
  }

  public async findAllProvincia() {
    return await Provincia.findAll();
  }

  public async findProvinciaById(id: number) {
    return await Provincia.findByPk(id);
  }

  public async updateProvincia(id: number, data: Partial<Provincia>) {
    const provincia = await Provincia.findByPk(id);
    if (provincia) {
      return await provincia.update(data);
    }
    throw new Error('Provincia no encontrada');
  }


  public async deleteProvincia(id: number) {
    const deleted = await Provincia.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Provincia no encontrada');
  }

}

export default new ProvinciaRepository();
