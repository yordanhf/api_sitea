// Interconsulta Service (interconsulta.service.ts)
import Paciente from '../models/paciente.model';
import Interconsulta from '../models/interconsulta.model';
import InterconsultaRepository from '../repositories/interconsulta.repository';

class InterconsultaService {
  public async createInterconsulta(data: Partial<Interconsulta>) {
    return await InterconsultaRepository.createInterconsulta(data);
  }

  public async getAllInterconsultas() {
    return await InterconsultaRepository.findAllInterconsultas();
  }

  public async getInterconsultaById(id: string) {
    const interconsulta = await InterconsultaRepository.findInterconsultaById(id);
    if (!interconsulta) {
      throw new Error('Interconsulta no encontrada');
    }
    return interconsulta;
  }

  public async updateInterconsulta(id: string, data: Partial<Interconsulta>) {
    return await InterconsultaRepository.updateInterconsulta(id, data);
  }

  public async deleteInterconsulta(id: string) {
    return await InterconsultaRepository.deleteInterconsulta(id);
  }
  //otras consultas 
  public async getInterconsultasByPacienteId(pacienteId: string) {
    const paciente = await Paciente.findByPk(pacienteId);
    if (!paciente) {
      throw new Error('Paciente no encontrado');
    }
    return await InterconsultaRepository.findInterconsultasByPacienteId(pacienteId);
  }
}

export default new InterconsultaService();