import Examen from '../models/examen.model';
import ExamenRepository from '../repositories/examen.repository';

class ExamenService {
  public async createExamen(nombre: string) {
    return await ExamenRepository.createExamen( nombre );
  }

  public async getAllExamen() {
    return await ExamenRepository.findAllExamen();
  }

  public async getExamenById(id: number) {
    const examen = await ExamenRepository.findExamenById(id);
    if (!examen) {
      throw new Error('examen no encontrado');
    }
    return examen;
  }

  public async updateExamen(id: number, data: Partial<Examen>) {
    return await ExamenRepository.updateExamen(id, data);
  }

  public async deleteExamen(id: number) {
    const deleted = await ExamenRepository.deleteExamen(id);
    if (deleted === 0) {
      throw new Error('Examen no encontrado');
    }
    return deleted;
  }
}

export default new ExamenService();