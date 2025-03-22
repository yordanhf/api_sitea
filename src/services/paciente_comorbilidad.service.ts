import Paciente_Comorbilidad from '../models/paciente_comorbilidad.model';
import Paciente_ComorbilidadRepository from '../repositories/paciente_comorbilidad.repository';

class Paciente_ComorbilidadService {
  public async createPaciente_Comorbilidad(data: Partial<Paciente_Comorbilidad>) {
    return await Paciente_ComorbilidadRepository.createPaciente_Comorbilidad(data);
  }

  public async getAllPaciente_Comorbilidad() {
    return await Paciente_ComorbilidadRepository.findAllPaciente_Comorbilidad();
  }

  public async getPaciente_ComorbilidadById(id: string) {
    const paciente_comorbilidad = await Paciente_ComorbilidadRepository.findPaciente_ComorbilidadById(id);
    if (!paciente_comorbilidad) {
      throw new Error('paciente_comorbilidad no encontrado');
    }
    return paciente_comorbilidad;
  }

  public async getPaciente_ComorbilidadByPacienteId(pacienteId: string) {
    return await Paciente_ComorbilidadRepository.findPaciente_ComorbilidadByPacienteId(pacienteId);
  }

  public async updatePaciente_Comorbilidad(id: string, data: Partial<Paciente_Comorbilidad>) {
    return await Paciente_ComorbilidadRepository.updatePaciente_Comorbilidad(id, data);
  }

  public async deletePaciente_Comorbilidad(id: string) {
    const deleted = await Paciente_ComorbilidadRepository.deletePaciente_Comorbilidad(id);
    if (deleted === 0) {
      throw new Error('paciente_comorbilidad no encontrado');
    }
    return deleted;
  }
}

export default new Paciente_ComorbilidadService();
