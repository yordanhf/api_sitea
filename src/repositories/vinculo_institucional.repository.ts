import VinculoInstitucional from '../models/vinculo_institucional.model';

class VinculoInstitucionalRepository {
  public async createVinculoInstitucional(nombre: string) {
    return await VinculoInstitucional.create({ nombre });
  }

  public async findAllVinculoInstitucional() {
    return await VinculoInstitucional.findAll();
  }

  public async findVinculoInstitucionalById(id: string) {
    return await VinculoInstitucional.findByPk(id);
  }

  public async updateVinculoInstitucional(id: string, data: Partial<VinculoInstitucional>) {
    const vinculo_institucional = await VinculoInstitucional.findByPk(id);
    if (vinculo_institucional) {
      return await vinculo_institucional.update(data);
    }
    throw new Error('Vinculo institucional no encontrado');
  }

  public async deleteVinculoInstitucional(id: string) {
    const deleted = await VinculoInstitucional.destroy({ where: { id } });
    if (deleted) {
      return deleted;
    }
    throw new Error('Vinculo institucional no encontrado');
  } 
}

export default new VinculoInstitucionalRepository();
