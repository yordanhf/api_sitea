import ExamenComplementario from '../models/examenes_complementarios.model';
import Examenes_complementariosRepository from '../repositories/examenes_complementarios.repository';

class Examenes_complementariosService {
  
  public async createExamenes_complementarios(data: Partial<ExamenComplementario>) {
    return await Examenes_complementariosRepository.createExamenComplementario( data );
  }

  public async getAllExamenes_complementarios() {
    return await Examenes_complementariosRepository.findAllExamenComplementario();
  }

  public async getExamenes_complementariosById(id: string) {
    const examenes_complementarios = await Examenes_complementariosRepository.findExamenComplementarioById(id);
    if (!examenes_complementarios) {
      throw new Error('examenes complementarios no encontrados');
    }
    return examenes_complementarios;
  }

  public async getExamenes_complementariosByPacienteId(pacienteId: string) {
    return await Examenes_complementariosRepository.findExamenComplementarioByPacienteId(pacienteId);
  }

  public async updateExamen(id: string, data: Partial<ExamenComplementario>) {
    return await Examenes_complementariosRepository.updateExamenComplementario(id, data);
  }

  public async deleteExamenes_complementarios(id: string) {
    const deleted = await Examenes_complementariosRepository.deleteExamenComplementario(id);
    if (deleted === 0) {
      throw new Error('Examenes complementarios no encontrados');
    }
    return deleted;
  }
}

export default new Examenes_complementariosService();