import Paciente_Fortaleza from '../models/paciente_fortaleza.model';
import Paciente_FortalezaRepository from '../repositories/paciente_fortaleza.repository';

class Paciente_FortalezaService {
  public async createPaciente_Fortaleza(data: Partial<Paciente_Fortaleza>) {
    return await Paciente_FortalezaRepository.createPaciente_Fortaleza(data);
  }

  public async getAllPaciente_Fortaleza() {
    return await Paciente_FortalezaRepository.findAllPaciente_Fortaleza();
  }

  public async getPaciente_FortalezaById(id: string) {
    const paciente_fortaleza = await Paciente_FortalezaRepository.findPaciente_FortalezaById(id);
    if (!paciente_fortaleza) {
      throw new Error('paciente_fortaleza no encontrado');
    }
    return paciente_fortaleza;
  }

  public async getPaciente_FortalezaByPacienteId(pacienteId: string) {
    return await Paciente_FortalezaRepository.findPaciente_FortalezaByPacienteId(pacienteId);
  }

  public async updatePaciente_Fortaleza(id: string, data: Partial<Paciente_Fortaleza>) {
    return await Paciente_FortalezaRepository.updatePaciente_Fortaleza(id, data);
  }

  public async deletePaciente_Fortaleza(id: string) {
    const deleted = await Paciente_FortalezaRepository.deletePaciente_Fortaleza(id);
    if (deleted === 0) {
      throw new Error('paciente_fortaleza no encontrado');
    }
    return deleted;
  }
}

export default new Paciente_FortalezaService();
