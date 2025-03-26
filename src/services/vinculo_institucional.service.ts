import VinculoInstitucional from '../models/vinculo_institucional.model';
import VinculoInstitucionalRepository from '../repositories/vinculo_institucional.repository';
import LogService from './log.service';

class VinculoInstitucionalService {
  public async createVinculoInstitucional(nombre: string, usuarioId: string) {
    const vinculo_institucional =  await VinculoInstitucionalRepository.createVinculoInstitucional( nombre );
    await LogService.createLog(usuarioId, 'VinculoInstitucional', 'CREATE', `Creado vinculo institucional: ${vinculo_institucional.nombre}`); 
    return vinculo_institucional;
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

  public async updateVinculoInstitucional(id: string, data: Partial<VinculoInstitucional>, usuarioId: string) {
    const for_update = await VinculoInstitucionalRepository.updateVinculoInstitucional(id, data);
    await LogService.createLog(usuarioId, 'VinculoInstitucional', 'DELETE', `Borrado vinculo institucional: ${for_update.nombre}`);
    return for_update;
  }

  public async deleteVinculoInstitucional(id: string, usuarioId: string) {
    const for_delete = await this.getVinculoInstitucionalById(id);
    const deleted_nombre = for_delete.nombre;
    const deleted = await VinculoInstitucionalRepository.deleteVinculoInstitucional(id);
    if (deleted === 0) {
      throw new Error('Vinculo Institucional no encontrado');
    }
    await LogService.createLog(usuarioId, 'VinculoInstitucional', 'DELETE', `Borrado vinculo institucional: ${deleted_nombre}`);
    return deleted;
  }
}

export default new VinculoInstitucionalService();