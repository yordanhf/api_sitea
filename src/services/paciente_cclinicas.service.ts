import Paciente_CClinicas from '../models/paciente_cclinicas.model';
import Paciente_CClinicasRepository from '../repositories/paciente_cclinicas.repository';

class Paciente_CClinicasService {
  public async createPaciente_CClinicas(data: Partial<Paciente_CClinicas>) {
    return await Paciente_CClinicasRepository.createPaciente_CClinicas(data);
  }

  public async getAllPaciente_CClinicas() {
    return await Paciente_CClinicasRepository.findAllPaciente_CClinicas();
  }

  public async getPaciente_CClinicasById(id: number) {
    const paciente_cclinicas = await Paciente_CClinicasRepository.findPaciente_CClinicasById(id);
    if (!paciente_cclinicas) {
      throw new Error('paciente_cclinicas no encontrado');
    }
    return paciente_cclinicas;
  }

  public async getPaciente_CClinicasByPacienteId(pacienteId: number) {
    return await Paciente_CClinicasRepository.findPaciente_CClinicasByPacienteId(pacienteId);
  }

  public async updatePaciente_CClinicas(id: number, data: Partial<Paciente_CClinicas>) {
    return await Paciente_CClinicasRepository.updatePaciente_CClinicas(id, data);
  }

  public async deletePaciente_CClinicas(id: number) {
    const deleted = await Paciente_CClinicasRepository.deletePaciente_CClinicas(id);
    if (deleted === 0) {
      throw new Error('paciente_cclinicas no encontrado');
    }
    return deleted;
  }
}

export default new Paciente_CClinicasService();
