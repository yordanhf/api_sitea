import VinculoInstitucional from '../models/vinculo_institucional.model';
import VinculoInstitucionalRepository from '../repositories/vinculo_institucional.repository';

class VinculoInstitucionalService {
  public async createVinculoInstitucional(nombre: string) {
    return await VinculoInstitucionalRepository.createVinculoInstitucional( nombre );
  }

  public async getAllVinculoInstitucional() {
    return await VinculoInstitucionalRepository.findAllVinculoInstitucional();
  }

  public async getVinculoInstitucionalById(id: number) {
    const vinculo_institucional = await VinculoInstitucionalRepository.findVinculoInstitucionalById(id);
    if (!vinculo_institucional) {
      throw new Error('Vinculo Institucional no encontrado');
    }
    return vinculo_institucional;
  }

  public async updateVinculoInstitucional(id: number, data: Partial<VinculoInstitucional>) {
    return await VinculoInstitucionalRepository.updateVinculoInstitucional(id, data);
  }

  public async deleteVinculoInstitucional(id: number) {
    const deleted = await VinculoInstitucionalRepository.deleteVinculoInstitucional(id);
    if (deleted === 0) {
      throw new Error('Vinculo Institucional no encontrado');
    }
    return deleted;
  }
}

export default new VinculoInstitucionalService();