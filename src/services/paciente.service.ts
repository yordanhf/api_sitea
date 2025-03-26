// 2. Paciente Service (paciente.service.ts)
import Paciente from '../models/paciente.model';
import PacienteRepository from '../repositories/paciente.repository';
import LogService from './log.service';

class PacienteService {
  public async createPaciente(data: Partial<Paciente>, usuarioId: string) {
    const paciente =  await PacienteRepository.createPaciente(data);
    await LogService.createLog(usuarioId, 'Paciente', 'CREATE', `Creado paciente: ${paciente.ci}`);
    return paciente;

  }

  public async getAllPacientes() {
    return await PacienteRepository.findAllPacientes();
  }

  public async getPacienteById(id: string) {
    const paciente = await PacienteRepository.findPacienteById(id);
    if (!paciente) {
      throw new Error('Paciente no encontrado');
    }
    return paciente;
  }
  
  public async getPacientesByParams(params: any) {
    return await PacienteRepository.findPacientesByParams(params);
  }

  public async getAllPacientesByMunicipio(municipio: string) {
    const pacientes = await PacienteRepository.findAllPacientesByMunicipio(municipio);
    return { cant: pacientes.length, data:pacientes }
  }

  public async getPacientesCountByMunicipio() {
    return await PacienteRepository.getPacientesCountByMunicipio();
  }

  public async updatePaciente(id: string, data: Partial<Paciente>, usuarioId: string) {
    const paciente =  await PacienteRepository.updatePaciente(id, data);    
    await LogService.createLog(usuarioId, 'Paciente', 'UPDATE', `Actualizado paciente: ${paciente.ci}`);
    return paciente;
  }  

  public async deletePaciente(id: string, usuarioId: string) {
    const for_delete = await this.getPacienteById(id);
    const deleted_ci = for_delete.ci;
    const deleted = await PacienteRepository.deletePaciente(id);
    if (deleted === 0) {
      throw new Error('Paciente no encontrado');
    }
    await LogService.createLog(usuarioId, 'Paciente', 'DELETE', `Borrado paciente: ${deleted_ci}`);
    return deleted;
  }
}

export default new PacienteService();