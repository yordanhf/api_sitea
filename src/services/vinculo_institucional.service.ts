import VinculoInstitucional from '../models/vinculo_institucional.model';
import VinculoInstitucionalRepository from '../repositories/vinculo_institucional.repository';

class VinculoInstitucionalService {
  public async createVinculoInstitucional(nombre: string) {
    return await VinculoInstitucionalRepository.createVinculoInstitucional( nombre );
  }

  public async getAllVinculoInstitucional() {
    return await VinculoInstitucionalRepository.findAllVinculoInstitucional();
  }

  public async getVinculoInstitucionalById(id: string) {
    const vinculo_institucional = await VinculoInstitucionalRepository.findVinculoInstitucionalById(id);
    if (!vinculo_institucional) {
      throw new Error('Vinculo Institucional no encontrado');
    }
    return vinculo_institucional;
  }

  public async updateVinculoInstitucional(id: string, data: Partial<VinculoInstitucional>) {
    return await VinculoInstitucionalRepository.updateVinculoInstitucional(id, data);
  }

  public async deleteVinculoInstitucional(id: string) {
    const deleted = await VinculoInstitucionalRepository.deleteVinculoInstitucional(id);
    if (deleted === 0) {
      throw new Error('Vinculo Institucional no encontrado');
    }
    return deleted;
  }
}

export default new VinculoInstitucionalService();