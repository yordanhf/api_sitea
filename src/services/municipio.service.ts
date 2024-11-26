// src/services/municipio.service.ts
import Municipio from '../models/municipio.model';
import MunicipioRepository from '../repositories/municipio.repository';

class MunicipioService {
  public async createMunicipio(data: Partial<Municipio>) {
    return await MunicipioRepository.createMunicipio(data);
  }

  public async getAllMunicipio() {
    return await MunicipioRepository.findAllMunicipio();
  }

  public async getMunicipioById(id: number) {
    const municipio = await MunicipioRepository.findMunicipioById(id);
    if (!municipio) {
      throw new Error('Municipio no encontrado');
    }
    return municipio;
  }

  public async updateMunicipio(id: number, data: Partial<Municipio>) {
    return await MunicipioRepository.updateMunicipio(id, data);
  }

  public async deleteMunicipio(id: number) {
    const deleted = await MunicipioRepository.deleteMunicipio(id);
    if (deleted === 0) {
      throw new Error('Municipio no encontrado');
    }
    return deleted;
  }
}

export default new MunicipioService();
