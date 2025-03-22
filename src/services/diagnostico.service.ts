import Diagnostico from '../models/diagnostico.model';
import DiagnosticoRepository from '../repositories/diagnostico.repository';

class DiagnosticoService {
  public async createDiagnostico(nombre: string) {
    return await DiagnosticoRepository.createDiagnostico( nombre );
  }

  public async getAllDiagnostico() {
    return await DiagnosticoRepository.findAllDiagnostico();
  }

  public async getDiagnosticoById(id: string) {
    const diagnostico = await DiagnosticoRepository.findDiagnosticoById(id);
    if (!diagnostico) {
      throw new Error('Diagnostico no encontrado');
    }
    return diagnostico;
  }

  public async updateDiagnostico(id: string, data: Partial<Diagnostico>) {
    return await DiagnosticoRepository.updateDiagnostico(id, data);
  }

  public async deleteDiagnostico(id: string) {
    const deleted = await DiagnosticoRepository.deleteDiagnostico(id);
    if (deleted === 0) {
      throw new Error('Diagnostico no encontrado');
    }
    return deleted;
  }
}

export default new DiagnosticoService();