import CClinica from '../models/cclinica.model';

class CClinicaRepository {
  public async createCClinica(nombre: string) {
    return await CClinica.create({ nombre });
  }

  public async findAllCClinica() {
    return await CClinica.findAll();
  }

  public async findCClinicaById(id: string) {
    return await CClinica.findByPk(id);
  }

  public async updateCClinica(id: string, data: Partial<CClinica>) {
    const cclinica = await CClinica.findByPk(id);
    if (cclinica) {
      return await cclinica.update(data);
    }
    throw new Error('CClinica no encontrada');
  }


  public async deleteCClinica(id: string) {
    const deleted = await CClinica.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('CClinica no encontrada');
  }

}

export default new CClinicaRepository();
