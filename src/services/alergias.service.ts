import AlergiaRepository from '../repositories/alergias.repository';
import Alergias from '../models/alergias.model';

class AlergiaService {
  public async createAlergia(data: Partial<Alergias>) {
    return await AlergiaRepository.createAlergia(data);
  }

  public async getAllAlergias() {
    return await AlergiaRepository.findAllAlergias();
  }

  public async getAlergiaById(id: string) {
    const alergia = await AlergiaRepository.findAlergiaById(id);
    if (!alergia) {
      throw new Error('Alergia no encontrada');
    }
    return alergia;
  }

  public async getAlergiasByPacienteId(pacienteId: string) {
    return await AlergiaRepository.findAlergiasByPacienteId(pacienteId);
  }

  public async updateAlergia(id: string, data: Partial<Alergias>) {
    return await AlergiaRepository.updateAlergia(id, data);
  }

  public async deleteAlergia(id: string) {
    return await AlergiaRepository.deleteAlergia(id);
  }
}

export default new AlergiaService();