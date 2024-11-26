// 2. Paciente Service (paciente.service.ts)
import Paciente from '../models/paciente.model';
import PacienteRepository from '../repositories/paciente.repository';

class PacienteService {
  public async createPaciente(data: Partial<Paciente>) {
    return await PacienteRepository.createPaciente(data);
  }

  public async getAllPacientes() {
    return await PacienteRepository.findAllPacientes();
  }

  public async getPacienteById(id: number) {
    const paciente = await PacienteRepository.findPacienteById(id);
    if (!paciente) {
      throw new Error('Paciente no encontrado');
    }
    return paciente;
  }

  public async getAllPacientesByMunicipio(municipio: string) {
    const pacientes = await PacienteRepository.findAllPacientesByMunicipio(municipio);
    return { cant: pacientes.length, data:pacientes }
  }


  public async updatePaciente(id: number, data: Partial<Paciente>) {
    return await PacienteRepository.updatePaciente(id, data);
  }

  public async deletePaciente(id: number) {
    const deleted = await PacienteRepository.deletePaciente(id);
    if (deleted === 0) {
      throw new Error('Paciente no encontrado');
    }
    return deleted;
  }
}

export default new PacienteService();