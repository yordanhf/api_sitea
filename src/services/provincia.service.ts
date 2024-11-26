import Provincia from '../models/provincia.model';
import ProvinciaRepository from '../repositories/provincia.repository';

class ProvinciaService {
  public async createProvincia(nombre: string) {
    return await ProvinciaRepository.createProvincia( nombre );
  }

  public async getAllProvincia() {
    return await ProvinciaRepository.findAllProvincia();
  }

  public async getProvinciaById(id: number) {
    const provincia = await ProvinciaRepository.findProvinciaById(id);
    if (!provincia) {
      throw new Error('Provincia no encontrada');
    }
    return provincia;
  }

  public async updateProvincia(id: number, data: Partial<Provincia>) {
    return await ProvinciaRepository.updateProvincia(id, data);
  }

  public async deleteProvincia(id: number) {
    const deleted = await ProvinciaRepository.deleteProvincia(id);
    if (deleted === 0) {
      throw new Error('Provincia no encontrada');
    }
    return deleted;
  }
}

export default new ProvinciaService();