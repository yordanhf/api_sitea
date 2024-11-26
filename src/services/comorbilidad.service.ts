import Comorbilidad from '../models/comorbilidad.model';
import ComorbilidadRepository from '../repositories/comorbilidad.repository';

class ComorbilidadService {
  public async createComorbilidad(nombre: string) {
    return await ComorbilidadRepository.createComorbilidad( nombre );
  }

  public async getAllComorbilidad() {
    return await ComorbilidadRepository.findAllComorbilidad();
  }

  public async getComorbilidadById(id: number) {
    const comorbilidad = await ComorbilidadRepository.findComorbilidadById(id);
    if (!comorbilidad) {
      throw new Error('Comorbilidad no encontrada');
    }
    return comorbilidad;
  }

  public async updateComorbilidad(id: number, data: Partial<Comorbilidad>) {
    return await ComorbilidadRepository.updateComorbilidad(id, data);
  }

  public async deleteComorbilidad(id: number) {
    const deleted = await ComorbilidadRepository.deleteComorbilidad(id);
    if (deleted === 0) {
      throw new Error('Comorbilidad no encontrada');
    }
    return deleted;
  }
}

export default new ComorbilidadService();